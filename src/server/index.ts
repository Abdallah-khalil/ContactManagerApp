import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';


async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.setGlobalPrefix('api');
    /* app.use(cors());
    app.use(bodyParser.json()); */
    await app.listen(3003);
}
bootstrap();
