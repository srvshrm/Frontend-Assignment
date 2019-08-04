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
  ngOnInit() {
    this.coreService.getData().subscribe(
      (data)=>{
        console.log(data);
        this.userData = data
      }
    )
  }

}
