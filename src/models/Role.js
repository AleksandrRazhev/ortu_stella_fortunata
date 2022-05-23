const mongoose = require('mongoose')
const { Schema, model } = mongoose

const roleSchema = new Schema({
  value: { type: String, unique: true, default: 'user' },
});

const RoleModel = mongoose.models.Role || model('Role', roleSchema);

export { RoleModel };

