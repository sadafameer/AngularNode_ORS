import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from './endpoint-service.service';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocatorService {
  httpService = null;
  endpointService = null;
  router = null;
  constructor(private hs : HttpServiceService,private ep : EndpointServiceService,private r: Router) {
      this.httpService = hs;
      this.endpointService = ep;
      this.router = r;
   }

   getPathVariable(route: ActivatedRoute, callback) {
    route.params.subscribe(params => {
      callback(params)
    });
  }


  forward(page){
    this.router.navigateByUrl(page);
  }
}
