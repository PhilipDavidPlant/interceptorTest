import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/from';

@Injectable()
export class ListServiceService {

  constructor(private http : HttpClient ) { }

  getList() : Observable<any>{

    return this.http.get('https://jsonplaceholder.typicode.com/posts');

  }


}
