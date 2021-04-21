import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(public http: HttpClient) {}
  getPosts(){
    return this.http.get(this.url);

  }
  createPosts(post: any){
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' +  post.id,JSON.stringify({isRead :true}));
  }

  deletePost(id: any){
    return this.http.delete(this.url +'/'+id)
  }

}
