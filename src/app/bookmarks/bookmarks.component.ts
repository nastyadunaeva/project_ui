import { Component, OnInit } from '@angular/core';
import { BookmarksService } from "../bookmarks.service";
import {Stock} from "../stock/stock.model";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  //items = this.bookmarksService.getItems();
  items: Stock[];

  ngOnInit() {
    this.bookmarksService.list().subscribe((items: Stock[]) => {
      this.items = items;
    });
  }

  constructor(
    private bookmarksService: BookmarksService
  ) {
    this.items = [];
  }

  deleteFromBookmarks(stock: Stock) {
    this.bookmarksService.deleteFromBookmarks(stock);
    window.alert('The stock has been deleted from the bookmarks!');
    location.reload();
  }

}
