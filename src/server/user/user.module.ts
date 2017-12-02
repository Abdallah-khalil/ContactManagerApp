import { Module } from '@nestjs/common';
import { DBConfigModule } from '../dbConfig/dbConfig.module';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';


@Module({
    modules: [DBConfigModule],
    components: [...UserProviders, UserService],
    controllers: [],
    exports: [UserService]
})
export class UserModule {

}
