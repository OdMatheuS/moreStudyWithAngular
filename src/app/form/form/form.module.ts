import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [TemplateDrivenComponent, ReactiveFormsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class FormModule { }
