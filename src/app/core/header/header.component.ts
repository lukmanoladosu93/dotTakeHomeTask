import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Event emitter fron the header component (Child) to the app component (Parent) which determines the page to be displayed;
  @Output() selectedRoute = new EventEmitter<string>();
  classChanger: any;

  constructor() {}

  ngOnInit(): void {}

  // Function that toggles between news component and bookmarks component by emiting different data for each to the app component
  selectRoute(data: string) {
    this.classChanger = data;
    this.selectedRoute.emit(data);
  }
}
