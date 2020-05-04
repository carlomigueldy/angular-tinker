import { Component } from '@angular/core';
import { Link } from './models/Link'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-tinker';
  name: string = 'Carlo Miguel Dy'
  count: number = 0
  opened: boolean = true
  links: Link[] 

  constructor () {
    this.links = [
      {
        title: 'Dashboard',
        subtitle: 'The app dashboard',
        route: 'dashboard',
        icon: 'mdi-dashboard-view',
      },
      {
        title: 'Users',
        subtitle: 'The app users',
        route: 'users',
        icon: 'mdi-account-multiple',
      },
      {
        title: 'Settings',
        subtitle: 'The app settings',
        route: 'settings',
        icon: 'mdi-cog',
      },
      {
        title: 'Logout',
        subtitle: 'Logout from the app',
        route: 'logout',
        icon: 'mdi-cog',
      },
    ]
  }
  
  increment(): void {
    this.count++
  }

  toggle(): void {
    this.opened = !this.opened
  }
}
