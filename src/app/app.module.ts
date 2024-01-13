import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NpromoiseComponent } from './npromoise/npromoise.component';
import { NobservableComponent } from './nobservable/nobservable.component';
import { ListComponent } from './nobservable/list/list.component';
import { FromEventComponent } from './nobservable/from-event/from-event.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { IntervalComponent } from './nobservable/interval/interval.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NpromoiseComponent,
    NobservableComponent,
    ListComponent,
    FromEventComponent,
    ItemCardComponent,
    IntervalComponent
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
