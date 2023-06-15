import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ViewPostsComponent } from './view-posts/view-posts.component';

const routes: Routes = [
  {path:'',children:[
    { path: '', redirectTo: '/posts/All', pathMatch: 'full' },
    {path:'All',canActivate:[AuthGuard],component:ViewPostsComponent},
    {path:'control',canActivate:[AuthGuard],component:AddPostComponent},
    {path:'control/:id',canActivate:[AuthGuard],component:AddPostComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
