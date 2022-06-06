import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { UserService } from './user.service';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './route';
import { AuthGuard } from './auth/auth.guard';
import { AuthModGuard } from './auth/auth-mod.guard';
import { AuthInterceptor } from './auth/auth-interceptor';
import { StatsComponent } from './stats/stats.component';
import { StoryComponent } from './story/story.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsereditorComponent } from './usereditor/usereditor.component';
import { environment } from '../environments/environment';
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    StatsComponent,
    StoryComponent,
    NavbarComponent,
    UsereditorComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService, 
    AuthGuard, 
    AuthModGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
