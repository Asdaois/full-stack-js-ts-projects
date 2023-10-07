import pkg from 'mongoose';

const { Schema, model } = pkg;

const UserSchema = new Schema({
  firstName: { type: String, required: true, minLength: 3 },
  lastName: { type: String, minLength: 3 },
  dateOfBirth: { type: Date },
  email: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  uid: { type: String }, // Firebase login
  avatar: { type: String }, // Image to show
});

UserSchema.virtual('displayName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.set('toJSON', { getters: true });

const User = model('User', UserSchema);

export default User;
