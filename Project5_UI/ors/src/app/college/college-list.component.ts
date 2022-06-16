import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
    selector:'app-college-list',
    templateUrl:'college-list.component.html',
})
export class CollegeListComponent extends BaseListCtl{
    constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
        super(serviceLocator.endpointService.COLLEGE,serviceLocator,route);
      
      }
      populateForm(form, searchParams) {
        form.collegeName = searchParams.collegeName;
        form.city = searchParams.city;
        form.state = searchParams.state;    
  }
}