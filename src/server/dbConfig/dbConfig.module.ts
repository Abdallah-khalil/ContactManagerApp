import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';

import { DBConfigProviders } from './dbConfig.providers';
@Module({
    modules: [CommonModule],
    components: [...DBConfigProviders],
    exports: [...DBConfigProviders]
})
export class DBConfigModule { }
