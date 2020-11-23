import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateanddeleteComponent } from './updateanddelete/updateanddelete.component';
import { GetallvaluesComponent } from './getallvalues/getallvalues.component';
import { CreateComponent } from './create/create.component';
import { SearchallComponent } from './searchall/searchall.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'updateanddelete', loadChildren: () => import('./updateanddelete/updateanddelete.module').then(mod => mod.UpdateanddeleteModule)},
  { path: '', component: TemplateComponent , pathMatch: 'full' },
{ path: 'getallvalues', loadChildren: () => import('./getallvalues/getallvalues.module').then(mod => mod.GetallvaluesModule)},
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
{ path: 'create', loadChildren: () => import('./create/create.module').then(mod => mod.CreateModule)},

{ path: 'searchall', loadChildren: () => import('./searchall/searchall.module').then(mod => mod.SearchallModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
