import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BlogTitleComponent } from './components/blog-title/blog-title.component';
import { BigPostComponent } from './components/big-post/big-post.component';
import { SmallPostComponent } from './components/small-post/small-post.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BlogTitleComponent,
    BigPostComponent,
    SmallPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
