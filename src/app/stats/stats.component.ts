import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats : any;
  
  constructor(private router : Router, private userService : UserService ) { }

  ngOnInit(): void {
    this.userService.displayStats().subscribe((data : any)=>{
      this.stats = data;
    });
  }

}
