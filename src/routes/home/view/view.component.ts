import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { boxs, IBox } from '../database/box';
import { faqs, IFaq } from '../database/faq';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {

  public faqs: IFaq[] = faqs;
  public boxs: IBox[] = boxs;

  constructor() { }

  ngOnInit(): void {
  }

}
