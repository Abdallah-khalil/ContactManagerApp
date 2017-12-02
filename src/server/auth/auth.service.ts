import { sign } from 'jsonwebtoken';
import { Component, Inject } from '@nestjs/common';
import { promise } from 'selenium-webdriver';
import { User } from '../user/user.schema';


@Component()
// tslint:disable-next-line:component-class-suffix
export class AuthService {
    constructor() { }

    async createToken(user: User): Promise<any> {
        const expiresIn = '48h', secretOrKey = process.env.JWT_SWECRET;
        const Payload = { username: user.username, admin: user.admin };
        const token = sign(user, secretOrKey, { expiresIn });
        return {
            expiresIn,
            token,
        };
    }


    async validateUser(user): Promise<boolean> {
        return true;
    }
}
