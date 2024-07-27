import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,
    children:[
      {path:"",component:ContactListComponent},
      {path:"add-contact",component:AddContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
