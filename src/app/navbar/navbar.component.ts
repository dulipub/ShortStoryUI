import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isModerator : boolean;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.isModerator = (localStorage.getItem('Role') == 'Moderator');
  }

  LogOut(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('UserId');
    localStorage.removeItem('Role');
    this.router.navigate(['/signup']);
  }
}
