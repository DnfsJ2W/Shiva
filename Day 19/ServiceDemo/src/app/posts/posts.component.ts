import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  private url = "http://jsonplaceholder.typicode.com/posts";


  constructor(private service : PostService) {

  }
  ngOnInit(): void {
    this.service.getPosts()
     .subscribe(response => {
       this.posts = response;
     },error=>{
       alert('An unexpected error occured');
       console.log(error);
     })
   }

   createPost(input: HTMLInputElement){
     let post:any= {title: input.value}

     input.value='';

     this.service.createPosts(post)
     .subscribe((response:any) =>{
       post['id']=response['id'];
       this.posts.splice(0,0,post);

     });

   }

   updatePost(post:any){

     this.service.updatePost(post)
     .subscribe(response =>{
       console.log(response);
     })

     //this.http.post(this.url,JSON.stringify(post));

   }

   deletePost(post:any){
     this.service.deletePost(post.id)
     .subscribe(response=>{
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1);
     })
   }


  /* ngOnInit(): void {
    this.service.getPosts()
     .subscribe(response => {
       this.posts = response;
     })
   }

   createPost(input: HTMLInputElement){
     let post:any= {title: input.value}

     input.value='';

     this.service.createPosts(post)
     .subscribe((response:any) =>{
       post['id']=response['id'];
       this.posts.splice(0,0,post);

     });

   }

   updatePost(post: any){

     this.service.updatePost(post)
     .subscribe(response =>{
       console.log(response);
     })

     //this.http.post(this.url,JSON.stringify(post));

   }

   deletePost(post:any){
     this.service.deletePost(post.id)
     .subscribe(response=>{
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1);
     })
   } */

  /* ngOnInit(): void {
    this.http.get(this.url)
    .subscribe((response: any) => {
      this.posts = response;
    })
  }

  createPost(input: HTMLInputElement){
    let post:any = {title: input.value}

    input.value='';

    this.http.post(this.url,JSON.stringify(post))
    .subscribe((response:any) =>{
      post['id']=response['id'];
      this.posts.splice(0,0,post);

    });
  }

  updatePost(post:any, input: HTMLInputElement){
    post = {title: input.value}

    this.http.patch(this.url + '/' +  post.id,JSON.stringify({isRead :true}))
    .subscribe(response =>{
      //let index = this.posts.indexOf(post);
      post['id']=response;
      this.posts.splice(0,0,post);
      //console.log(response);
    })
    //this.http.post(this.url,JSON.stringify(post));
  }
  deletePost(post:any){
    this.http.delete(this.url +'/'+post.id)
    .subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  } */



}

