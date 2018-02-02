import { Component, OnInit } from '@angular/core';
import {Menu} from '../../bean/menu';
import {MenuData} from '../../data/menu-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuData: Menu[];
  constructor() {
    this.menuData = MenuData;
  }

  ngOnInit() {
  }

}
