import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) {
  }

  getDate(): Observable<Date> {
    return this.http.get<any>('http://worldtimeapi.org/api/timezone/America/New_York')
      .pipe(map(ret => new Date(ret.datetime)));
  }
}
