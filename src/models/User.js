const { Schema, model } = require('mongoose')

// const userSchema = new Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   roles: [{ type: String, ref: 'Role' }]
// });

// const User = model('User', userSchema);

// export { User };

let User;

const getUserModel = () => {
  if (User) {
    console.log('the user exists')
    return User;
   }
  const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: 'Role' }]
  });

  User = model('User', userSchema);

  return User;
}

export { getUserModel };
