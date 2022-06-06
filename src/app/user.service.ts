import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Login } from './shared/login.model';
import { Story } from './shared/story.model';
import { Useredit } from './useredit.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BaseUrl : string = 'https://localhost:44335/api/'

  constructor(private http : HttpClient) { }

  registerUser(user : User){
    const body: User = {
      UserId: user.UserId,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }

    return this.http.post(this.BaseUrl + 'User/register', body, {observe: 'response'});
  }

  editUser(user : Useredit, role : Number, ban : Number){
    const body: Useredit = {
      UserId: user.UserId,
      IsEditor : Number(role),
      IsBanned : Number(ban)
    }

    return this.http.put(this.BaseUrl + 'User/edit', body);
  }

  userAuthentication(userId : string, password : string) {
    var data = new Login(userId, password);
    return this.http.post(this.BaseUrl + 'User/login', data);
  }

  displayFollowingWriters(){
    return this.http.get(this.BaseUrl + "User/getwriters");
  }

  writeStory(story : string){
    const body : Story = {
      Text : story
    }

    return this.http.post(this.BaseUrl + 'Posts', body, {observe: 'response'});
  }

  displayStats(){
    return this.http.get(this.BaseUrl + "Stats");
  }

  displayAllUsers(){
    return this.http.get(this.BaseUrl + "User/GetAllNormalUsers");
  }

  getUser(userId : string){
    return this.http.get(this.BaseUrl + "User?userId=" + userId, {observe: 'response'});
  }
}
