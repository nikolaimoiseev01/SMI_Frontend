import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";
import {IPost} from "../../interfaces/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: IPost[] = []



  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {

    this.postService.getPosts(2).subscribe(posts => {
      this.posts = posts
    })


  }

}
