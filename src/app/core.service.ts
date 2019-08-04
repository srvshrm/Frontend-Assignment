import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  private url = "https://api.github.com/search/users?q=";
  private repoUrl = "https://api.github.com/users/"; 
  private data$: Subject<any> = new Subject<any>();

  fetchData(query:string):Observable<any>{
    return this.http.get(this.url+query)
  }

  fetchRepoData(username: string) {
    return this.http.get(this.repoUrl+username+'/repos')
  }

  setData(data) {
    let result = [];
    result.push(data)
    this.data$.next(result);
  }

  getData(){
    return this.data$.asObservable();
  }
}