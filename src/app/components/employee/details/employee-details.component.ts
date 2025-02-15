
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Services
import { EmployeeService } from '../../../services/employee/employee.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
     selector: 'app-employee-details',
     templateUrl: './employee-details.component.html',
     styleUrls: ['./employee-details.component.css'],
     animations: [routerTransition()],
     host: {'[@routerTransition]': ''}
})

export class EmployeeDetailsComponent implements OnInit {
     index:any;
     employeeDetail:any;
     constructor(private router: Router, private route: ActivatedRoute, private employeeService:EmployeeService,private toastr: ToastrService) { 
        
           this.route.params.subscribe(params => {
                 this.index = params['id'];
                 if (this.index && this.index != null && this.index != undefined) {
                       this.getEmployeeDetails(this.index);
                 }
           });
     }

     ngOnInit() {
     }


     getEmployeeDetails(index:number){
           let getEmployeeDetail = this.employeeService.getEmployeeDetails(index);
           if(getEmployeeDetail) {
                 this.employeeDetail = getEmployeeDetail.employeeData;
                 this.toastr.success(getEmployeeDetail.message,"Success");
           }
     }

}

