import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // la réccupération des postes
  getPosts(){
    return this.http.get(this.url);

  }

    // la création des postes

  createPost(post){
    return this.http.post(this.url, post);

  }

    // la modification des postes

  updatePost(post){
    return this.http.put(this.url+'/'+post.id,post)
  } 

  // la supprésion des postes
  deletePost(post){
    return this.http.delete(this.url+'/'+post.id)
  }
}
