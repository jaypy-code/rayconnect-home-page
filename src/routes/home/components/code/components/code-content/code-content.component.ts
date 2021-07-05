import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-content',
  templateUrl: './code-content.component.html',
  styleUrls: ['./code-content.component.scss']
})
export class CodeContentComponent implements OnInit {

  @Input() code: string = "";

  get lines(): string[] {
    let length = this.code.split('\n').length;

    return Array.from({ length }, (_, i) => (i + 1).toString())
  }

  constructor() { }

  ngOnInit(): void {
  }

}
