import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as path from 'path';
import { ApplicationModule } from './app.module';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const expressApp: express.Application = express();
expressApp.use(express.static(path.join(__dirname, 'public')));
expressApp.use('/profiles', express.static(path.join(__dirname, 'data/profiles')));


async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule, expressApp);
    app.setGlobalPrefix('api');
    app.use(cors());
    app.use(bodyParser.json());
    await app.listen(process.env.PORT, () => {
        console.log('APP is listening on port ' + process.env.PORT);
    });
}
bootstrap();
