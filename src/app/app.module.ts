import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';
//import { ReactiveFormsModule } from '@angular/forms';

import { TopBarComponent } from './top-bar/top-bar.component';
import { PersonListComponent } from './person-list/person-list.component';
import { StockListComponent } from './stock-list/stock-list.component';
//import { ProductListComponent } from './product-list/product-list.component';
//import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PersonListComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{ path: '', component: PersonListComponent },
      { path: '', component: StockListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
