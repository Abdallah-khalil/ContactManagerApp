import { Module } from '@nestjs/common';
import { DBConfigModule } from '../dbConfig/dbConfig.module';
import { ContactProviders } from './contact.providers';
import { ContactServiceComponent } from './contact.service';
import { ContactController } from './contact.controller';
@Module({
    modules: [DBConfigModule],
    components: [...ContactProviders, ContactServiceComponent],
    controllers: [ContactController]
})
export class ContactsModule { }
