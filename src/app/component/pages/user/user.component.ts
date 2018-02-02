import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  tableData: any[] = [{
    name: '火锅',
    date: 2017,
    address: '<span style="color: red;">上海市普陀区金沙江路 1518 弄</span>',
  }, {
    name: '重庆小面',
    date: '2017-08-20',
    address: '<span style="color: red;">上海市普陀区金沙江路 1518 弄</span>',
  }, {
    name: '海蛎煎',
    date: '2017-08-21',
    address: '<span style="color: red;">上海市普陀区金沙江路 1518 弄</span>',
  }, {
    name: '榴莲酥',
    date: '2017-08-22',
    address: '<span style="color: red;">上海市普陀区金沙江路 1518 弄</span>',
  }]
  constructor() { }

  ngOnInit() {
  }
  handle(ref: any): void {
    // console.log(ref.index)
    // console.log(ref.rowData)
    // console.log(ref.innerHTML)
    ref.destroy();
  }
}
