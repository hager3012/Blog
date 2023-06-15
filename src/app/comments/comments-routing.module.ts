import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

const routes: Routes = [
  { path: 'All/:id',canActivate:[AuthGuard], component: ViewCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
