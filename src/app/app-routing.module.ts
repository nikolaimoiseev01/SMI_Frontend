import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {PostsFeedPageComponent} from "./pages/posts-feed-page/posts-feed-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'post/:id', component: PostPageComponent},
  {path: 'posts-feed', component: PostsFeedPageComponent},
  {path: 'search/:search_input', component: SearchPageComponent, data: {name: 'pagesearch'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
