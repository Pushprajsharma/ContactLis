import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { MapComponent } from './Components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    SideNavComponent,
    DashboardComponent,
    ContactListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
