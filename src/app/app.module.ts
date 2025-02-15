import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { enableProdMode } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';
import { EmployeeService } from './services/employee/employee.service';
// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { EmployeeDetailsComponent } from './components/employee/details/employee-details.component';
import { EmployeeListComponent } from './components/employee/list/employee-list.component';
import { EmployeetAddComponent } from './components/employee/add/employee-add.component';




// Parent Routes
const routes: Routes = [

	{
		path: '',
		component: HomeComponent,
		children: homeChildRoutes,
		canActivate: [AuthService]
	},
	{
		path: 'login',
		component: LoginComponent
	},


	{
		path: 'student-list',
		component: StudentListComponent,
		// loadChildren: () => import('./components/student/details/student-details.component').then(m => m.StudentDetailsComponent)
	},
	{
		path: 'student-add',
		component: StudentAddComponent
	},
	{
		path: 'student-detail/:id',
		component: StudentDetailsComponent
	}
	,
	{
		path: 'student-update/:id',
		component: StudentAddComponent
	},

	{
		path: 'employee-list',
		component: EmployeeListComponent
	},
	{
		path: 'employee-add',
		component:EmployeetAddComponent
	},
	{
		path: 'employee-detail/:id',
		component: EmployeeDetailsComponent
	},
	{
		path: 'employee-update/:id',
		component: EmployeetAddComponent
	},

	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	declarations: [
		AppComponent,
		StudentListComponent,
		StudentDetailsComponent,
		StudentAddComponent,
		LoginComponent,
		EmployeeDetailsComponent,
		EmployeeListComponent,
		EmployeetAddComponent,
		HomeComponent,
		FilterPipe,
		PhonePipe,
		HighlightStudentDirective,

	],
	imports: [
		BrowserModule,
		RouterModule,
		RouterModule.forRoot(routes),
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
		}),
	],
	providers: [AuthService, UserService, StudentService,EmployeeService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
