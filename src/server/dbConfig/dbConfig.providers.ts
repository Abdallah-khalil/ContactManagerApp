import * as mongoose from 'mongoose';
import { SecretKeysComponent } from '../common/secretKeys.service';
import { async } from '@angular/core/testing';
import { mongo } from 'mongoose';

export const DBConfigProviders = [
    {
        provide: new SecretKeysComponent().getDBToken(),
        useFactory: async (): Promise<mongoose.Connection> => {
            return await mongoose.connect(process.env.DB_CONN, {
                useMongoClient: true
            });
        }
    }
];
