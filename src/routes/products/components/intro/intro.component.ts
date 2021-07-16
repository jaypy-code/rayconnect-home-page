import { Component, OnInit } from '@angular/core';
import { toptitle, title } from '../../database/intro';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public toptitle: string = toptitle;
  public title: string = title;

  constructor() { }

  ngOnInit(): void {
  }

}
