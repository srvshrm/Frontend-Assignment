import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  public url = "https://api.github.com/search/users?q=";
  private data$: Subject<any> = new Subject<any>();
  private result = [];

  fetchData(query:string):Observable<any>{
    return this.http.get(this.url+query)
  }

  setData(data) {
    this.result.push(data)
    this.data$.next(this.result);
  }

  getData(){
    return this.data$.asObservable();
  }
}