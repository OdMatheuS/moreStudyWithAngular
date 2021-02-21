import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-template-driven",
	template: `
		<div class="centralize">
			<p>
				<span>foobar</span>
			</p>
		</div>
		<nav>
			<button routerLink="" routerLinkActive="active" mat-button type="button">Back to Home</button>
		</nav>
	`,
	styles: [
		`
			.centralize {
				display: flex;
				justify-content: center;
			}

			span {
				font-weight: bold;
				font-size: 1.2rem;
			}
		`,
	],
})
export class TemplateDrivenComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
