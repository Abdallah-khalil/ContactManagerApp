import { Controller, All, Res, Req } from '@nestjs/common';
import { async } from '@angular/core/testing';
import * as path from 'path';
@Controller()
export class HomeController {
    constructor() { }

    @All('*')
    async getIndex( @Res() res) {
        return await res.sendFile(path.join(__dirname, 'public/index.html'));
    }
}
