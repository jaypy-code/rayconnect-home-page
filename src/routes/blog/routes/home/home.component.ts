import { Component, OnInit } from '@angular/core';
//
import { DateService } from '../../../../services/date/date.service';
//
import { IPost } from '../../interfaces/post';
import { IVideo } from '../../interfaces/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public post: IPost = {
    id: '1',
    image: 'https://picsum.photos/536/354',
    title: 'عنوان نوشته',
    summery: 'خلاصه از مقاله یا اخباری که نوشته شده است و شما در حال خواندن آن هستید و این خیلی باحال هستش که دارید حتی این متن رو هم کامل می خونید',
    at: Date.now(),
    tags: ['برنامه نویسی', 'آموزش'],
    writer: 'مکاتبر بزرگ'
  }

  public video: IVideo = {
    url: '',
    image: 'https://picsum.photos/536/354',
    title: 'ویدئو عروسی رایکانکت با مایکاکنت',
    content: 'شاباش شاباش بیا این ور یه قرش بده با قر فرمونی بچرخونش اینجا شده شاباش شاباش ما داریم میدیم همش قر و مر',
    tags: ['عروسی', 'شاباش', 'شادی']
  };

  constructor(private date: DateService) { }

  ngOnInit(): void {
  }

  public from(at: string | number): string {
    return this.date.toTimeAgo(at);
  }
}
