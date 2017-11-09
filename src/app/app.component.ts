import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ListServiceService } from './list-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : Subject<any[]> = new Subject<any[]>();

  ngOnInit(){

    setTimeout( ()=> {
      this.items.next([
        {firstName: "Philip", lastName: "Plant"},
        {firstName: "Sinan", lastName: "Nar"}
      ]);
    }, 1000);

  }

}
