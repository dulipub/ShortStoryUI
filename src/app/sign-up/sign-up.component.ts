import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  public user : User = new User('','','','','');
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService : UserService, private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if(form != null){
      form.reset();
      this.user = {
        UserId : '',
        FirstName : '',
        LastName : '',
        Email : '',
        Password : ''
      }
    }

  }

  OnSubmit(form : NgForm){
    console.log("ok");
    this.userService.registerUser(form.value)
    .subscribe((response: any) => {
      if (response.status == 200) {
        this.resetForm(form);
        this.toastr.success('User registration successful');
      }
      else{
        this.toastr.error("Request Failed");
        console.log(response?.error[0]);
      }
    });
  }
}
