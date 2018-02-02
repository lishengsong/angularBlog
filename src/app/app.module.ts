import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ElModule } from 'element-angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';

import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ElModule.forRoot(
    ),
    RouterModule.forRoot([
      { path: '', redirectTo: '/dash', pathMatch: 'full' },
      {
        path: 'dash',
        component: MenuComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
