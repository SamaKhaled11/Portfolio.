import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exper',
  imports: [CommonModule,FormsModule ],
  templateUrl: './exper.html',
  styleUrl: './exper.css'
})
export class Exper implements OnInit{
  ngOnInit(): void {
    this.getExper();
  }
  http = inject(HttpClient);
  experList: any[] = [];
  experOpj:any={
    "experience":'',
    "level":'',
  }
    getExper(){
    this.http.get('http://localhost:3000/experRoute').subscribe((result:any) => {
      this.experList = result
    })
  }
    onSaveExper(){
    this.http.post('http://localhost:3000/experRoute',this.experOpj).subscribe({
      next:(result)=>{
        alert("experience created");
        this.getExper();
      },error:(error)=>{
        alert('error' + error);
      }
    })
  }
  onUpdateExper(){
    this.http.patch('http://localhost:3000/experRoute/' + this.experOpj._id,this.experOpj).subscribe({
        next:(result)=>{
        alert("experience updated");
        this.getExper();
      },error:(error)=>{
        alert('error' + error);
      }
    })
  }
  onEdit(item:any){
    this.experOpj = item;
  }

   resetForm() {
    this.experOpj = {
      _id: '',
      experience: '',
      level: ''
    };
  }

   onDeleteExper(id: string) {
    if (!confirm('Are you sure you want to delete this?')) return;
    this.http.delete('http://localhost:3000/experRoute/' + id).subscribe({
      next: () => {
        alert('experience deleted');
        this.getExper();
        this.resetForm();
      },
      error: (error) => alert('error ' + error)
    });
  }
}
