import { Component, OnInit } from '@angular/core';
import { IFile, files } from '../../database/code';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  public index: number = 0;
  public show: boolean = false;
  public files: IFile[] = files;
  constructor() { }

  ngOnInit(): void {
  }

  public setIndex(value: number): void {
    this.index = value;
    this.show = false;
  }
}
