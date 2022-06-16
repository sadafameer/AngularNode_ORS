import { OnInit } from '@angular/core';
import { ServiceLocatorService } from './service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from './endpoint-service.service';


export class BaseCtl implements OnInit {
  sadaf: {};
  new : number
  reset() {
    this.form.error= false,
    this.form.message= null,
    this.sadaf = {},
     this.form.inputerror = {};
     this.form.data = {id:null,pageNo:null,pageSize:null};
     this.display();
  }

  public api = {
    endpoint: null,
    get: null,
    save: null,
    search: null,
    delete: null,
    preload: null,
  }
  

  initApi(ep) {
    this.api.endpoint = ep;
    this.api.get = ep + "/get";
    this.api.save = ep + "/save";
    this.api.search = ep + "/search";
    this.api.delete = ep + "/delete";
    this.api.preload = ep + "/preload";
    //console.log("API", this.api);
  }

  public form = {
    error: false,
    message: null,
    preload: null,
    data: { id: null, pageNo: 0, pageSize: 10 },
    inputerror: {},
    searchParams: {},
    searchMessage: null,
    list: [],
    pageNo: 0,
    pageSize: 0,
    count: 0,

  };

  constructor(public endpoint: EndpointServiceService, public serviceLocator: ServiceLocatorService, public route: ActivatedRoute) {
    var _self = this;

    _self.initApi(endpoint);
    serviceLocator.getPathVariable(route, function (params) {
      _self.form.data.id = params["id"];
      console.log('I GOT ID', _self.form.data.id);
    })
  }

  ngOnInit() {
    this.preload();
    if (this.form.data.id && this.form.data.id > 0) {
      this.display();
    }
    console.log('run')
  }

  preload() {
    var _self = this;
    this.serviceLocator.httpService.get(_self.api.preload, function (res) {
      if (res.success) {
        _self.form.preload = res.result;
      } else {
        _self.form.error = false;
        //_self.form.message = res.result.message;
        //_self.form.message = "An Error Occured please reload";
      }
      //console.log('FORM', _self.form);
    });
  }

  display() {

    var _self = this;
    
    this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {

      if (res.success) {
        _self.populateForm(_self.form.data, res.result);
      } else {
        _self.form.error = true;
        _self.form.message = res.result.message;
      }
      //console.log('FORM', _self.form);
    });
  }

  populateForm(form, data) {
    form.id = data.id;
  }

  submit() {
    var _self = this;

    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
      _self.form.message = null;
      _self.form.inputerror = {};

      if (res.success) {
        _self.form.error = false;
        
        _self.form.message = "Data is saved";
        
        //_self.forward('/user/'+res.result)
      } else {
        _self.form.error = true;
        _self.form.inputerror = res.result.inputerror;
        _self.form.message = res.result.message;
      }
      //console.log('FORM', _self.form);
    });
  }
  
  search() {
    var _self = this;
    //_self.populateForm(_self.form.data,_self.form.searchParams)
    _self.form.searchParams["pageNo"] = _self.form.data.pageNo;
    _self.form.searchParams["pageSize"] = _self.form.data.pageSize;
    //console.log("Search Form", _self.form.searchParams);
    this.serviceLocator.httpService.post(_self.api.search, _self.form.searchParams, function (res) {

      if (res.success) {
        _self.form.list = res.result.list;
        console.log(_self.form.list);
        _self.form.pageNo = res.result.pageNo;
        _self.form.pageSize = res.result.pageSize;
        _self.form.count = res.result.count;
        _self.form.searchParams = res.result.searchParams;

        if (_self.form.count == 0) {
          console.log("gardad------------------------------")
          _self.form.message = "No record found";
          _self.form.error = true;
        }
        //console.log("List Size", _self.form.count,"Page No",_self.form.pageNo,"page Size",_self.form.pageSize,"count",_self.form.count);
      } else {
        _self.form.error = false;
        }
      
      console.log("form ----------------------"+_self.form.message);
    });
  }

  delete(id) {
    var _self = this;
    this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
      if (res.success) {
        _self.form.error = false;
        _self.form.message = "Data is deleted";
        _self.search();
      } else {
        _self.form.error = true;
        _self.form.message = res.result.message;
      }
    });
  }

  forward(page) {
    this.serviceLocator.forward(page);
  }

}
