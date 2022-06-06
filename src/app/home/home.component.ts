import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  writers : any;
  isModerator : boolean;

  constructor(private userService : UserService ) { }

  ngOnInit(): void {
    this.userService.displayFollowingWriters().subscribe((data : any)=>{
      this.writers = data;
    });
  }
}
