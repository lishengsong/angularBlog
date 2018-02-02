import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  webData: any;
  constructor() {
    this.webData = [{
      type: '文章总数',
      desc: '1',
    }, {
      type: '文章总数',
      desc: '1',
    }, {
      type: '文章总数',
      desc: '1',
    }, {
      type: '文章总数',
      desc: '1',
    }];
  }

  ngOnInit() {
  }

  rowClassNameFilter(row: any, index: number): string {
    if (index === 1) {
      return 'info-row';
    } else if (index === 3) {
      return 'positive-row';
    }
    return '';
  }
}
