
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  
  getAllEmployee(){
    let employeeList:any;
    if(localStorage.getItem('employee') && localStorage.getItem('employee') != '') {
      employeeList = {
        code : 200,
        message : "Employee List Fetched Successfully",
        data : JSON.parse(localStorage.getItem('employee') || '')
      }
    }else{
     employeeList = {
        code : 200,
        message : "Employee List Fetched Successfully",
        data : JSON.parse(localStorage.getItem('employee') || '')
      }
    }
    return employeeList;
  }

  doRegisterEmployee(data: any, index: number){
    let employeeList = JSON.parse(localStorage.getItem('employee') || '');
    let returnData;
    if(index != null) {
      for (var i = 0; i < employeeList.length; i++) {
        if (index != i && employeeList[i].email == data.email) {
          returnData = {
            code : 503,
            message : "Email Address Already In Use",
            data : null
          }    
          return returnData;
        }
      }

      employeeList[index] = data;
      localStorage.setItem('employee',JSON.stringify(employeeList));
      returnData = {
        code : 200,
        message : "Employee Successfully Updated",
        data : JSON.parse(localStorage.getItem('employee') || '')
      }    
    }else{      
      data.id = this.generateRandomID();
      for (var i = 0; i < employeeList.length; i++) {
        if (employeeList[i].email == data.email) {
          returnData = {
            code : 503,
            message : "Email Address Already In Use",
            data : null
          }    
          return returnData;
        }
      }
      employeeList.unshift(data);

      localStorage.setItem('employee',JSON.stringify(employeeList));

      returnData = {
        code : 200,
        message : "Employee Successfully Added",
        data : JSON.parse(localStorage.getItem('employee') || '')
      }    
    }
    return returnData;
  }

  deleteEmployee(index:number){
    let employeeList = JSON.parse(localStorage.getItem('employee') || '');

    employeeList.splice(index, 1);

    localStorage.setItem('employee',JSON.stringify(employeeList));

    let returnData = {
      code : 200,
      message : "Employee Successfully Deleted",
      data : JSON.parse(localStorage.getItem('employee') || '')
    }

    return returnData;
  }



  getEmployeeDetails(index:number){
    let employeeList = JSON.parse(localStorage.getItem('employee') || '');

    let returnData = {
      code : 200,
      message : "Employee Details Fetched",
      employeeData : employeeList[index]
    }

    return returnData;
  }


  generateRandomID() {
    var x = Math.floor((Math.random() * Math.random() * 9999));
    return x;
  }

}

