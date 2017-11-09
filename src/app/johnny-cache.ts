import { HttpCache } from './http-cache';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JohnnyCache implements HttpCache{

    store:any = localStorage;

    get(req: HttpRequest<any>): HttpResponse<any[]> {

        if(this.store[req.urlWithParams]){
            let body = JSON.parse(this.store.getItem(req.urlWithParams));
            return new HttpResponse<any[]>({body:body});
        }else{
            return;
        }
              
    }
    put(req: HttpRequest<any>, resp: HttpResponse<any>): void {
        this.store.setItem(req.urlWithParams, JSON.stringify(resp.body));
    }
}