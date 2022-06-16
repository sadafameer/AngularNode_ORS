import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseCtl } from './base.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from "./role/role-list.component";
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './http-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentComponent } from './student/student.component';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component'
import { StudentListComponent } from './student/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { MeritListComponent } from './marksheet/merit-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './login/user-registration.component';
import { ChangePasswordComponent } from './user/change-password.component';
import { MyProfileComponent } from './user/my-profile.component';
import { ForgotPasswordComponent } from './login/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    RoleListComponent,
    CourseComponent,
    CourseListComponent,
    CollegeComponent,
    CollegeListComponent,
    StudentComponent,
    StudentListComponent,
    NavComponent,
    FootComponent,
    SubjectComponent,
    SubjectListComponent,
    MarksheetComponent,
    MarksheetListComponent,
    GetMarksheetComponent,
    MeritListComponent,
    UserComponent,
    UserListComponent,
    WelcomeComponent,
    DashboardComponent,
    TimetableComponent,
    TimetableListComponent,
    FacultyComponent,
    FacultyListComponent,
    LoginComponent,
    UserRegistrationComponent,
    ChangePasswordComponent,
    MyProfileComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useFactory: myHttpLoader,
         deps: [HttpClient],
       },
     })

  ],
  
  providers: [
    HttpServiceService,
    //DataValidator,
    LoginComponent,
    CookieService,
    {provide: LocationStrategy,
      useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
