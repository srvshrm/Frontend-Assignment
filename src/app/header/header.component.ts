import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

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
  userData = []
  
  search(event:any){
    this.query = event.target.value
    if(this.query){
      this.coreService.fetchData(this.query).pipe(debounceTime(2000)).subscribe(
        (data)=>{
          this.coreService.setData(data)
        });
    }
  }

}
