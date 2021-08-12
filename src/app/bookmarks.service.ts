import { Injectable } from '@angular/core';
import { Stock } from './stock/stock.model';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  items: Stock[] = [];
  private baseUrl = "/api/stock/favorites";

  constructor(private http: HttpClient) {}

  addToBookmarks(stock: Stock) {
    const url = `${this.baseUrl}/` + "add/" + stock.symbol;
    const body = {};

    this.http.post(url, body).subscribe();

  }

  deleteFromBookmarks(stock: Stock) {
    const url = `${this.baseUrl}/` + "delete/" + stock.symbol;

    this.http.delete(url).subscribe();
  }

  getItems() {
    return this.items;
  }

  list(): Observable<Stock[]> {
    const url = `${this.baseUrl}/`;
    return this.http
      .get(url)
      .pipe(
        map((data: any) =>
          data.map(
            (item: any) =>
              new Stock(item.symbol, item.longName, item.regularMarketPrice, item.change, item.description)
          )
        )
      );
  }

  /*clearBookmarks() {
    this.items = [];
    return this.items;
  }*/
}
