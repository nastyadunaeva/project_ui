import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';
import { PersonListComponent } from './person-list/person-list.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailsComponent } from './stock-details/stock-details.component'

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {BookmarksService} from "./bookmarks.service";
import {BookmarksComponent} from "./bookmarks/bookmarks.component";
//import {MatIconModule} from  '@angular/material/icon';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PersonListComponent,
    StockListComponent,
    StockDetailsComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    //MatButtonModule,
    //MatIconModule,
    RouterModule.forRoot([
      { path: 'users', component: PersonListComponent },
      { path: '', component: StockListComponent },
      { path: 'stocks/:symbol', component: StockDetailsComponent },
      { path: 'bookmarks', component: BookmarksComponent},
    ])
  ],
  providers: [BookmarksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
