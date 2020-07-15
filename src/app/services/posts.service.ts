import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apperror } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // la réccupération des postes
  getPosts(){
    return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError));

  }

    // la création des postes

  createPost(post){
    return this.http.post(this.url, post).pipe(
      retry(1),
      catchError(this.handleError));;

  }

    // la modification des postes

  updatePost(post){
    return this.http.put(this.url+'/'+post.id,post).pipe(
      retry(1),
      catchError(this.handleError));
  } 

  // la supprésion des postes
  deletePost(post){
    return this.http.delete(this.url+'/'+post.id).pipe(
           retry(1),
           catchError(this.handleError));
               
  }

  private handleError(error : Response)
  {
            if(error.status === 404){
              return Observable.throw(new NotFoundError);
            }
            if(error.status === 400){
              return Observable.throw(new BadInput);
            }
            return Observable.throw (new Apperror);
            
  }
}
