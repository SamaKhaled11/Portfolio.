import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
    imports: [ FormsModule,HttpClientModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contactObj = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  onSaveContact() {
    this.http.post('http://localhost:3000/contactRoute', this.contactObj).subscribe({
      next: () => {
        alert('Message sent!');
        this.contactObj = { name: '', email: '', subject: '', message: '' };
      },
      error: (err) => {
        alert('Failed to send message.');
        console.error(err);
      },
    });
  }
}
