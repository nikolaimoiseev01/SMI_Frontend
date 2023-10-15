import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private postService: PostsService) {
  }

  search_input: string | null = this.route.snapshot.paramMap.get('search_input');
  posts: IPost[] = []

  ngOnInit(): void {
    this.postService.searchPosts(this.search_input).subscribe(posts => {
      this.posts = posts
    })


  }


}
