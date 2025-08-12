import { Component } from '@angular/core';
import { Nav } from './nav/nav';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterOutlet, Nav],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

}
