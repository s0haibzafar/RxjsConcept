import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpromoiseComponent } from './npromoise/npromoise.component';
import { NobservableComponent } from './nobservable/nobservable.component';
import { ListComponent } from './nobservable/list/list.component';
import { FromEventComponent } from './nobservable/from-event/from-event.component';
import { IntervalComponent } from './nobservable/interval/interval.component';
import { OfFromComponent } from './nobservable/of-from/of-from.component';
import { ToarrayComponent } from './nobservable/toarray/toarray.component';


const routes: Routes = [
  {
    path: 'promoise',
    component: NpromoiseComponent
  },
  {
    path: 'observable',
    component: NobservableComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'from-event',
        component: FromEventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'ofFrom',
        component: OfFromComponent,
      },
      {
        path: 'toArray',
        component: ToarrayComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'promoise'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
