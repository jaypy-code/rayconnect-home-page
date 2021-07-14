import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() code: string = "";

  get lines(): string[] {
    let length = this.code.split('\n').length;

    return Array.from({ length }, (_, i) => (i + 1).toString())
  }

  constructor() { }

  ngOnInit(): void {
  }

}
