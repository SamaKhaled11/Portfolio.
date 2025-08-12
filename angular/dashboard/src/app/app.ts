import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Admin } from './admin/admin';
import { User } from './user/user';
import { Exper } from './exper/exper';
import { Projects } from './projects/projects';
import { ContactUser } from './contact-user/contact-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Admin,User,Exper,Projects,ContactUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
