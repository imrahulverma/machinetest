import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements  OnInit {
  constructor(){}
  @Input() emp: any;
  keys!: string[];
  employeeData: any;
  selectedAge!: string;


  query!: string;
  ageOptions!: string[];

  ngOnInit(): void {
    let key = Object.keys(this.emp[0]);
    this.keys = key;
    this.employeeData = this.emp;

    
    let ageRange = [];
    let minAge = 0;

    let maxAge = this.employeeData.reduce((max: any, employee: any) => {
      return employee.employee_age > max ? employee.employee_age : max;
    }, 0);

    for (let age = minAge; age <= maxAge; age += 20) {
      ageRange.push(`${age}- ${age + 20}`);
    }
    this.ageOptions = ageRange;
  }


  ageFilter() {
    const [minage, maxage] = this.selectedAge.split('-');
    let filteredEmp = this.emp.filter((employee: any) => {
      return employee.employee_age > minage && employee.employee_age <= maxage;
    });
    this.employeeData = filteredEmp;
  }

  

  ascending() {
    this.employeeData.sort(
      (a: any, b: any) => a.employee_salary - b.employee_salary
    );
  }
  descending() {
    this.employeeData.sort(
      (a: any, b: any) => b.employee_salary - a.employee_salary
    );
  }
  reset() {
    this.employeeData=[...this.emp]

  }
}
