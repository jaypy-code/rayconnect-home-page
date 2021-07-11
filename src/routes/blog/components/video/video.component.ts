import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewInit {

  @Input() url: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() tags: string[] = [];

  @ViewChild('video') videoElem: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let video: HTMLVideoElement = <HTMLVideoElement>this.videoElem.nativeElement;
    let container = document.getElementById('video-container');
    video.onplay = () => {
      container?.classList.add('full');
      container?.scrollIntoView({ 'behavior': 'smooth' });
    }
    video.onpause = () => container?.classList.remove('full');
    video.onended = () => video.onpause;
  }

  public encode(data: string): string {
    return data.split(' ').join('-');
  }

}
