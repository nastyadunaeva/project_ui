import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Stock } from "./stock.model";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class StockService {
  private baseUrl = "/api/stock/all";

  constructor(private http: HttpClient) {}

  list(): Observable<Stock[]> {
    const url = `${this.baseUrl}/`;
    return this.http
      .get(url)
      .pipe(
        map((data: any) =>
          data.map(
            (item: any) =>
              new Stock(item.symbol, item.longName, item.regularMarketPrice)
          )
        )
      );
  }
}

