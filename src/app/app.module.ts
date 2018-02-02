import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ElModule } from 'element-angular';
import { MenuComponent } from './component/menu/menu.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { WelcomeComponent } from './component/pages/welcome/welcome.component';
import { WebsiteComponent } from './component/pages/website/website.component';
import { EditPwdComponent } from './component/pages/edit-pwd/edit-pwd.component';
import { AddLinkComponent } from './component/pages/add-link/add-link.component';
import { LinkComponent } from './component/pages/link/link.component';
import { UserComponent } from './component/pages/user/user.component';
import { AddArticleComponent } from './component/pages/add-article/add-article.component';
import { ArticleComponent } from './component/pages/article/article.component';
import { AddTagComponent } from './component/pages/add-tag/add-tag.component';
import { TagComponent } from './component/pages/tag/tag.component';
import { AddCartComponent } from './component/pages/add-cart/add-cart.component';
import { CartComponent } from './component/pages/cart/cart.component';
import { CommentComponent } from './component/pages/comment/comment.component';
import { AddChatComponent } from './component/pages/add-chat/add-chat.component';
import { ChatComponent } from './component/pages/chat/chat.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    WelcomeComponent,
    WebsiteComponent,
    EditPwdComponent,
    AddLinkComponent,
    LinkComponent,
    UserComponent,
    AddArticleComponent,
    ArticleComponent,
    AddTagComponent,
    TagComponent,
    AddCartComponent,
    CartComponent,
    CommentComponent,
    AddChatComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ElModule.forRoot(
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
