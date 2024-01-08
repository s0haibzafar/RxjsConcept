import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpromoiseComponent } from './npromoise/npromoise.component';


const routes: Routes = [
  {
    path :'promoise',
    component:NpromoiseComponent
  },
  {
    path :'**',
    redirectTo: 'promoise'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
