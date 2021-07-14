import { Component, OnInit } from '@angular/core';
//
import { IInfo, items, subtitle, title } from '../../database/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public title: string = title;
  public subtitle: string = subtitle;
  public items: IInfo[] = items;

  constructor() { }

  ngOnInit(): void {
  }

}
