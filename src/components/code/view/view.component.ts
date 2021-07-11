import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IFile, files } from '../database/code';

@Component({
  selector: 'app-code',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {

  public index: number = 0;
  public show: boolean = false;
  public files: IFile[] = files;

  @Input() details: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public setIndex(value: number): void {
    this.index = value;
    this.show = false;
  }
}
