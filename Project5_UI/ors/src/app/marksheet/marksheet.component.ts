import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent extends BaseCtl {

  constructor(public serviceLocator:ServiceLocatorService,public route:ActivatedRoute) {
    super(serviceLocator.endpointService.MARKSHEET,serviceLocator,route );
  }
  cancel(){
    this.forward('/marksheetlist')
  }

  populateForm(form,data){
    form.id= data.id
    form.rollNo = data.rollNo
    form.studentId=data.studentId
    form.physics=data.physics
    form.chemistry=data.chemistry
    form.maths=data.maths
  }

}
