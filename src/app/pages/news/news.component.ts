import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() newssArray: any;
  @Output() bookmarkedNews = new EventEmitter<{}>();
  p: any = 1;

  constructor() {}

  ngOnInit(): void {}

  // Function that emits a bookmarked new feed to the app component (Parent)
  addBookMark(data: any) {
    this.bookmarkedNews.emit(data);
  }
}
