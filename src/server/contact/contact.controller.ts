import { Controller, Get, Post, Put, Query, Body, Param, Req } from '@nestjs/common';
import { ContactServiceComponent } from './contact.service';
import { Contact, AddContactDTO } from './contact.schema';
import { async } from 'q';

@Controller('/contacts')
export class ContactController {
    constructor(private readonly contactSvc: ContactServiceComponent) { }

    @Get()
    async FindAll(): Promise<Contact[]> {
        return await this.contactSvc.FindAll();
    }

    @Post()
    async AddContact( @Body() addContactDTO: AddContactDTO): Promise<Contact> {
        return await this.contactSvc.addContact(addContactDTO);
    }
}
