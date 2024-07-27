import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Contact } from 'src/app/Model/contact';
import { GeolocationService } from 'src/app/SharedService/geolocation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit  {
  
  latitude: number;
  longitude: number;
  constructor(private fb :FormBuilder,private geolocationService: GeolocationService,
    private router : Router
  ) {
    
    
  }
  contactForm : FormGroup;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, this.phoneNumberValidator()]],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([this.createAddressGroup()]),
      longitude: [{ value: '', disabled: true }, Validators.required],
      latitude: [{ value: '', disabled: true }, Validators.required]
    });

    this.getCurrentLocation();
  }

  private async getCurrentLocation() {
    try {
      const position = await this.geolocationService.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(this.latitude,this.longitude)

      this.contactForm.patchValue({
        latitude:this.latitude,
        longitude : this.longitude
      }
      )
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  createAddressGroup() {
    return this.fb.group({
      address: ['', Validators.required]
    });
  }

  


    phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = /^\d{10}$/.test(control.value);
      return valid ? null : { 'phoneNumber': { value: control.value } 
    };
    }
  }

  addAddress() {
    if (this.addresses.length < 5) {
      this.addresses.push(this.createAddressGroup());
    }
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  get addresses() {
    return this.contactForm.get('addresses') as FormArray;
  }

  submitForm() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.getRawValue();
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts.push(formValue);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.router.navigate(['/']);
    }
  }
  
}
