import { Component, OnInit, transition } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { NgForm } from '@angular/forms';
import { Contact } from '../shared/contact.model';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  loading: boolean;
  newContact: Contact;
  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    this.loading = true;
    const formValues = Object.assign({}, form.value);
    const contact: Contact = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      address: formValues.address,
      phone: `${formValues.areaCode} ${formValues.prefix}-${formValues.lineNumber}`,
      photoUrl: formValues.photoUrl
    };

    this.apiSvc.post('contacts', contact)
      .subscribe(data => {
        form.reset();
        this.loading = false;
        this.newContact = data;
      });
  }

}
