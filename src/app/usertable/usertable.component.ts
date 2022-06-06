import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {

  public users : any;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.displayAllUsers().subscribe((data : any)=>{
      this.users = data;
      console.log(this.users);
    });
  }
}
