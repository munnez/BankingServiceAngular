import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";


const APP_ROUTES : Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
