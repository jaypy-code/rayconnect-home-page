import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-bg',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() rows: number = 0;
  @Input() cols: number = 0;
  @Input() color: string = '';
  @Input() size: string = '10px';
  @Input() margin: string = '10px';

  get row(): any[] {
    return Array(this.rows).fill(0);
  }

  get col(): any[] {
    return Array(this.cols).fill(0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
