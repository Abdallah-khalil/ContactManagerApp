import { Connection } from 'mongoose';
import { UserSchema } from './user.schema';
import { SecretKeysComponent } from '../common/secretKeys.service';

export const UserProviders = [
    {
        provide: new SecretKeysComponent().getProvToken().user,
        useFactory: async (conn: Connection) => conn.model('user', UserSchema),
        inject: [new SecretKeysComponent().getDBToken()]
    }
];
