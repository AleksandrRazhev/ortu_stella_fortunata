import { User } from '../models/User';
import { Role } from '../models/Role';
import { Post } from '../models/Post';
import { Article } from '../models/Article';

require('dotenv').config();
const mongoose = require('mongoose');
const { Check, check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export default function authController() {

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
      console.log('Статьи');
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Articles fetch error' });
    };
  };

  const getUsers = async (req, res) => {
    try {
      console.log('Список пользователей');
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Users fetch error' });
    };
  }

  const login = async (req, res) => {
    try {
      await connect();
      const { password } = req.body;
      if (password !== 'qwe') {
        console.log('Password error');
        return res.status(400).json({ message: 'Password error' });
      }

      console.log('Login successful');
      return res.status(200).json({ message: 'Login successful' });
    } catch (e) {
      console.log('Function login error');
      console.log(e);
      return res.status(400).json({ message: 'Function login error' });
    };
  }

  const registration = async (req, res) => {
    try {
      await connect();
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: 'The user already exists' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: 'user' });
      const user = new User({ username, password: hashPassword, roles: [userRole.value] });
      await user.save();
      console.log('Registration successful');
      return res.status(200).json({ message: 'Registration successful' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    };
  }

  const addArticle = async (req, res) => {
    try {
      await connect();
      const { username, password, title, text, images } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        console.log('User not found');
        return res.status(400).json({ message: 'User not found' })
      };
      const access = user.roles.find(item => item === 'admin');
      if (!access) {
        console.log('No access');
        return res.status(400).json({ message: 'No access' })
      };
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        console.log('Password is incorrect');
        return res.status(400).json({ message: 'Password is incorrect' })
      }

      const newArticle = new Article({ title, text, images });
      await newArticle.save();
      console.log('Added article');
      return res.status(200).json({ message: 'Added article' });
    } catch (e) {
      console.log('Article not added');
      console.log(e);
      res.status(400).json({ message: 'Article not added' });
    }
  }

  return { connect, getArticles, getUsers, login, registration, addArticle }
};
