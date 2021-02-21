import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormComponent } from './form/form/form.component';
import { TemplateDrivenComponent } from './form/form/components/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './form/form/components/reactive-forms/reactive-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
