const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
  value: { type: String, unique: true, default: 'user' },
});

const Role = model('Role', roleSchema);

export { Role };
