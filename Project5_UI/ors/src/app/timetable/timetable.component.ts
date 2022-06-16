import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent extends BaseCtl {

  constructor(public serviceLocator:ServiceLocatorService,public route:ActivatedRoute) {
    super(serviceLocator.endpointService.TIMETABLE,serviceLocator,route );
  }

  populateForm(form,data){
    form.id =data.id;
    form.courseId = data.courseId;
    form.subjectId = data.subjectId;
    form.semester = data.semester;
    form.examDate = data.examDate;
    form.examTime = data.examTime;
  }

  cancel(){
    this.forward('/timetablelist')
  }
  
}
