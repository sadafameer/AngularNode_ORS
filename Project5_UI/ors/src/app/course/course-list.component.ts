import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";


@Component({
    selector:'app-course-list',
    templateUrl:'course-list.component.html',
})
export class CourseListComponent extends BaseListCtl{
    constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
        super(serviceLocator.endpointService.COURSE,serviceLocator,route);
      
      }
      populateForm(form,searchParams){
       // form.collegeId = searchParams.collegeId;
        form.name = searchParams.name;
        form.courseDescription = searchParams.courseDescription;
        form.courseDuration = searchParams.courseDuration;
        
      }
}