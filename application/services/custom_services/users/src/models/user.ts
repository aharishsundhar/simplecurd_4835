
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
   name: String,
   email: String
})

const userModel = mongoose.model('user', userSchema, 'user');
export default userModel;
