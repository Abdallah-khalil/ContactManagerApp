import { sign } from 'jsonwebtoken';
import { Component, Inject } from '@nestjs/common';
import { promise } from 'selenium-webdriver';
import { User } from '../user/user.schema';


@Component()
// tslint:disable-next-line:component-class-suffix
export class AuthService {
    constructor() { }

    public createToken(user: User): any {
        const expiresIn = '48h', secretOrKey = process.env.JWT_SWECRET;
        const Payload = { username: user.username, admin: user.admin };
        const token = sign(Payload, secretOrKey, { expiresIn });
        return {
            message: 'Success',
            token: token,
            expiresIn: expiresIn
        };
    }


    async validateUser(user): Promise<boolean> {
        return true;
    }
}
