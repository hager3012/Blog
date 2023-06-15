import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    CommentsComponent,
    ViewCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    MatIconModule
  ]
})
export class CommentsModule { }
