import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { StatsComponent } from './stats/stats.component';
import { AuthModGuard } from './auth/auth-mod.guard';
import { StoryComponent } from './story/story.component';
import { UsertableComponent } from './usertable/usertable.component';
import { Useredit } from './useredit.model';
import { UsereditorComponent } from './usereditor/usereditor.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/home', pathMatch : 'full'},
    { path: 'story', component: StoryComponent, canActivate:[AuthGuard]},
    { path: 'stats', component: StatsComponent, canActivate:[AuthGuard, AuthModGuard]},
    { path: 'users', component: UsertableComponent, canActivate:[AuthGuard, AuthModGuard]},
    { path: 'users/user/:id', component: UsereditorComponent, canActivate:[AuthGuard, AuthModGuard]}
];