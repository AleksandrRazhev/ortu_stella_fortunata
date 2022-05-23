import * as yup from 'yup';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs/dist/bcrypt';
import { default as jwt } from 'jsonwebtoken';

import { RoleModel } from '../models/Role';
import { ArticleModel } from '../models/Article';
import { UserModel } from '../models/User';

// import { PostModel } from '../models/Post';

import { secret } from '../../config';

const generateAccessToken = (id, roles) => {
  const payload = { id, roles };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
}

export default function authController() {
  const message = (response, resStatus, text) => {
    console.log(text);
    // TODO: figure out why response can be undefined
    return response && response.status(resStatus).json({ message: text });
  }

  const connect = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oqowt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
      console.log('DB connected');
    } catch (e) {
      console.log(e);
    };
  };

  const getArticles = async (req, res) => {
    try {
      message(res, 200, 'Articles sent');
    } catch (e) {
      message(res, 400, 'Articles not sent');
    };
  };

  const getUsers = async (req, res) => {
    try {
      await connect();
      message(res, 200, 'Users sent');
    } catch (e) {
      message(res, 400, 'Users not sent');
    };
  }

  const login = async (req, res) => {
    try {
      await connect();

      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user) {
        message(res, 400, 'User not found');
        return;
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        message(res, 400, 'Password is incorrect');
        return;
      }
      const token = generateAccessToken(user._id, user.roles)
      console.log('Login successful');
      return res.json({ token });
    } catch (e) {
      console.log(e);
      message(res, 400, 'Function login error');
    };
  }

  const registration = async (req, res) => {
    try {

      const validationSchema = yup.object().shape({
        username: yup.string().required().min(2).max(50),
        password: yup.string().required().min(2).max(50),
        email: yup.string().required().email(),
      })

      const validation = await validationSchema.validate(req.body).catch(err => err.params.path);
      if (validation !== req.body) {
        message(res, 400, `Validation eror ${validation}`);
        return;
      };

      const { username, password, email } = req.body;


      await connect();
      const candidate = await UserModel.findOne({ username });
      // const candidateEmail = await UserModel.findOne({ email });

      if (candidate) {
        message(res, 400, 'The user already exists');
        return;
      }
      // if (candidateEmail) {
      //   message(res, 400, 'The email already exists');
      //   return;
      // }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await RoleModel.findOne({ value: 'user' });
      const user = new UserModel({ username, password: hashPassword, email, roles: [userRole.value] });
      await user.save();
      message(res, 200, 'Registration successful');
      return;
    } catch (e) {
      console.log(e);
      message(res, 400, 'Function registration error');
      return;
    };
  }

  const addArticle = async (req, res) => {
    try {
      await connect();

      const { username, password, title, text, images } = req.body;

      const user = await UserModel.findOne({ username });
      if (!user) {
        message(res, 400, 'User not found');
        return;
      };
      const access = user.roles.find(item => item === 'admin');
      if (!access) {
        message(res, 400, 'No access');
        return;
      };
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        message(res, 400, 'Password is incorrect');
        return;
      }

      const newArticle = new ArticleModel({ title, text, images });
      await newArticle.save();
      message(res, 400, 'Article added');
    } catch (e) {
      console.log(e);
      message(res, 400, 'Article not added');
    }
  }

  return { connect, getArticles, getUsers, login, registration, addArticle }
};
