import { Component, OnInit } from "@angular/core";


@Component({
	selector: "app-reactive-forms",
	template: `
		<p>reactive-forms works!</p>
		<nav>
			<button routerLink="" routerLinkActive="active" type="button" mat-raised-button color="primary">Back to Home</button>
		</nav>
	`,
	styles: [],
})
export class ReactiveFormsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
