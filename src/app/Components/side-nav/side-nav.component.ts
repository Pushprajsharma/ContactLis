import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor(private router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  navigateTo(url : string)
  {
    this.router.navigate([url]);
  }

}
