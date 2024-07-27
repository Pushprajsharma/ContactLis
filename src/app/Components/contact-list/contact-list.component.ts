import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts = [];

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  }
}
