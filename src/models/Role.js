const { Schema, model } = require('mongoose');

// const roleSchema = new Schema({
//   value: { type: String, unique: true, default: 'user' },
// });

// const Role = model('Role', roleSchema);

// export { Role };

let roleModel;

const getRoleModel = () => {
  if (roleModel) { return roleModel }
  const roleSchema = new Schema({
    value: { type: String, unique: true, default: 'user' },
  });

  roleModel = model('Role', roleSchema);

  return roleModel;
}

export { getRoleModel };
