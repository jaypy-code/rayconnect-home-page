import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  // https://stackoverflow.com/a/9873379/15072588
  toTimeAgo(date: Date | number | string = Date.now()) {
    if (!date) return ' لحظاتی پیش';
    var seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    if (isNaN(seconds)) return ' لحظاتی پیش';

    var interval = seconds / 31536000;

    if (interval > 1) {
      return `${Math.floor(interval)}  سال پیش`
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)}  ماه پیش`
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return `${Math.floor(interval)}  روز پیش`
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)}  ساعت پیش`
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)}  دقیقه پیش`
    }
    return `${Math.floor(seconds)}  ثانیه پیش`
  }
}
