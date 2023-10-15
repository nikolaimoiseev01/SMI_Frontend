import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../interfaces/post";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  idParam: string | null = this.route.snapshot.paramMap.get('id');
  post_id: number

  post: IPost

  constructor(private route: ActivatedRoute,
              private postService: PostsService) {
  }

  ngOnInit(): void {

    if (this.idParam !== null) {
      this.post_id = +this.idParam
    } else {
      console.warn('POST ID IS NULL!')
    }

    this.postService.getPost(this.post_id).subscribe(post => {
      // console.log(post)
      this.post = post
      // console.log(this.post)
    })

  }
}
