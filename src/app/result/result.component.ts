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
  public buttonState: boolean = false;
  p: number = 1;
  ngOnInit() {
    this.coreService.getData().subscribe(
      (data)=>{
        this.userData = data;
      });
  }

  public repoDetails(value) {
    this.coreService.fetchRepoData(value).subscribe(
      (data)=> {
        this.repoData = data;
        this.buttonState = true;
      });
  }

  public collapse() {
    this.buttonState = false;
    this.repoData = null;
  }
  
}