import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() name: string = '';
  @Input() logo: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() langs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
