import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  public userData:any;
  public repoData: any;
  public buttonState:any[] = [];
  p: number = 1;
  ngOnInit() {
    this.coreService.getData().subscribe(
      (data)=>{
        this.userData = data;
      });
  }

  public repoDetails(value, index) {
    this.coreService.fetchRepoData(value).subscribe(
      (data)=> {
        this.repoData = data;
        this.buttonState[index] = true;
      });
  }

  public collapse(index) {
    this.buttonState[index] = false;
    this.repoData = null;
  }
  
}