import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-reactive-forms",
	template: `
		<p>reactive-forms works!</p>
		<nav>
			<button routerLink="" routerLinkActive="active" mat-button type="button">Back to Home</button>
		</nav>
	`,
	styles: [],
})
export class ReactiveFormsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
