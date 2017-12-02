import { Document, Schema } from 'mongoose';


export class AddUserDTO {
   readonly username: string;
   readonly admin: boolean;
   readonly password: string;
}

export interface User extends Document {
    username?: string;
    admin?: boolean;
    password?: string;
}


export const UserSchema = new Schema({
    username: {
        type: String
    },
    admin: {
        type: Boolean
    },
    password: {
        type: String
    }
});
