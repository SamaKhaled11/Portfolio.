import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User implements OnInit {
  http = inject(HttpClient);

  userList: any[] = [];
  userOpj: any = {
    _id: '',
    name: '',
    age: null,
    email: '',
    jobTitle: '',
    freelance: '',
    location: '',
    userImage: '',
  };

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get<any[]>('http://localhost:3000/userRoute').subscribe({
      next: (result) => (this.userList = result),
      error: (err) => alert('Error fetching users: ' + err),
    });
  }

  onSaveUser() {
    this.http.post('http://localhost:3000/userRoute', this.userOpj).subscribe({
      next: () => {
        alert('User created');
        this.getUser();
        this.resetForm();
      },
      error: (err) => alert('Error creating user: ' + err),
    });
  }

  onUpdateUser() {
    this.http.patch('http://localhost:3000/userRoute/' + this.userOpj._id, this.userOpj).subscribe({
      next: () => {
        alert('User updated');
        this.getUser();
        this.resetForm();
      },
      error: (err) => alert('Error updating user: ' + err),
    });
  }

  onEdit(item: any) {
    this.userOpj = { ...item };
  }

  resetForm() {
    this.userOpj = {
      _id: '',
      name: '',
      age: null,
      email: '',
      jobTitle: '',
      freelance: '',
      location: '',
      userImage: '',
    };
  }

  onDeleteUser(id: string) {
    if (!confirm('Are you sure you want to delete this user?')) return;
    this.http.delete('http://localhost:3000/userRoute/' + id).subscribe({
      next: () => {
        alert('User deleted');
        this.getUser();
        this.resetForm();
      },
      error: (err) => alert('Error deleting user: ' + err),
    });
  }
}

