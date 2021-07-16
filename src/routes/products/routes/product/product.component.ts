import { Component, OnInit } from '@angular/core';
import { IItem, items } from '../../database/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public item: IItem = items[0];
  constructor() { }

  ngOnInit(): void {
  }

}
