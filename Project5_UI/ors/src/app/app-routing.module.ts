import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeListComponent } from './college/college-list.component';
import { CollegeComponent } from './college/college.component';
import { CourseListComponent } from './course/course-list.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './login/user-registration.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { MeritListComponent } from './marksheet/merit-list.component';
import { RoleListComponent } from './role/role-list.component';
import { RoleComponent } from './role/role.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentComponent } from './student/student.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ChangePasswordComponent } from './user/change-password.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyProfileComponent } from './user/my-profile.component';
import { ForgotPasswordComponent } from './login/forgot-password.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'rolelist',
    component: RoleListComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'subjectlist',
    component: SubjectListComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'studentlist',
    component: StudentListComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'collegelist',
    component: CollegeListComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'courselist',
    component: CourseListComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent

  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },
  {
    path: 'timetablelist',
    component: TimetableListComponent
  },
    {
      path: 'marksheet',
      component: MarksheetComponent
    },
  
  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },
  {
    
      path: 'marksheet/:id',
      component: MarksheetComponent
    },
  
  {
    path:'getmarksheet',
    component: GetMarksheetComponent
  },
  {
    path: 'meritlist',
    component: MeritListComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'facultylist',
    component: FacultyListComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/:in',
    component: LoginComponent
  },
  {
    path:'login/:id',
    component:LoginComponent
    },
  {
    path:'signup',
    component:UserRegistrationComponent

  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent

  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'myprofile',
    component: MyProfileComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'welcome',
    component:WelcomeComponent
  },
  {
    path: '',
    component:WelcomeComponent
  },
  // {
  //   path:'**',
  //   component:PageNotFoundComponent
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
