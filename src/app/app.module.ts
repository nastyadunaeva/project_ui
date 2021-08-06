import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';
//import { ReactiveFormsModule } from '@angular/forms';

import { TopBarComponent } from './top-bar/top-bar.component';
//import { ProductListComponent } from './product-list/product-list.component';
//import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }