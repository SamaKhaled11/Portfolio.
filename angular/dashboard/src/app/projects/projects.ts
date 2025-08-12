import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects implements OnInit {
  http = inject(HttpClient);

  projectList: any[] = [];
  projectOpj: any = {
    _id: '',
    proImg: '',
    proName: '',
    desc: ''
  };

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.http.get<any[]>('http://localhost:3000/projectRoute').subscribe({
      next: (result) => (this.projectList = result),
      error: (err) => alert('Error fetching projects: ' + err),
    });
  }

  onSaveProject() {
    this.http.post('http://localhost:3000/projectRoute', this.projectOpj).subscribe({
      next: () => {
        alert('Project created');
        this.getProjects();
        this.resetForm();
      },
      error: (err) => alert('Error creating project: ' + err),
    });
  }

  onUpdateProject() {
    this.http.patch('http://localhost:3000/projectRoute/' + this.projectOpj._id, this.projectOpj).subscribe({
      next: () => {
        alert('Project updated');
        this.getProjects();
        this.resetForm();
      },
      error: (err) => alert('Error updating project: ' + err),
    });
  }

  onEdit(item: any) {
    this.projectOpj = { ...item };
  }

  resetForm() {
    this.projectOpj = {
      _id: '',
      proImg: '',
      proName: '',
      desc: ''
    };
  }

  onDeleteProject(id: string) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    this.http.delete('http://localhost:3000/projectRoute/' + id).subscribe({
      next: () => {
        alert('Project deleted');
        this.getProjects();
        this.resetForm();
      },
      error: (err) => alert('Error deleting project: ' + err),
    });
  }
}

