import { Component, OnInit } from '@angular/core';
import { ILink, links } from '../../database/header';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public links: ILink[] = links;

  constructor() { }

  ngOnInit(): void {
  }

}
