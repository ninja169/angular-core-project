import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Core Project';

  links = [
    {path:'/', icon:'home', title:'Home'},
    {path:'/customers', icon:'person', title:'Customers'},
    {path:'/projects', icon:'list', title:'Projects'}
  ]
}
