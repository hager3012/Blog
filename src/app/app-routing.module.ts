import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

const routes: Routes = [
  {path:'',redirectTo:'panel',pathMatch:'full'},
  {path:'',component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'register',component:RegisterComponent,title:'Register'}
  ]},
  {path:'panel',canActivate:[AuthGuard],component:BlankLayoutComponent,children:[
    { path: 'posts',canActivate:[AuthGuard], loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }
  ]},
  {path:'panel',canActivate:[AuthGuard],component:BlankLayoutComponent,children:[
    { path: 'comments',canActivate:[AuthGuard], loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) }
  ]},
  {path:'**',component:NotFoundComponent,title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
