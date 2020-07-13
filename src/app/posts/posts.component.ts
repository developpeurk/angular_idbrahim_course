import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  status = true;
  posts:any = [];
  post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  };
  constructor(private postService: PostsService ) { 
  }
  
  ngOnInit(): void {
      this.getPosts();

  }

  getPosts(){
  this.postService.getPosts()
          .subscribe(response => {
            this.posts = response;
          });
    
  }

  createPost(){
    this.postService.createPost(this.post)
        .subscribe(response => {
               this.post.userId = response.id;
               this.posts.unshift(this.post);  
               this.post = {
                id: 0,
                title: '',
                body: '',
                userId: 0
               }    
        })
      }

      editPost(post){
        this.post= post;
        this.status = false;
      };
      updatePost(){
        this.postService.updatePost(this.post)
            .subscribe(response => {
              this.post = {
                id: 0,
                title: '',
                body: '',
                userId: 0
               };
               this.status = true;
            })
      };
      deletePost(post){
      this.postService.deletePost(post)
        .subscribe(res =>{
              let index = this.posts.indexOf(post);
                this.posts.splice(index,1);
              
           })
      }
}
