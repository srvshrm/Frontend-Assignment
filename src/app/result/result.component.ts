import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  public userData:any;
  public repoData: any;
  ngOnInit() {
    this.coreService.getData().subscribe(
      (data)=>{
        console.log(data);
        this.userData = data;
      });
  }

  public repoDetails(value) {
    this.coreService.fetchRepoData(value).subscribe(
      (data)=> {
        this.repoData = data;
        console.log(data);
      }
    )
  }

}
