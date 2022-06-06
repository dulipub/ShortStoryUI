import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isLoginError : boolean = false;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  OnSubmit(userId : string, password : string){
    this.userService.userAuthentication(userId,password).subscribe((data : any)=>{
     localStorage.setItem('userToken', data.token);
     localStorage.setItem('UserId', data.userId);
     localStorage.setItem('Role', data.role);
     this.router.navigate(['/home']);
   },
   (error : HttpErrorResponse) => {});
 }
}
