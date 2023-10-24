import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable, retry} from "rxjs";
import {IPost} from "../interfaces/post";
import {environment} from "../enviroment";
import {IPostTopic} from "../interfaces/post-topic";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  getPosts(post_topic_id: number): Observable<IPost[]> {
    // Создаем объект с параметрами запроса
    let queryParams = new HttpParams();
    queryParams = queryParams.append("post_topic",post_topic_id);

    const apiUrl = `${this.apiBaseUrl}/posts/all`;
    return this.http.get<IPost[]>(apiUrl)
  }

  searchPosts(search_input: string | null): Observable<IPost[]> {
    const apiUrl = `${this.apiBaseUrl}/posts/all?search=${search_input}`;
    return this.http.get<IPost[]>(apiUrl)
  }

  getPost(id: number): Observable<IPost> {
    const apiUrl = `${this.apiBaseUrl}/post/${id}`;
    return this.http.get<IPost>(apiUrl)
  }

  getPostTopics(): Observable<IPostTopic[]> {
    const apiUrl = `${this.apiBaseUrl}/post-topics/all`;
    return this.http.get<IPostTopic[]>(apiUrl)
  }
}
