import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LoginComponent } from './login.component';
//import { NewLoginComponent } from './newlogin.component';

import { EmpVisionComponent } from './emp.vision.component';
import { ManVisionComponent } from './man.vision.component';
import { PageNotFoundComponent } from './error.component';
import {
    MdButtonModule, MdCardModule, MdInputModule
}from '@angular/material';

import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
 //   NewLoginComponent,
      EmpVisionComponent,
      ManVisionComponent,
      PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
