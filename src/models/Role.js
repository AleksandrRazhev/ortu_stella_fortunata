const { Schema, model } = require('mongoose');

// const roleSchema = new Schema({
//   value: { type: String, unique: true, default: 'user' },
// });

// const Role = model('Role', roleSchema);

// export { Role };

let Role;

const getRoleModel = () => {
  if (Role) { return Role }
  const roleSchema = new Schema({
    value: { type: String, unique: true, default: 'user' },
  });

  Role = model('Role', roleSchema);

  return Role;
}

export { getRoleModel };
