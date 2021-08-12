import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stock }  from '../stock/stock.model';
import { HttpClient } from "@angular/common/http";
import { BookmarksService } from "../bookmarks.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stock: Stock|undefined;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private bookmarksService: BookmarksService) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const symbolFromRoute = String(routeParams.get('symbol'));

    const baseUrl = '/api/stock/' + symbolFromRoute;
    const url = `${baseUrl}/`;
    //this.stock = JSON.parse(this.http.get(url));
    this.stock = new Stock(symbolFromRoute, "", 0, 0.0, "");
    this.http.get(url)
      .subscribe((data) => {
        Object.assign(this.stock, data);
        //this.stock = data;
      });
  }

  addToBookmarks(stock: Stock) {
    this.bookmarksService.addToBookmarks(stock);
    window.alert('The stock has been added to the bookmarks!');
  }

}
