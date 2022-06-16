import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent extends BaseListCtl {

  constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
    super(serviceLocator.endpointService.USER,serviceLocator,route);
  }

  populateForm(form,searchParams){
    form.firstName = searchParams.firstName;
   // form.lastName = searchParams.lastName;
    form.login = searchParams.login;
    //form.status = searchParams.status;
    form.roleId = searchParams.roleId;
  }
  search(){
    this.form.data.pageSize=5;
    super.search();
  }


}