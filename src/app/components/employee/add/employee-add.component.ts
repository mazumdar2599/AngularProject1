
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { EmployeeService } from '../../../services/employee/employee.service';
import { routerTransition } from '../../../services/config/config.service';

import { ToastrService } from 'ngx-toastr';

@Component({
      selector: 'app-employee-add',
      templateUrl: './employee-add.component.html',
      styleUrls: ['./employee-add.component.css'],
      animations: [routerTransition()],
      host: { '[@routerTransition]': '' }
})

export class EmployeetAddComponent implements OnInit {
    
      employeeAddForm:FormGroup;
      index: any;

      constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService, private toastr: ToastrService) {

         
            this.route.params.subscribe(params => {
                  this.index = params['id'];
                  
                  if (this.index && this.index != null && this.index != undefined) {
                        this.getEmployeeDetails(this.index);
                  } else {
                        this.createForm(null);
                  }
            });
      }

      ngOnInit() {
      }

   
      doRegister() {
            if (this.index && this.index != null && this.index != undefined) {
                  this.employeeAddForm.value.id = this.index
            } else {
                  this.index = null;
            }
            let employeeRegister = this.employeeService.doRegisterEmployee(this.employeeAddForm.value, this.index);
            if (employeeRegister) {
                  if (employeeRegister.code == 200) {
                        this.toastr.success(employeeRegister.message, "Success");
                        this.router.navigate(['/']);
                  } else {
                        this.toastr.error(employeeRegister.message, "Failed");
                  }
            }
      }

     
      getEmployeeDetails(index: number) {
            let employeeDetail = this.employeeService.getEmployeeDetails(index);
            this.createForm(employeeDetail);
      }


      createForm(data: any) {
            if (data == null) {
                  this.employeeAddForm = this.formBuilder.group({
                        first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                        last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                        phone: ['', [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
                        email: ['', [Validators.required, ValidationService.emailValidator]]
                  });
            } else {
                  this.employeeAddForm = this.formBuilder.group({
                        first_name: [data.employeeData.first_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                        last_name: [data.employeeData.last_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                        phone: [data.employeeData.phone, [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
                        email: [data.employeeData.email, [Validators.required, ValidationService.emailValidator]]
                  });
            }
      }

}

