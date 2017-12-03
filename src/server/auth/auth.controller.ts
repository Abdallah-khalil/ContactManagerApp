import { Controller, Post, HttpCode, HttpStatus, Body, Res, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/user.schema';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly userService: UserService) { }

    @Post('/authenticate')
    async CreateToken( @Body() reqBody: User, @Res() res) {
        return await this.userService.FindUser(reqBody).then(user => {
            if (!user) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: 'User Not Found'
                });
            }
            if (!compareSync(reqBody.password, user.password)) {
                res.status(HttpStatus.BAD_REQUEST).json({
                    message: 'Error in Username or Password'
                });
            } else {
                return res.json(
                    this.authService.createToken(user)
                );
            }
        });
    }
}
