import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-tab',
  templateUrl: './code-tab.component.html',
  styleUrls: ['./code-tab.component.scss']
})
export class CodeTabComponent implements OnInit {

  @Input() lang: string = '';
  @Input() name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
