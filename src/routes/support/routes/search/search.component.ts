import { Component, OnInit } from '@angular/core';
import { IItem, items } from '../../database/item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public items: IItem[] = items;
  constructor() { }

  ngOnInit(): void {
  }

}
