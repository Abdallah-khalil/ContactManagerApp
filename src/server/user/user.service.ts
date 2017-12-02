import { Model, Error } from 'mongoose';
import { Component, Inject, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { User, AddUserDTO } from './user.schema';
import { SecretKeysComponent } from '../common/secretKeys.service';

@Component()
// tslint:disable-next-line:component-class-suffix
export class UserService {
    constructor( @Inject(new SecretKeysComponent().getProvToken().user) private readonly userModel: Model<User>) { }

    async FindAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async FindUser(user: User): Promise<User> {
        return await this.userModel.findOne({ username: user.username });
    }
}
