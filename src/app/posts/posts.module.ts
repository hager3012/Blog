import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { TruncatePipe } from '../core/pipes/truncate.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    ViewPostsComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
