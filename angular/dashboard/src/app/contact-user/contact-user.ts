import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-user.html',
  styleUrl: './contact-user.css'
})
export class ContactUser implements OnInit{
  ngOnInit(): void {
        this.getContact();
  }
  http = inject(HttpClient);
  contactList: any[] = [];

  getContact(){
    this.http.get('http://localhost:3000/contactRoute').subscribe((result:any) => {
      this.contactList = result
    })
  }
}
