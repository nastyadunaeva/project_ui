import { Component, OnInit } from '@angular/core';
import { Stock } from "../stock/stock.model";
import { StockService } from "../stock/stock.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  stocks: Stock[];

  constructor(private stockService: StockService) {
    this.stocks = [];
  }

  ngOnInit() {
    this.stockService.list().subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
    });
  }

  share() {
    window.alert('The product has been shared!');
  }
}
