import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Experiences } from './experiences/experiences';
import { Work } from './work/work';
import { Contact } from './contact/contact';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Home,About,Experiences,Work,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
