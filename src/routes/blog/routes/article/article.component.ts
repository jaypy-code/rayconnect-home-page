import { Component, OnInit } from '@angular/core';
//
import { DateService } from '../../../../services/date/date.service';
//
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public post: IPost = {
    id: '1',
    image: 'https://picsum.photos/536/354',
    title: 'عنوان نوشته',
    summery: 'خلاصه از مقاله یا اخباری که نوشته شده است و شما در حال خواندن آن هستید و این خیلی باحال هستش که دارید حتی این متن رو هم کامل می خونید',
    at: Date.now(),
    tags: ['برنامه نویسی', 'آموزش'],
    writer: 'مکاتبر بزرگ',
    content: ` این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
    این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
    این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
   `
  }
  constructor(private date: DateService) { }

  ngOnInit(): void {
  }

  public from(at: string | number): string {
    return this.date.toTimeAgo(at);
  }

  public encode(data: string): string {
    return data.split(' ').join('-');
  }
}
