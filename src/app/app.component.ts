import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ApiService } from './services/api.service';
import { response } from 'express';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { json } from 'stream/consumers';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, JsonPipe, HttpClientModule,CommonModule,NgFor],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  message?: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLoginData("Name","Kiran").subscribe(response => {
      this.data = response;
      this.message = this.data.message
    });
  }
}

