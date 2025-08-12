import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { Admin } from './admin/admin';
import { User } from './user/user';
import { Exper } from './exper/exper';
import { Projects } from './projects/projects';
import { Header } from './header/header';
import { ContactUser } from './contact-user/contact-user';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: Header,
    children: [
      { path: 'admin', component: Admin },
      { path: 'user', component: User },
      { path: 'exper', component: Exper },
      { path: 'projects', component: Projects },
      { path: 'contactUser', component: ContactUser }
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
