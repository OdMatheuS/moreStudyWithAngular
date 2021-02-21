import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <h1>Angular Router App</h1>
<!-- This nav gives you links to click, which tells the router which route to use (defined in the routes constant in  AppRoutingModule) -->
<nav>
  <ul>
    <li><a routerLink="/templateDriven" routerLinkActive="active">First Component</a></li>
    <li><a routerLink="/reactiveForms" routerLinkActive="active">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
