import { Component, OnInit } from '@angular/core';
//
import { code } from '../database/code';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public path: string = '/root';
  public code: string = code;

  constructor() { }

  ngOnInit(): void {
  }

}
