import { Document, Schema } from 'mongoose';
import { Stream } from 'stream';

export class AddContactDTO {
    readonly name: string;
    readonly address: string;
    readonly photoUrl: string;
    readonly phone: string;
}

export interface Contact extends Document {
    name: string;
    address: string;
    photoUrl: string;
    phone: string;
}


export const ContactSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    Phone: {
        type: String
    },
    PhotoUrl: {
        type: String
    }
});
