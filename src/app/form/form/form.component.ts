import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-form",
	template: `
		<div class="centralize">
			<h1>Choose a Form</h1>
			<div class="centralize-btn">
				<button routerLink="/templateDriven" routerLinkActive="active" type="button" mat-raised-button color="primary">Template Driven Form</button>
				<br />
				<button routerLink="/reactiveForms" routerLinkActive="active" type="button" mat-raised-button color="primary">Reactive Form</button>
			</div>		
		</div>
		<router-outlet></router-outlet>
	`,
	styles: [
		`
		.centralize {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.centralize-btn{
			display:flex;
			flex-flow: column;
		}

		button{
			margin-top:0.5rem;
		}

		`,
	],
})
export class FormComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
