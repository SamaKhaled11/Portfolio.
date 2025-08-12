import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule, FormsModule,HttpClientModule ],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.css'],
})
export class Experiences implements OnInit {
  http = inject(HttpClient);

  experList: any[] = [];


  ngOnInit(): void {
    this.getExper();
  }

  getExper() {
    this.http.get<any[]>('http://localhost:3000/experRoute').subscribe({
      next: (result) => (this.experList = result),
      error: (err) => alert('Error fetching experience: ' + err),
    });
  }

}
