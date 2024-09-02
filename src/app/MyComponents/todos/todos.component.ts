import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  // todos: any[];

  // constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   this.apiService.getTodos().subscribe(data => {
  //     this.todos = data;
  //   });
  // }
}