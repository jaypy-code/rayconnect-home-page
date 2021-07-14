import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fs',
  templateUrl: './fs.component.html',
  styleUrls: ['./fs.component.scss']
})
export class FsComponent implements OnInit {

  private defaultPath: string = '';
  private historyPath: string = '';

  public folder: string | null = null;

  @Input() path: string = '';

  @Output() pathChange: EventEmitter<string> = new EventEmitter<string>();


  get backable(): boolean {
    return this.path != this.defaultPath;
  }

  get forwardable(): boolean {
    return this.historyPath.length == 0 ? false : this.path == this.defaultPath
  }

  constructor() { }

  ngOnInit(): void {
    this.defaultPath = this.path;
  }

  public selectFolder(folder: string): void {
    this.folder = folder;
    let path = `${this.path}/${folder}`;
    this.historyPath = path;
    this.pathChange.emit(path);
  }

  public back(): void {
    this.folder = null;
    this.pathChange.emit(this.defaultPath);
  }

  public forward(): void {
    this.folder = this.historyPath.split('/')[2];
    this.pathChange.emit(this.historyPath);
  }
}
