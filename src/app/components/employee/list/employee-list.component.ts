
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import { EmployeeService } from '../../../services/employee/employee.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
      selector: 'app-employee-list',
      templateUrl: './employee-list.component.html',
      styleUrls: ['./employee-list.component.css'],
      animations: [routerTransition()],
      host: { '[@routerTransition]': '' }
})

export class EmployeeListComponent implements OnInit {
      employeeList: any;
      employeeListData: any;
      filterData: string = '';
      constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }
    
      ngOnInit() {
            this.getEmployeeList();
      }

  
      getEmployeeList() {
            let employeeList = this.employeeService.getAllEmployee();
            this.success(employeeList)
      }

     
      success(data: any) {
            this.employeeListData = data.data;
            for (var i = 0; i < this.employeeListData.length; i++) {
                  this.employeeListData[i].name = this.employeeListData[i].first_name + ' ' + this.employeeListData[i].last_name;
            }
      }

     
      deleteEmployee(index: number) {
          
            let r = confirm("Are you sure?");
            if (r == true) {
                  let employeeDelete = this.employeeService.deleteEmployee(index);
                  if (employeeDelete) {
                        this.toastr.success("Success", "Employee Deleted");
                  }
                  this.getEmployeeList();
            }
      }
}

