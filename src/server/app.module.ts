import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DBConfigModule } from './dbConfig/dbConfig.module';
import { ContactsModule } from './contact/contact.module';
@Module({
    modules: [ContactsModule, CommonModule, DBConfigModule]
})
export class ApplicationModule { }
