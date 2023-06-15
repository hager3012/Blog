import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../core/services/posts.service';
import { CommentsService } from 'src/app/core/services/comments.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit{
  posts:any=[]
  comments:any=[]
  lengthComments=0
constructor(private _PostsService:PostsService,
  private toastr: ToastrService,
  private _Router:Router
  ) {}
ngOnInit(): void {
    this._PostsService.getAllPosts().subscribe({
      next:data=>{
        this.posts=data;

      }
    })
}
deletePost(id:string):void{
this._PostsService.deletePost(id).subscribe({
  next:data=>{
    this.toastr.success('Success', 'You Delete Post success');
  }
})
}
viewComments(id:string):void{
  this._Router.navigate(['/panel/comments/All/'+id])
}
update(id:string):void{
  this._Router.navigate(['/panel/posts/control/'+id])
}
}
