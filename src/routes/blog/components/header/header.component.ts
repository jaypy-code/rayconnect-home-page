import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import * as moment from 'moment-jalaali';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public path: string = window.location.pathname;

  private moment: moment.Moment = moment();

  get date(): string {
    return `${this.moment.jYear()}/${this.moment.jMonth() + 1}/${this.moment.jDate()}`;
  }

  get day(): string {
    return ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'آدینه', 'شنبه'][this.moment.day()];
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.path = window.location.pathname;
    });
  }

}
