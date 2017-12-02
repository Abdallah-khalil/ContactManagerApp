import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { DBConfigModule } from '../dbConfig/dbConfig.module';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy.service';
import { AuthController } from './auth.controller';

@Module({
    modules: [DBConfigModule, UserModule],
    components: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {

}
