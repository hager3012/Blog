import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/core/services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from 'src/app/core/services/comments.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  param:any
  post:any={};
  formAdd:FormGroup=this._fb.group({
    title:['',[Validators.required]],
    body:['',[Validators.required]],
    userId:['',[Validators.required]],
  });
  constructor(private _fb:FormBuilder,private _PostsService:PostsService,private toastr: ToastrService, private _Router:Router,private route: ActivatedRoute) {}
  ngOnInit() {
    this.param= this.route.snapshot.paramMap.get('id');
    if(this.param){
      this._PostsService.getOnePost(this.param).subscribe({
        next:data=>{
          this.post=data
          console.log(this.post);

        }
      })
    }
    }

AddPost(form:FormGroup):void{
  this._PostsService.addPost(form.value).subscribe({
    next:data=>{
      this.toastr.success('Success', 'You Add post success');
      this._Router.navigate(['/panel/posts/All'])
    }
  })
}
updatePost(form:FormGroup):void{
  this._PostsService.updatePost(this.param,form.value).subscribe({
    next:data=>{
      this.toastr.success('Success', 'You Update post success');
      this._Router.navigate(['/panel/posts/All'])
    }
  })
}
}
