import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { HttpCache } from './http-cache';

@Injectable()
export class LocalCacheInterceptor implements HttpInterceptor {
 
  constructor(private localCache : HttpCache){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     

  	// Before doing anything, it's important to only cache GET requests.
    // Skip this interceptor if the request method isn't GET.
    if (req.method !== 'GET') {
      return next.handle(req);
    }
 
    console.log("intercept");


    // First, check the cache to see if this request exists.
      // A cached response exists. Serve it instead of forwarding
      // the request to the next handler.

    console.log(req);

    const response = new HttpResponse<any[]>({
        body: [
            {firstName: "Philip", lastName: "Plant"},
            {firstName: "Sinan", lastName: "Nar"},
            {firstName: "Arad", lastName: "Haghi"}
        ]
    });

    return Observable.of(response);

 


    // No cached response exists. Go to the network, and cache
    // the response when it arrives.
    // return next.handle(req).do(event => {
    //   // Remember, there may be other events besides just the response.
    //   if (event instanceof HttpResponse) {
    //       // Update the cache.
          
    //   }
    // });
  }
}