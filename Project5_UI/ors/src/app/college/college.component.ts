import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent extends BaseCtl {

  constructor(public serviceLocator:ServiceLocatorService,public route:ActivatedRoute) {
    super(serviceLocator.endpointService.COLLEGE,serviceLocator,route );
  }
  populateForm(form,data){
    form.id = data.id;
    form.name = data.name;
    form.address = data.address;
    form.city = data.city;
    form.state = data.state;
    form.phoneNo = data.phoneNo;
  
  }
  cancel(){
    this.forward('/collegelist')
  }
  
}
