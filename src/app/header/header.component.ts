import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private coreService: CoreService) { }

  ngOnInit() {
  }
  
  private query = '';
  search(event:any){
    this.query = event.target.value
    this.coreService.fetchData(this.query).subscribe(
      (data)=>{
        this.coreService.setData(data)
      }
    )
  }
}
