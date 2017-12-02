import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
    this.apiSvc.get('/contacts')
      .subscribe(data => this.contacts = data);
  }

}
