import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { files, IFile } from '../../../../database/code';

@Component({
  selector: 'app-code-dropdown',
  templateUrl: './code-dropdown.component.html',
  styleUrls: ['./code-dropdown.component.scss']
})
export class CodeDropdownComponent implements OnInit {

  @Input() show: boolean = true;
  @Input() index: number = 0;
  @Output() changeIndex: EventEmitter<number> = new EventEmitter<number>();

  get lang(): string {
    return files[this.index].lang;
  }

  get langs(): string[] {
    let langs = files.map(item => item.lang);
    return langs.filter((item, position) => langs.indexOf(item) === position);
  }

  get files(): { name: string, index: number }[] {
    return files.filter(item => item.lang === this.lang).map(item => { return { name: item.name, index: files.indexOf(item) } });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
