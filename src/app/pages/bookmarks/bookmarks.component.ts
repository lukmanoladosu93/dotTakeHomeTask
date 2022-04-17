import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  // This enables the bookmarks component(Child) receive list of bookmarks from App component (Parent)

  @Input() bookmarkedArray: any;
  p: any = 1;

  // Toastr services initialized in the constructor to enable the use of toast notifications

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  // Function to remove a bookmark from list of bookmarks

  removeBookmark(id: any) {
    console.log(id);
    this.bookmarkedArray.splice(id, 1);
    this.toastr.success('Bookmark removed successfully');
    console.log(this.bookmarkedArray);
  }
}
