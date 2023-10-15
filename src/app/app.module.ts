import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { SearchInputComponent } from './components/ui/search-input/search-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PostsFeedPageComponent } from './pages/posts-feed-page/posts-feed-page.component';
import { SelectComponent } from './components/ui/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AboutPageComponent,
    PostPageComponent,
    PostListComponent,
    PostCardComponent,
    SearchInputComponent,
    SearchPageComponent,
    PostsFeedPageComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
