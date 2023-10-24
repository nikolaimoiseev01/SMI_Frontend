import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post";
import {HttpClient} from "@angular/common/http";
// import {environment} from "../../enviroment";
import {IPostTopic} from "../../interfaces/post-topic";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts-feed-page',
  templateUrl: './posts-feed-page.component.html',
  styleUrls: ['./posts-feed-page.component.scss']
})
export class PostsFeedPageComponent implements OnInit {
  // apiBaseUrl = environment.apiBaseUrl

  options_post_topics: IPostTopic[] = []
  posts: IPost[] = []
  selectOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectOptions2: string[] = ['AOption 1', 'AOption 2', 'AOption 3', 'AOption 4'];

  constructor(private http: HttpClient, private postService: PostsService) {
  }


  ngOnInit(): void {
    // console.log(this.options_post_topics)
    this.postService.getPostTopics().subscribe(topics => {
      this.options_post_topics = topics
    })

    this.postService.getPosts(2).subscribe(posts => {
      this.posts = posts
      console.log(posts)
    })
  }


  onSelectionChanged(selectedValue: string): void {
    // this.selectedOption = selectedValue;
    console.log(selectedValue)
    // Здесь вы можете выполнить другие действия в зависимости от выбора
  }
}
