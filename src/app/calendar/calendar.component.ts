import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private selected: any;
  private month: any;
  private weeks: any[];

  private isSelecting = false;
  
  constructor() {
    this.selected = this.selected || moment().startOf('day');
    this.month = this.selected.clone();
  }

  ngOnInit(): void {
    let start = this._removeTime(this.month.clone().date(1));
    this._buildMonth(start, this.month);
  }
  public select(day: any): void {
    this.selected = day.date;
    this.isSelecting = false;
  };

  public next(): void {
    this.month.add(1, 'month');
    let next = this.month.clone();
    this._removeTime(next.date(1));
    this._buildMonth(next, this.month);
  };

  public previous(): void {
    this.month.subtract(1, 'month');
    let previous = this.month.clone();
    this._removeTime(previous.date(1));
    this._buildMonth(previous, this.month);
  };

  public open() {
    this.isSelecting = !this.isSelecting;
  }

  private _buildMonth(start: any, month: any): void {
    this.weeks = [];
    let done = false, date = start.clone(), monthIndex = date.month(), count = 0;
    while (!done) {
      this.weeks.push({ days: this._buildWeek(date.clone(), month) });
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
  }

  private _buildWeek(date: any, month: any):any {
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push({
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      });
      date = date.clone();
      date.add(1, "d");
    }
    return days;
  }

  private _removeTime(date: any):any {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

}
