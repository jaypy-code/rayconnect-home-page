import { Component, OnInit } from '@angular/core';
//
import { title } from '../../database/intro';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public title: string = title;
  constructor() { }

  ngOnInit(): void {
  }

}
