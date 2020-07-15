import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends dataService {
  

  constructor(http: HttpClient) 
  {
        super("http://jsonplaceholder.typicode.com/posts", http);
   }

  }
