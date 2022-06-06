import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Story } from '../shared/story.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public story : Story = new Story();

  constructor(private userService : UserService,private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  OnSubmit(form : NgForm){
    let text : any = form;
    this.userService.writeStory(text).subscribe((response: any) => {
      if (response.status == 200) {
        this.toastr.success('Story Posted');
      }
      else{
        form.reset();
        this.toastr.error("Request Failed");
      }
    });
  }
}
