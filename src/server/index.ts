import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { HttpStatus } from '@nestjs/common';
import * as express from 'express';
import * as path from 'path';
import { ApplicationModule } from './app.module';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as expressJWT from 'express-jwt';
dotenv.config();

const expressApp: express.Application = express();
expressApp.use(express.static(path.join(__dirname, 'public')));
expressApp.use('/profiles', express.static(path.join(__dirname, 'data/profiles')));


async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule, expressApp);
    app.setGlobalPrefix('api');
    app.use(cors());
    app.use(bodyParser.json());
    app.use(expressJWT({ secret: process.env.JWT_SWECRET }).unless({ path: '/api/auth/authenticate' }), (error, req, res, next) => {
        if (error.name === 'UnauthorizedError') {
            res.status(HttpStatus.UNAUTHORIZED).json({
                message: error.message
            });
        }
    });
    await app.listen(process.env.PORT, () => {
        console.log('APP is listening on port ' + process.env.PORT);
    });
}
bootstrap();
