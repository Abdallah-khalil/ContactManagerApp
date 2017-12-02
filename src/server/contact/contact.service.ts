import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Contact, AddContactDTO } from './contact.schema';
import { inject } from '@angular/core/testing';
import { SecretKeysComponent } from '../common/secretKeys.service';


@Component()
export class ContactServiceComponent {

    constructor( @Inject(new SecretKeysComponent().getProvToken().contact) private readonly contactModel: Model<Contact>) {

    }

    async FindAll(): Promise<Contact[]> {
        return await this.contactModel.find().exec();
    }

    async addContact(contactModel: AddContactDTO): Promise<Contact> {
        const NewContact = new this.contactModel(contactModel);
        return await NewContact.save();
    }
}
