import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalCacheInterceptor } from './local-cache.inerceptor';
import { HttpClientModule } from '@angular/common/http';
import { JohnnyCache } from './johnny-cache';
import { HttpCache } from './http-cache';

import { GetKeysPipe } from './object-keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GetKeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LocalCacheInterceptor,
    multi: true,
  },
  { provide: HttpCache, useClass: JohnnyCache }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
