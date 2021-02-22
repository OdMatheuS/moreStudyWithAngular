import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-reactive-forms",
	template: `
		<div class="centralize">
			<p>reactive-forms works!</p>
			<nav>
				<button routerLink="" routerLinkActive="active" type="button" mat-raised-button color="primary">
					Back to Home
				</button>
			</nav>
			<div class="form-group">
				<label>
					Name:
					<input type="text" [formControl]="name" />
				</label>
				<div style="margin-top:1rem;">
					<span>
						<p>Value: {{ name.value }}</p>
					</span>
				</div>
				<div style="flex-direction:row;">
					<button mat-button style="width:180px" (click)="updateValueInput()">change value input</button>
					<button mat-button style="width:180px" (click)="deleteValueInput()">delete value input</button>
				</div>
			</div>
			<div class="ajust-divider">
				<h2>Grouping form controls</h2>
				<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
					<label>
						First Name:
						<input type="text" formControlName="firstName" required />
					</label>
					<label>
						Last Name:
						<input type="text" formControlName="lastName" />
					</label>
					<button type="button" (click)="updateProfile()">Example Generate inputs values</button>
					<br />
					<br />
					<br />
					<h2>Address</h2>
					<div formGroupName="address" style="display:flex;">
						<label>
							Street:
							<input type="text" formControlName="street" />
						</label>

						<label>
							City:
							<input type="text" formControlName="city" />
						</label>

						<label>
							State:
							<input type="text" formControlName="state" required />
						</label>

						<label>
							Zip Code:
							<input type="text" formControlName="zip" required />
						</label>
						<p>Form Status: {{ profileForm.status }}</p>
					</div>
					<button type="submit" [disabled]="!profileForm.valid">Submit</button>
				</form>
			</div>
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
				margin: 0.5rem;
			}
			input {
				margin: 0.5rem;
			}

			label {
				margin-right: 0.5rem;
				font-weight: bold;
				font-size: 1rem;
			}

			.ajust-divider {
				margin: 1rem;
				border: 1rem;
				padding: 1rem;
				border: 2px double;
			}
		`,
	],
})
export class ReactiveFormsComponent implements OnInit {
	public name = new FormControl("");
	profileForm = new FormGroup({
		firstName: new FormControl("", Validators.minLength(4)),
		lastName: new FormControl(""),
		address: new FormGroup({
			street: new FormControl(""),
			city: new FormControl(""),
			state: new FormControl(""),
			zip: new FormControl(""),
		}),
	});

	constructor() {}

	ngOnInit(): void {}

	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.log(this.profileForm.value);
	}
	updateProfile() {
		this.profileForm.patchValue({
			firstName: "Foo",
			lastName: "Bar",
			address: {
				street: "123 Bar Street",
				city: "Eloperdido",
				state: "Barfoo",
				zip: "9999999-X",
			},
		});
	}

	updateValueInput() {
		this.name.setValue("Nancy");
	}
	deleteValueInput() {
		this.name.setValue("");
	}
}
