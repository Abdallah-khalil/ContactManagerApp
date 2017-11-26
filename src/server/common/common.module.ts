import { Module } from '@nestjs/common';
import { Model } from 'mongoose';
import { SecretKeysComponent } from './secretKeys.service';
@Module({
    components: [SecretKeysComponent],
    exports: [SecretKeysComponent]
})
export class CommonModule {

}
