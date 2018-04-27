import {Component, OnInit} from '@angular/core';
import {LayoutService} from './shared-module/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isSidebarVisible: boolean = false;
  constructor(private layoutService: LayoutService){}

  ngOnInit() {
    this.layoutService.sidebarSource$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }
}
