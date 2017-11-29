import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Contact } from '../shared/contact.model';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:3003/api/contacts')
    .map((res: Response) => res.json())
    .subscribe(data => this.contacts = data);
  }

}
