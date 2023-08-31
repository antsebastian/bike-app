import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval, map, Observable, startWith, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) {
  }

  getDate(): Observable<Date> {
    const getter$ = this.http.get<any>('http://worldtimeapi.org/api/timezone/America/New_York')
      .pipe(map(ret => new Date(ret.datetime)));

    //update every minute
    return interval(60000).pipe(startWith(0), switchMap(i => getter$));
  }
}
