import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { PublicModule } from './public/public.module';
import { PriveModule } from './prive/prive.module';
import { OkComponent } from './ok/ok.component';


@NgModule({
  declarations: [
    AppComponent,
    OkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PriveModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
