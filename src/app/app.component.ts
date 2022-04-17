import { Component } from '@angular/core';
import { NewsServiceService } from './services/news-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dotTakeHome';
  apiResponse: any;
  newsArray: any;
  routeValue: any = '';
  bookmarkArray: any = [];
  displayMessage = 'Loading';

  constructor(
    private auth: NewsServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.GetAllNews();
  }

  GetAllNews() {
    this.auth.getAllNews().subscribe((res) => {
      this.apiResponse = res;
      if (this.apiResponse.status != 'ok') {
        this.toastr.info("Couldn't load data, kindly refresh page");
      } else {
        this.newsArray = this.apiResponse.articles;
        console.log(this.newsArray);
      }
    });
  }

  selectRoute(newRouteValue: any) {
    this.routeValue = newRouteValue;
  }
  onAddBookmark(data: any) {
    if (this.bookmarkArray.includes(data)) {
      this.toastr.info('Bookmark already exist');
      return;
    } else {
      this.bookmarkArray.push(data);
      console.log(this.bookmarkArray);
      this.toastr.success('Bookmark Added');
    }
  }
}
