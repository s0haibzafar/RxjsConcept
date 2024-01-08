import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NpromoiseComponent } from './npromoise/npromoise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NpromoiseComponent
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
