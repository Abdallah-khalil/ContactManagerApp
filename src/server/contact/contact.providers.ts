import { Connection } from 'mongoose';
import { ContactSchema } from './contact.schema';
import { SecretKeysComponent } from '../common/secretKeys.service';

export const ContactProviders = [
    {
        provide: new SecretKeysComponent().getProvToken().contact,
        useFactory: async (conn: Connection) => conn.model('contact', ContactSchema),
        inject: [new SecretKeysComponent().getDBToken()]
    }
];
