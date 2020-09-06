const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    UserName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of thoughts and replies on retrieval
UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;