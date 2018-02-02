import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './component/pages/welcome/welcome.component';
import {UserComponent} from './component/pages/user/user.component';



const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash',  component: WelcomeComponent },
  { path: 'user',  component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
