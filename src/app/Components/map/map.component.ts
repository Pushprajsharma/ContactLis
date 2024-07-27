// map.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;

  // Define an array of locations
  private locations = [
    { lat: 40.730610, lng: -73.935242, name: 'New York' }
  ];

  ngOnInit(): void { 
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.forEach(item=>{
      this.locations.push({
        lat: item.latitude, lng: -73.935242, name: item.addresses[0].address
      })
    })
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Initialize the map
    this.map = L.map('map').setView([40.730610, -73.935242], 5); // Center map on New York

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Add markers for each location
    this.locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng]).addTo(this.map);
      marker.bindPopup(`<b>${location.name}</b><br>Latitude: ${location.lat}<br>Longitude: ${location.lng}`).openPopup();
    });
  }
}
