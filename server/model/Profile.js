import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// User Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    location: {
        type: String
    },
    website: {
        type: String
    },
    social: {
        youtube: {
          type: String
        },
        twitter: {
          type: String
        },
        facebook: {
          type: String
        },
        linkedin: {
          type: String
        },
        instagram: {
          type: String
        }
      },

      friends: [{ type: Schema.Types.ObjectId, ref: 'users'}]
});



export const ProfileModel = mongoose.model('profiles', ProfileSchema);