import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './component/pages/welcome/welcome.component';
import {UserComponent} from './component/pages/user/user.component';
import {TagComponent} from './component/pages/tag/tag.component';



const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash',  component: WelcomeComponent },
  { path: 'user',  component: UserComponent },
  { path: 'tag',  component: TagComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
