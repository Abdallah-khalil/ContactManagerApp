import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
@Module({
    components: [],
    controllers: [HomeController]
})
export class HomeModule { }
