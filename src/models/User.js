const { Schema, model } = require('mongoose')

// const userSchema = new Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   roles: [{ type: String, ref: 'Role' }]
// });

// const User = model('User', userSchema);

// export { User };

let userModel;

const getUserModel = () => {
  console.log(userModel);
  if (userModel) { return userModel };

  const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: 'Role' }]
  });

  userModel = model('User', userSchema);
  return userModel;
}

export { getUserModel };
