import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule ],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About implements OnInit {
  http = inject(HttpClient);

  userList: any[] = [];


  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get<any[]>('http://localhost:3000/userRoute').subscribe({
      next: (result) => (this.userList = result),
      error: (err) => alert('Error fetching users: ' + err),
    });
  }


}

