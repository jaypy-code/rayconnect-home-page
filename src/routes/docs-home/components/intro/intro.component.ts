import { Component, OnInit } from '@angular/core';
import { title, subtitle, langs } from '../../database/intro';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public title: string = title;
  public subtitle: string = subtitle;

  public langs: string[] = langs;
  constructor() { }

  ngOnInit(): void {
  }

}
