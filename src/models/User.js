const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  roles: [{ type: String, ref: 'Role' }]
});

const UserModel = mongoose.models.User || model('User', userSchema);

export { UserModel };
