import { HttpCache } from './http-cache';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JohnnyCache implements HttpCache{
    get(req: HttpRequest<any>): HttpResponse<any[]> {
        const response = new HttpResponse<any[]>({
            body: [
                {firstName: "Philip", lastName: "Plant"},
                {firstName: "Sinan", lastName: "Nar"},
                {firstName: "Arad", lastName: "Haghi"}
            ]
        });
        return response;
        //return Observable.of(response);
    }
    put(req: HttpRequest<any>, resp: HttpResponse<any>): void {
        throw new Error("Method not implemented.");
    }
}