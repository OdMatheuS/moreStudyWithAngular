import { Component, OnInit } from "@angular/core";

import { Form } from "../../../../interface/form";

@Component({
	selector: "app-template-driven",
	template: `
		<div class="centralize">
			<!-- <p>
				<span>foobar</span>
			</p> -->
			<nav>
				<button routerLink="" routerLinkActive="active" mat-button type="button">Back to Home</button>
			</nav>
			<form #heroForm="ngForm" class="form-group">
				<label for="power">Hero Power:</label>
				<select class="form-control" id="power" required>
					<option *ngFor="let pow of powers" [value]="pow">{{ pow }}</option>
				</select>
				<button (click)="foobar()" mat-button>teste</button>
				<input style="margin-bottom:1rem;" type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name" />
				<p>result of input with ngModel two-way-binding = "[()]"</p>
				<span>
					{{ model.name }}
				</span>
			</form>
		</div>
	`,
	styles: [
		`
			.centralize {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.form-group {
				display: flex;
				flex-direction: column;
			}

			span {
				font-weight: bold;
				font-size: 1.2rem;
			}

			button,
			select {
				margin: 1rem;
			}

			label {
				margin-right: 0.5rem;
				font-weight: bold;
				font-size: 1rem;
			}
		`,
	],
})
export class TemplateDrivenComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

	model = new Form(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	// TODO: Remove this when we're done
	get diagnostic() {
		return JSON.stringify(this.model);
	}

	foobar() {
		const myHero = new Form(42, "SkyDog", "Fetch any object at any distance", "Leslie Rollover");
		console.log("My hero " + myHero.power); // "My hero is called SkyDog"
	}
}
