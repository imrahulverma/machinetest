import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
constructor(private empService:EmployeeService){}
empData:any;
ngOnInit(): void {
  this.empService.getEmployee().subscribe({
    next:(res:any)=>{
      console.log(res.data)
      this.empData=res.data
    },
    error:(error)=>{
      console.log(error)
    }
  })
}

}
