import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ApiService } from './services/api.service';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeForm } from './services/employee-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, JsonPipe, HttpClientModule,CommonModule,NgFor,FormsModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  message?: string;
  data1: any;
  name: string = "";
  id: number | null = null;
  department: string = "";
  minSalary?: number | null = null;
  maxSalary?: number | null = null;
  filteredData: any[] = [];
  filterActive: boolean = false;

  employee: EmployeeForm =new EmployeeForm();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLoginData().subscribe(response => {
      this.data1 = response;
      this.message = this.data1.message;
      console.log(this.message);
    });

    // this.fetchData();
  }

  fetchData() {
    let params: any = {};
    // let employeeForm = new EmployeeForm();

    // employeeForm.name = this.name;
    // employeeForm.department = this.department;
    // employeeForm.maxSalary = this.maxSalary;

    
    

    // if (this.name.trim()) {
    //   params.name = this.name;
    // }
    // if (this.employee.id !== undefined) params.id = this.id;
    // if (this.employee.department) params.department = this.department;
    // if (this.employee.minSalary !== undefined && this.employee.maxSalary !== undefined) {
    //   params.minSalary = this.minSalary;
    //   params.maxSalary = this.maxSalary;
    // }

    

      this.apiService.getLoginData1(this.employee).subscribe(
        result => {
          // console.log(result);
          this.data1 = result;
        },
      );
  }

  applyFilter(filterType: string, value: string) {
    this.filteredData = [...this.data1];
    switch (filterType) {
      case 'id':
        this.filteredData = this.filteredData.filter(item => item.id === parseInt(value));
        break;
      case 'name':
        this.filteredData = this.filteredData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        break;
      case 'department':
        this.filteredData = this.filteredData.filter(item => item.department.toLowerCase().includes(value.toLowerCase()));
        break;
      case 'salary':
        this.filteredData = this.filteredData.filter(item => item.salary.toString().includes(value));
        break;
    }
    // this.filterActive = true;
  }

  resetFilters() {
    this.filteredData = [...this.data1];
    this.filterActive = false;
  }


}
