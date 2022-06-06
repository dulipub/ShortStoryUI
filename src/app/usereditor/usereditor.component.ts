import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Useredit } from '../useredit.model';

class Options {
  name : string;
  value : number;
}

@Component({
  selector: 'app-usereditor',
  templateUrl: './usereditor.component.html',
  styleUrls: ['./usereditor.component.scss']
})

export class UsereditorComponent implements OnInit {

  public Banned : Options[] = [
    { name: "False", value: 0 },
    { name: "True", value: 1 }
  ]

  public Editor : Options[] = [
    { name: "False", value: 0 },
    { name: "True", value: 1 }
  ]

  isBanned : number = 0;
  isEditor : number = 0;

  public user : Useredit = new Useredit();
  private userId : string;
  constructor(private userService : UserService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId= this.activatedroute.snapshot.paramMap.get("id");
    this.userService.getUser(this.userId).subscribe((response: any) => {
      if (response.status == 200) {
        this.user.UserId = response.body.userId;
        this.user.IsBanned = response.body.isBanned;
        this.isBanned = response.body.isBanned;

        this.user.IsEditor = response.body.isEditor;
        this.isEditor = response.body.isEditor;

      }
    })
  }

  OnSubmit(form : NgForm){
    this.userService.editUser(form.value, this.isEditor, this.isBanned )
    .subscribe((response: any) => {
    });
  }

  selected(){
    console.log('');
  }
}
