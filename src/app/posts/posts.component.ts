import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

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
  this.postService.getAll()
          .subscribe(response => {
            this.posts = response;
          },error =>{
             alert('erreur innatendu');
             console.log(error);
          });
    
  }

  createPost(){
    this.postService.create(this.post)
        .subscribe(response => {
               this.posts.unshift(this.post);  
               this.post = {
                id: 0,
                title: '',
                body: '',
                userId: 0
               }    
        },(error: AppError) => {
          if(error instanceof BadInput) {
            alert('merci de verifier vos informations');
          }else {
            alert('erreur inatendu');
            console.log(error);
          }

        });
      }

      editPost(post){
        this.post= post;
        this.status = false;
      };
      updatePost(){
        this.postService.update(this.post)
            .subscribe(response => {
              this.post = {
                id: 0,
                title: '',
                body: '',
                userId: 0
               };
               this.status = true;
            },error =>{
              alert('erreur innatendu');
              console.log(error);
           });
      };
      deletePost(id){
      this.postService.delete(id)
        .subscribe(res =>{
              let index = this.posts.indexOf(id);
                this.posts.splice(index,1);
              
           }, (error: AppError) => {
             if(error instanceof NotFoundError) {
               alert('ce post est déja supprimé');
             }else {
               alert('erreur inatendu');
               console.log(error);
             }

           });
      }
}
