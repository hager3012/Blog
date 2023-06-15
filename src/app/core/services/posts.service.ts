import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HttpClient:HttpClient) { }
  getAllPosts():Observable<any>{
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  addPost(addForm:object):Observable<any>{
    return this._HttpClient.post('https://jsonplaceholder.typicode.com/posts',addForm,{
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  }
  updatePost(id:string,updateForm:object):Observable<any>{
    return this._HttpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`,updateForm,{
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  }
  getOnePost(id:string):Observable<any>{
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  deletePost(id:string):Observable<any>{
    return this._HttpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
