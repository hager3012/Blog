import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent implements OnInit{
  islogin=false
  constructor(private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem('userToken')!=null){
      this.islogin=true
    }
    else{
      this.islogin=false
    }
  }
  ngOnInit(): void {

  }
  LogOut():void{
    this._AuthService.logOut();
    this._Router.navigate(['login'])
  }
}
