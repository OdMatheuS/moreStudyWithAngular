import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [TemplateDrivenComponent, ReactiveFormsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    //MatFormFieldModule,
    FormsModule,
    //MatInputModule
  ]
})
export class FormModule { }
