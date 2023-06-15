import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/core/services/comments.service';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit{
  isFavorite=false
  param:any;
  comments:any=[];
  post:any={}
  constructor(private _CommentsService:CommentsService,private route: ActivatedRoute,private _PostsService:PostsService) {}
  ngOnInit() {
    this.param= this.route.snapshot.paramMap.get('id');
    this._PostsService.getOnePost(this.param).subscribe({
      next:data=>{
        this.post=data
        console.log(this.post);

      }
    })
    this._CommentsService.getCommentsForOnePost(this.param).subscribe({
      next:data=>{
        this.comments=data
        console.log(this.comments);

      }
    })
  }
  clickFavorite():void{
    this.isFavorite=true
  }
}
