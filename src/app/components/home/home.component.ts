
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Components
import { StudentListComponent } from '../student/list/student-list.component';
import { StudentDetailsComponent } from '../student/details/student-details.component';
import { StudentAddComponent } from '../student/add/student-add.component';

// Services
import { routerTransition } from '../../services/config/config.service';
import { EmployeeListComponent } from '../employee/list/employee-list.component';
import { EmployeetAddComponent } from '../employee/add/employee-add.component';
import { EmployeeDetailsComponent } from '../employee/details/employee-details.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})


export class HomeComponent implements OnInit {
	active: string;
	constructor(private router: Router, private toastr: ToastrService) {
		this.active = '';
		// Detect route changes for active sidebar menu
		this.router.events.subscribe((val) => {
			this.routeChanged(val);
		});
	}

	ngOnInit() {
	}

	// Detect route changes for active sidebar menu
	routeChanged(val: any) {
		this.active = val.url;
	}

	// Logout User
	logOut() {
		this.toastr.success('Success', "Logged Out Successfully");
		localStorage.removeItem('userData');
		this.router.navigate(['/login']);
	}
}


// Define and export child routes of HomeComponent
export const homeChildRoutes: Routes = [
	// {
	// 	path: 'student-list',
	// 	component: StudentListComponent
	// },
	// {
	// 	path: 'student-add',
	// 	component: StudentAddComponent
	// },
	// {
	// 	path: 'student-update/:id',
	// 	component: StudentAddComponent
	// },
	// {
	// 	path: 'student-detail/:id',
	// 	component: StudentDetailsComponent
	// },
	// {
	// 	path: 'employee-list',
	// 	component: EmployeeListComponent
	// },
	// {
	// 	path: 'employee-add',
	// 	component: EmployeetAddComponent
	// 	},
	// {
	// 	path: 'employee-update/:id',
	// 	component: EmployeetAddComponent
	// },
	// {
	// 	path: 'employee-detail/:id',
	// 	component: EmployeeDetailsComponent
	// }
];


