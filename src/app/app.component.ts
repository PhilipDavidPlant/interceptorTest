import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ListServiceService } from './list-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListServiceService]
})
export class AppComponent {
  items : Observable<any[]>;

  constructor(private service: ListServiceService){}

  ngOnInit(){

    this.items = this.service.getList();
    

  }

}
