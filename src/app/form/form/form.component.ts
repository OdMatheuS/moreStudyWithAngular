import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-form",
	template: `
		<h1>Angular Router App</h1>

		<nav>
			<ul>
				<li><a routerLink="/templateDriven" routerLinkActive="active">Template Driven Form</a></li>
				<li><a routerLink="/reactiveForms" routerLinkActive="active">Reactive Form</a></li>
			</ul>
		</nav>

		<router-outlet></router-outlet>
	`,
	styles: [],
})
export class FormComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
