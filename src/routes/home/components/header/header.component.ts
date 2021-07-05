import { Component, OnInit } from '@angular/core';
import { ILink, links } from '../../database/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: ILink[] = links;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    document.querySelector('div.menu')?.classList.toggle('hide');
    document.querySelector('header button')?.classList.toggle('close');
    document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'auto' : 'hidden';
  }

}
