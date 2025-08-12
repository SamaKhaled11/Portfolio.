import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-work',
  imports: [CommonModule, FormsModule,HttpClientModule ],
  templateUrl: './work.html',
  styleUrls: ['./work.css'],
})
export class Work implements OnInit {
  http = inject(HttpClient);

  workList: any[] = [];


  ngOnInit(): void {
    this.getWork();
  }

  getWork() {
    this.http.get<any[]>('http://localhost:3000/projectRoute').subscribe({
      next: (result) => (this.workList = result),
      error: (err) => alert('Error fetching project: ' + err),
    });
  }


}

