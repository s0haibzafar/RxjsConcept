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
import { OfFromComponent } from './nobservable/of-from/of-from.component';
import { ToarrayComponent } from './nobservable/toarray/toarray.component';
import { CustomeComponent } from './nobservable/custome/custome.component';
import { MapComponent } from './nobservable/map/map.component';
import { PluckComponent } from './nobservable/pluck/pluck.component';
import { FilterComponent } from './nobservable/filter/filter.component';
import { TapComponent } from './nobservable/tap/tap.component';
import { TakeComponent } from './nobservable/take/take.component';
import { RetryComponent } from './nobservable/retry/retry.component';
import { HttpClientModule } from "@angular/common/http"; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NpromoiseComponent,
    NobservableComponent,
    ListComponent,
    FromEventComponent,
    ItemCardComponent,
    IntervalComponent,
    OfFromComponent,
    ToarrayComponent,
    CustomeComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
