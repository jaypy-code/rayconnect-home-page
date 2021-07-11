import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() view: 'last' | 'latest' | 'simple' = 'simple';
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() summery: string = '';
  @Input() at: string | number = Date.now();
  @Input() tags: string[] = [];
  @Input() writer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
