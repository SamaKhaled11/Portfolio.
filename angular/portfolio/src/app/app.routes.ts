import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Experiences } from './experiences/experiences';
import { Work } from './work/work';
import { Header } from './header/header';
import { Contact } from './contact/contact';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: Header,
    children: [
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'experiences', component: Experiences },
      { path: 'work', component: Work },
      { path: 'contact', component: Contact }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
