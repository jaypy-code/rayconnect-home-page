import { Component, OnInit } from '@angular/core';
import { IItem, items } from '../../database/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: IItem[] = items.concat(items).concat(items).concat(items).concat(items);

  constructor() { }

  ngOnInit(): void {
  }

}
