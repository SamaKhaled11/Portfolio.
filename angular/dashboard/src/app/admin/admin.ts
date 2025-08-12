import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin implements OnInit{
  ngOnInit(): void {
    this.getAdmin();
  }
  http = inject(HttpClient);
  adminList: any[] = [];
  adminOpj:any={
    "_id":'',
    "userName":'',
    "password":''
  }

  getAdmin(){
    this.http.get('http://localhost:3000/adminRoute').subscribe((result:any) => {
      this.adminList = result
    })
  }
  onSaveAdmin(){
    this.http.post('http://localhost:3000/adminRoute',this.adminOpj).subscribe({
      next:(result)=>{
        alert("Admin created");
        this.getAdmin();
      },error:(error)=>{
        alert('error' + error);
      }
    })
  }
  onUpdateAdmin(){
    this.http.patch('http://localhost:3000/adminRoute/' + this.adminOpj._id,this.adminOpj).subscribe({
        next:(result)=>{
        alert("Admin updated");
        this.getAdmin();
      },error:(error)=>{
        alert('error' + error);
      }
    })
  }
  onEdit(item:any){
    this.adminOpj = item;
  }

   resetForm() {
    this.adminOpj = {
      _id: '',
      userName: '',
      password: ''
    };
  }

   onDeleteAdmin(id: string) {
    if (!confirm('Are you sure you want to delete this admin?')) return;
    this.http.delete('http://localhost:3000/adminRoute/' + id).subscribe({
      next: () => {
        alert('Admin deleted');
        this.getAdmin();
        this.resetForm();
      },
      error: (error) => alert('error ' + error)
    });
  }
}
