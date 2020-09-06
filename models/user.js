const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    UserName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;