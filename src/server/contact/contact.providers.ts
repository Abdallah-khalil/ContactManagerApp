import { Connection } from 'mongoose';
import { ContactSchema } from './contact.schema';
import { async, inject } from '@angular/core/testing';
import { SecretKeysComponent } from '../common/secretKeys.service';

export const ContactProviders = [
    {
        provide: new SecretKeysComponent().getContactToken(),
        useFactory: async (conn: Connection) => conn.model('contact', ContactSchema),
        inject: [new SecretKeysComponent().getDBToken()]
    }
];
