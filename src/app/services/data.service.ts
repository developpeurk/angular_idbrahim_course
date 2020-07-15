import { catchError, retry } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


export class dataService {
  

  constructor(@Inject(String) private url:string, private http: HttpClient) { }

  // la réccupération des postes
  getAll(){
    return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError));

  }

    // la création des postes

  create(resource){
    return this.http.post(this.url, resource).pipe(
      retry(1),
      catchError(this.handleError));;

  }

    // la modification des postes

  update(resource){
    return this.http.put(this.url+'/'+resource.id,resource).pipe(
      retry(1),
      catchError(this.handleError));
  } 

  // la supprésion des postes
  delete(resource){
    return this.http.delete(this.url+'/'+resource.id).pipe(
           retry(1),
           catchError(this.handleError));
               
  }

  private handleError(error : Response)
  {
            if(error.status === 404){
              return throwError(new NotFoundError);
            }
            if(error.status === 400){
              return throwError(new BadInput);
            }
            return throwError (new AppError);
            
  }
}
