import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@demo/app/app-routing.module';
import { AppComponent } from '@demo/app/app.component';
import { PagesModule } from '@demo/app/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
