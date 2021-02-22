import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsComponent } from "./form/form/components/reactive-forms/reactive-forms.component";
import { TemplateDrivenComponent } from "./form/form/components/template-driven/template-driven.component";
import { FormComponent } from "./form/form/form.component";

const routes: Routes = [
  { path: "", component: FormComponent },
  { path: "templateDriven", component: TemplateDrivenComponent },
  { path: "reactiveForms", component: ReactiveFormsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
