function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<app-nav></app-nav>\n<app-foot></app-foot>\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/college/college-list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/college/college-list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCollegeCollegeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n  <div class=\"content-wrapper\" style=\"background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;\">\r\n    <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'College List'|translate}}</h1>\r\n      </div>\r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"name\" class=\"form-check-label pr-3 \">{{'College Name'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter College Name'|translate}}\" name=\"firstName\"\r\n              [(ngModel)]=\"form.searchParams.name\" id=\"name\">\r\n          </div>\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"city\" class=\"form-check-label pr-3 \">{{'City'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"city\" id=\"city\" placeholder=\"{{'Enter College City'|translate}}\"\r\n              [(ngModel)]=\"form.searchParams.city\">\r\n          </div>\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"state\" class=\"form-check-label pr-3 \">{{'State'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"state\" id=\"state\" placeholder=\"{{'Enter College State'|translate}}\"\r\n                          [(ngModel)]=\"form.searchParams.state\">\r\n          </div>\r\n  \r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n  \r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate}}</th>\r\n                <th>{{'Name'|translate}}</th>\r\n                <th>{{'Address'|translate}}</th>\r\n                <th>{{'City'|translate}}</th>\r\n                <th>{{'State'|translate}}</th>\r\n                <th>{{'Phone No'|translate}}</th>\r\n                <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr *ngFor=\"let college of form.list; let i = index\">\r\n                <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                <td> {{ college.name }} </td>\r\n                <td> {{ college.address }} </td>\r\n                <td> {{ college.city }} </td>\r\n                <td> {{ college.state }} </td>\r\n                <td> {{ college.phoneNo }} </td>\r\n                <td><a (click)=\"forward( '/college/' +  college.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n                  </a> / <a (click)=\"delete(college.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/college/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n    </div>\r\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/college/college.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/college/college.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCollegeCollegeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3\" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add College'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update College'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row\">\n                            <label for=\"name\" class=\"form-check-label\">{{'College Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.name\" name=\"name\" class=\"form-control\"\n                                    placeholder=\"{{'Enter College Name'|translate}}\" id=\"name\" [value]=\"form.data.name\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.name}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"address\" class=\"form-check-label\">{{'Address'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.address\" name=\"address\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Address'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.address}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'City'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.city\" name=\"city\" class=\"form-control\"\n                                    placeholder=\"{{'Enter College City'|translate}}\"id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.city}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"state\" class=\"form-check-label\">{{'State'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.state\" name=\"state\" class=\"form-control\"\n                                    placeholder=\"{{'Enter College State'|translate}}\" id=\"state\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.state}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"phoneNo\" class=\"form-check-label\">{{'Phone No'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.phoneNo\" name=\"phoneNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Phone Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.phoneNo}} </span>\n                        </div>\n\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                        <button (click)=\"reset()\"\n                                        class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course-list.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course/course-list.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCourseCourseListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;width:100%;\r\n  height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'Course List'|translate}}</h1>\r\n      </div>\r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"courseName\" class=\"form-check-label pr-3 \">{{'Course Name'|translate}}: </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Course Name'|translate}}\" name=\"courseName\"\r\n              [(ngModel)]=\"form.searchParams.courseName\" id=\"courseName\">\r\n          </div>\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"courseDescription\" class=\"form-check-label pr-3 \">{{'Course Description'|translate}}: </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Course Description'|translate}}\" name=\"courseDescription\"\r\n              [(ngModel)]=\"form.searchParams.courseDescription\" id=\"fName\">\r\n          </div>\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"courseDuration\" class=\"form-check-label pr-3\">{{'Course Duration'|translate}}:\r\n            </label>\r\n            <span class=\"text-danger ml-auto mb-auto\"> {{form.inputerror.courseDuration}} </span>\r\n            <select [(ngModel)]=\"form.searchParams.courseDuration\" name=\"courseDuration\" class=\"form-control\" id=\"courseDuration\">\r\n              <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Duration'|translate}}</option>\r\n              <option value=\"1 Year\">1 Year</option>\r\n              <option value=\"2 Year\">2 Year</option>\r\n              <option value=\"3 Year\">3 Year</option>\r\n              <option value=\"4 Year\">4 Year</option>\r\n              <option value=\"5 Year\">5 Year</option>\r\n            </select>\r\n          </div>\r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message|translate}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n        {{form.message|translate}}</div>\r\n  \r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate}}</th>\r\n                <th>{{'Course Name'|translate}}</th>\r\n                <th>{{'Course Description'|translate}}</th>\r\n                <th>{{'Course Duration'|translate}}</th>\r\n                <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr *ngFor=\"let course of form.list; let i = index\">\r\n                <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                <td> {{ course.courseName }} </td>\r\n                <td> {{ course.courseDescription }} </td>\r\n                <td> {{ course.courseDuration }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/course/' +  course.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n                  </a> / <a (click)=\"delete(course.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/course/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n    </div>\r\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCourseCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Course'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Course'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row\">\n                            <label for=\"courseName\" class=\"form-check-label\">{{'Course Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.courseName\" name=\"courseName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Course Name'|translate}}\" id=\"courseName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.courseName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"courseDescription\" class=\"form-check-label\">{{'Course Description'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.courseDescription\" name=\"courseDescription\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Course Description'|translate}}\" id=\"courseDescription\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.courseDescription}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"courseDuration\" class=\"form-check-label\">{{'Course Duration'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.courseDuration\" name=\"courseDuration\"\n                                    class=\"form-control\" id=\"courseDuration\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Duration'|translate}}\n                                    </option>\n                                    <option value=\"1 year\">1 Year</option>\n                                    <option value=\"2 year\">2 Year</option>\n                                    <option value=\"3 year\">3 Year</option>\n                                    <option value=\"4 year\">4 Year</option>\n                                    <option value=\"5 year\">5 Year</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.courseDuration}} </span>\n                        </div>\n\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <button (click)=\"reset()\"\n                                    class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                             </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n    \n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid row \" >\n    <div class=\"content-wrapper row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/wel.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\" >\n    <div class=\"col-3\"></div>\n    \n    <div class=\"col-6\">    \n\n        <h1 class=\"text-light text-center font-weight-bold \" style=\"margin-top: 30%;\">{{'Welcome To Online Result System'|translate}}</h1>\n    </div>\n    <div class=\"col-3\"></div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/faculty-list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/faculty-list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyFacultyListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n  <div class=\"d-flex bg-primary text-white paddin \">\r\n    <h1 class=\"text-center container-fluid \">{{'Faculty List'|translate}}</h1>\r\n  </div>\r\n  <div class=\"text-center col-12 row\">\r\n    <div class=\"col-2\"></div>\r\n    <form class=\"form-inline pt-3  \">\r\n      <div class=\"form-group  pr-3\">\r\n        <label for=\"fName\" class=\"form-check-label pr-3 \">{{'First Name'|translate}} : </label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Name'|translate}}\" name=\"firstName\"\r\n          [(ngModel)]=\"form.searchParams.firstName\" id=\"fName\">\r\n      </div>\r\n      <div class=\"form-group pr-3\">\r\n        <label for=\"email\" class=\"form-check-label pr-3 \">{{'Email Id'|translate}} : </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"{{'Enter Email Id'|translate}}\"\r\n          [(ngModel)]=\"form.searchParams.email\">\r\n      </div>\r\n      <div class=\"form-group pr-3\">\r\n        <label for=\"role\" class=\"form-check-label pr-3\">{{'College'|translate}} :</label>&nbsp;\r\n        <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.searchParams.collegeId\" id=\"college\">\r\n          <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select College'|translate}}</option>\r\n          <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.id\">{{opt.name}}</option>\r\n        </select>\r\n      </div>\r\n      <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n      <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n    </form>\r\n  </div>\r\n  <br>\r\n  <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n  \r\n  <br>\r\n  <div class=\"p-1\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-striped table-hover\">\r\n        <thead class=\"thead-light text-uppercase\">\r\n          <tr>\r\n            <th>{{'S.No'|translate}}</th>\r\n            <th>{{'First Name'|translate}}</th>\r\n            <th>{{'Last Name'|translate}}</th>\r\n            <th>{{'Email Id'|translate}}</th>\r\n            <th>{{'Gender'|translate}}</th>\r\n            <th>{{'College'|translate}}</th>\r\n            <th>{{'Course'|translate}}</th>\r\n            <th>{{'Subject'|translate}}</th>\r\n            <th>{{'Phone'|translate}}</th>\r\n            <th>{{'DOB'|translate}}</th>\r\n            <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n          </tr>\r\n        </thead>\r\n  \r\n        <tbody>\r\n          <tr *ngFor=\"let faculty of form.list; let i = index\">\r\n            <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n            <td> {{ faculty.firstName }} </td>\r\n            <td> {{ faculty.lastName }} </td>\r\n            <td> {{ faculty.email }} </td>\r\n            <td> {{ faculty.gender }} </td>\r\n            <td> {{ faculty.collegeName }} </td>\r\n            <td> {{ faculty.courseName }} </td>\r\n            <td> {{ faculty.subjectName }} </td>\r\n            <td> {{ faculty.mobileNo }} </td>\r\n            <td> {{ faculty.dob | date : 'dd-MM-yyyy'}} </td>\r\n            <td><a (click)=\"forward( '/faculty/' +  faculty.id)\" style=\"cursor: pointer;\">\r\n                <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n              </a> / <a (click)=\"delete(faculty.id)\" style=\"cursor: pointer;\">\r\n                <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n  \r\n    </div>\r\n  </div>\r\n  <div class=\" col-12 form-inline mb-0  \">\r\n    <div class=\"col-4 text-left \">\r\n      <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n      <ng-template #sus>\r\n        <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n      </ng-template>\r\n      <ng-template #fail>\r\n        <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"col-4 text-center \">\r\n      <button class=\"btn-primary btn \" (click)=\"forward('/faculty/')\">{{'Add'|translate}}</button>\r\n    </div>\r\n    <div class=\"col-4 text-right \">\r\n      <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n      <ng-template #susN>\r\n        <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n      </ng-template>\r\n      <ng-template #failN>\r\n        <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  </div>\r\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/faculty.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/faculty.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacultyFacultyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 950px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Faculty'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Faculty'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n\n                        <div class=\"form-group row\">\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\n                                    [value]=\"form.data.firstName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"email\" class=\"form-check-label\">{{'Email'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n                                <ng-template #lUpdate>\n                                    <input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\" class=\"form-control\"\n                                        placeholder=\"{{'Enter Email'|translate}}\" id=\"email\" disabled>\n                                </ng-template>\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\"\n                                        class=\"form-control\" placeholder=\"{{'Enter Email'|translate}}\" id=\"email\">\n                                </ng-template>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.email}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"collegeId\" class=\"form-check-label \">{{'College Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.collegeList!=null\" name=\"collegeId\"\n                                    [(ngModel)]=\"form.data.collegeId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select College Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.id\">{{opt.name}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"collegeId\"> {{form.inputerror.collegeId}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.courseList!=null\" name=\"courseId\"\n                                    [(ngModel)]=\"form.data.courseId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"courseId\"> {{form.inputerror.courseId}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"subjectId\" class=\"form-check-label \">{{'Subject Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.subjectList!=null\" name=\"subjectId\"\n                                    [(ngModel)]=\"form.data.subjectId\" id=\"subjectId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Subject Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.subjectList\" [value]=\"opt.id\">{{opt.subjectName}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"subjectId\"> {{form.inputerror.subjectId}}\n                            </span>\n                        </div>\n\n\n\n                        <div class=\"form-group row\">\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-mars grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n                                    <option [value]=\"null\" [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\n                                    <option [value]=\"Male\">Male</option>\n                                    <option [value]=\"Female\">Female</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                        <button (click)=\"reset()\"\n                                        class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n    \n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/foot/foot.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/foot/foot.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFootFootComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\" style=\" position: fixed;\nleft: 0;\nbottom: 0;\nwidth: 100%;\">\n    <div class=\"container-fluid d-flex bg-primary justify-content-center \">\n        <h5 class=\"text-center text-white float-center \"> &copy; Copyright Rays 2021</h5>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\r\n    <div class=\"row ml-3 \" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4 pt-5 mt-5\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1>{{'Forgot Password'|translate}}</h1>\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <form>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"login\" class=\"form-check-label\">{{'Email ID'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            \r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Registered Email ID'|translate}}\" id=\"login\">\r\n                            </div>\r\n                            <span class=\"text-danger ml-auto mb-auto\"> {{form.inputerror.login}} </span>\r\n                        </div>\r\n                        \r\n\r\n\r\n                        <div class=\"form-inline\">\r\n                            <div class=\"col-4\"></div>\r\n                            <div class=\"text-center\">\r\n                                <button (click)=\"forgot()\" class=\"btn btn-success\">{{'GO'|translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"row container-fluid\">\n    <div class=\" row ml-3 text-center \" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4  \" style=\"margin-top: 7%;\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h1 class=\"text-center\" >{{'Login'|translate}}</h1>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form class=\"form-signin\">\n                        <div class=\"form-group row\">\n                            <label for=\"login\" class=\"form-check-label\">{{'Login ID'|translate}}<span\n                                    class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <input id=\"login\" type=\"text\"  [(ngModel)]=\"form.data.login\" name=\"login\"\n                                    placeholder=\"{{'Enter Login ID'|translate}}\" class=\"form-control\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\" id=\"login\"> {{form.inputerror.login}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}<span\n                                    class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                                <input id=\"password\" type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                    placeholder=\"{{'Enter Password'|translate}}\" class=\"form-control\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\" id=\"password\"> {{form.inputerror.password}}\n                            </span>\n                        </div>\n                        <button (click)=\"signIn()\" class=\"btn btn-success mr-2\">{{'Sign In'|translate}}</button>\n                        <button (click)=\"signUp()\" class=\"btn btn-primary \">{{'Sign Up'|translate}}</button>\n                        <br>\n                        <a routerLink=\"/forgotpassword\">{{'Forgot my password'|translate}}</a>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user-registration.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/user-registration.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginUserRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\r\n    <div class=\" row ml-3\" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;background-size: cover;width:100%;height: 1100px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4 pt-5\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1>{{'User Registration'|translate}}</h1>\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <form>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span></label>\r\n\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\r\n                                    [value]=\"form.data.firstName\">\r\n                            </div>\r\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"login\" class=\"form-check-label\">{{'Login'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                                </div>\r\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\r\n                                <ng-template #lUpdate>\r\n                                    <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\r\n                                        placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\r\n                                </ng-template>\r\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\r\n                                        class=\"form-control\" placeholder=\"{{'Enter Email ID'|translate}}\" id=\"login\">\r\n                                </ng-template>\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"confirmPassword\" class=\"form-check-label\">{{'Confirm Password'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"password\" [(ngModel)]=\"form.data.confirmPassword\" name=\"confirmPassword\"\r\n                                    class=\"form-control\" placeholder=\"{{'Confirm Password'|translate}}\" id=\"confirmPassword\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.confirmPassword}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-double grey-text\"></i> </div>\r\n                                </div>\r\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\r\n                                    <option [value]=\"default\" [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\r\n                                    <option [value]=\"Male\">Male</option>\r\n                                    <option [value]=\"Female\">Female</option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row \">\r\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\r\n                                    class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-birthday-cake grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\r\n                        </div>\r\n\r\n                        <div class=\"form-inline\">\r\n                            <div class=\"col-4\"></div>\r\n                            <div class=\"text-center\">\r\n                                <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\r\n                                <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"></div>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/get-marksheet.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/get-marksheet.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarksheetGetMarksheetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid\">\r\n    <div class=\"\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;bottom: 0%;\">\r\n        <div class=\"d-flex bg-primary text-white \">\r\n            <h1 class=\"text-center container-fluid \">{{'Get Marksheet'|translate}}</h1>\r\n        </div>\r\n        <br>\r\n\r\n        <form class=\"form-inline\">\r\n            <div class=\"col-4\"></div>\r\n            <div class=\"form-group  pr-3\">\r\n                <label for=\"rollNo\" class=\"form-check-label pr-3 \">{{'Roll No'|translate}}: </label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Roll Number'|translate}}\" name=\"rollNo\"\r\n                    [(ngModel)]=\"form.rollNo\" id=\"rollNo\">\r\n            </div>\r\n            <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n            <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n        <div class=\"\" *ngIf=\"this.flag\">\r\n\r\n            <div class=\"p-1\">\r\n                <div class=\"table-responsive \">\r\n                    <table class=\"table table-bordered\">\r\n                        <thead class=\"thread-light \">\r\n                            <tr>\r\n                                <tr>{{'Student Name'|translate}}    : {{form.data.student.firstName}} {{form.data.student.lastName}}</tr>\r\n                                <tr>{{'College Name'|translate}}    : {{form.data.college.name}}</tr>\r\n                            \r\n                                <tr>{{'College Address'|translate}}         : {{form.data.college.address}}, {{form.data.college.city}} ,{{form.data.college.state}}</tr>\r\n                                <tr>{{'Phone No'|translate}}        : {{form.data.college.phoneNo}}\r\n                            </tr>\r\n                        </thead>\r\n                        <thead class=\"thread-light text-uppercase \">\r\n                            <tr>\r\n                                <td>{{'Subject'|translate}}</td>\r\n                                <td>{{'Maximum Marks'|translate}}</td>\r\n                                <td>{{'Passing Marks'|translate}}</td>\r\n                                <td>{{'Marks Obtained'|translate}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Physics'|translate}}</td>\r\n                                <td>100</td>\r\n                                <td>35</td>\r\n                                <td>{{form.data.marksheet.physics}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Chemistry'|translate}}</td>\r\n                                <td>100</td>\r\n                                <td>35</td>\r\n                                <td>{{form.data.marksheet.chemistry}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Maths'|translate}}</td>\r\n                                <td>100</td>\r\n                                <td>35</td>\r\n                                <td>{{form.data.marksheet.maths}}</td>\r\n                            </tr>\r\n                            \r\n                            <tr>\r\n                                <td>{{'Total'|translate}}:</td>\r\n                                \r\n                                <td> {{\r\n                                    (form.data.marksheet.physics+form.data.marksheet.maths+form.data.marksheet.chemistry)\r\n                                    }}\r\n                                    /300</td>\r\n                                <td>{{'Percentage'|translate}}:</td>\r\n                                <td> {{\r\n                                    (form.data.marksheet.physics+form.data.marksheet.maths+form.data.marksheet.chemistry)/3\r\n                                    | number:'1.0-2' }}\r\n                                </td>\r\n                            </tr>\r\n                        </thead>\r\n\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/marksheet-list.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/marksheet-list.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarksheetMarksheetListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;bottom: 0%;\">\r\n  <div class=\"d-flex bg-primary text-white paddin \">\r\n    <h1 class=\"text-center container-fluid \">{{'Marksheet List'|translate}}</h1>\r\n  </div>\r\n  <div class=\"text-center row\">\r\n    <div class=\"col-3\"></div>\r\n    <form class=\"form-inline pt-3  \">\r\n      <div class=\"form-group  pr-3\">\r\n        <label for=\"name\" class=\"form-check-label pr-3 \">{{'Student Name'|translate}} : </label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Student Name'|translate}}\" name=\"name\"\r\n          [(ngModel)]=\"form.searchParams.name\" id=\"name\">\r\n      </div>\r\n      <div class=\"form-group pr-3\">\r\n        <label for=\"rollNo\" class=\"form-check-label pr-3 \">{{'Roll No'|translate}} : </label>\r\n        <input type=\"text\" class=\"form-control\" name=\"rollNo\" id=\"rollNo\" placeholder=\"{{'Enter Roll Number'|translate}}\"\r\n          [(ngModel)]=\"form.searchParams.rollNo\">\r\n      </div>\r\n\r\n\r\n      <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n      <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n    </form>\r\n  </div>\r\n  <br>\r\n  <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n  <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n    {{form.message}}</div>\r\n\r\n  <br>\r\n  <div class=\"p-1\">\r\n    <div class=\"table-responsive-sm\">\r\n      <table class=\"table table-bordered table-striped table-hover\">\r\n        <thead class=\"thead-light text-uppercase\">\r\n          <tr>\r\n            <th>{{'S.No'|translate}}</th>\r\n            <th>{{'Roll No'|translate}}</th>\r\n            <th>{{'Student Name'|translate}}</th>\r\n            <th>{{'Physics'|translate}}</th>\r\n            <th>{{'Maths'|translate}}</th>\r\n            <th>{{'Chemistry'|translate}}</th>\r\n            <th>{{'Total'|translate}}</th>\r\n            <th>{{'Percentage'|translate}}</th>\r\n            <th>{{'Result'|translate}}</th>\r\n            <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let marksheet of form.list; let i = index\">\r\n            <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n            <td> {{ marksheet.rollNo }} </td>\r\n            <td> {{ marksheet.name }} </td>\r\n            <td> {{ marksheet.physics }} </td>\r\n            <td> {{ marksheet.maths }} </td>\r\n            <td> {{ marksheet.chemistry }} </td>\r\n            <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry) }} /300</td>\r\n            <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry)/3 | number:'1.0-2' }} </td>\r\n            <td>\r\n              <div class=\"\" *ngIf=\"result(marksheet.physics,marksheet.maths,marksheet.chemistry);then pass else fail \">\r\n              </div>\r\n              <ng-template #pass>\r\n                <div class=\"text-success font-weight-bold\"> Pass </div>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <div class=\"text-danger font-weight-bold \"> Fail </div>\r\n              </ng-template>\r\n            </td>\r\n            <td><a (click)=\"forward( '/marksheet/' +  marksheet.id)\" style=\"cursor: pointer;\">\r\n                <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n              </a> / <a (click)=\"delete(marksheet.id)\" style=\"cursor: pointer;\">\r\n                <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <form class=\"form-inline \">\r\n    <div class=\"col-4 text-left \">\r\n      <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n      <ng-template #sus>\r\n        <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n      </ng-template>\r\n      <ng-template #fail>\r\n        <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\" col-4 text-center \">\r\n      <button class=\"btn-primary btn \" (click)=\"forward('/marksheet/')\">{{'Add'|translate}}</button>\r\n    </div>\r\n    <div class=\" col-4 text-right \">\r\n      <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n      <ng-template #susN>\r\n        <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n      </ng-template>\r\n      <ng-template #failN>\r\n        <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n      </ng-template>\r\n    </div>\r\n  </form>\r\n  \r\n  <br><br>\r\n  </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/marksheet.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/marksheet.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarksheetMarksheetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<body class=\" container-fluid row\">\n    <div class=\" row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Marksheet'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Marksheet'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row\">\n                            <label for=\"rollNo\" class=\"form-check-label\">{{'Roll No'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.rollNo\" name=\"rollNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter RollNo[00XX00]'|translate}}\" id=\"rollNo\" [value]=\"form.data.rollNo\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.rollNo}}\n                            </span>\n                        </div>\n                        <div class=\"form-group row \">\n                            <label for=\"studentId\" class=\"form-check-label \">{{'Student Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" name=\"studentId\" [(ngModel)]=\"form.data.studentId\"\n                                    id=\"studentId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Student Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.studentList\" [value]=\"opt.id\">{{opt.firstName}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"studentId\"> {{form.inputerror.studentId}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"physics\" class=\"form-check-label\">{{'Physics'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-sticky-note grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.physics\" name=\"physics\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Physics Marks'|translate}}\" id=\"physics\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.physics}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"maths\" class=\"form-check-label\">{{'Maths'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-sticky-note grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.maths\" name=\"maths\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Maths Marks'|translate}}\" id=\"maths\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.maths}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"chemistry\" class=\"form-check-label\">{{'Chemistry'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-sticky-note grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.chemistry\" name=\"chemistry\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Chemistry Marks'|translate}}\" id=\"chemistry\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.chemistry}} </span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                        <button (click)=\"reset()\"\n                                        class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/merit-list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/merit-list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarksheetMeritListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n    <div class=\"\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white \">\r\n        <h1 class=\"text-center container-fluid \">{{'Marksheet Merit List'|translate}}</h1>\r\n      </div>\r\n      \r\n    <br>\r\n      <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\"\r\n        class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n    \r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate}}</th>\r\n                <th>{{'Roll No'|translate}}</th>\r\n                <th>{{'Student Name'|translate}}</th>\r\n                <th>{{'Physics'|translate}}</th>\r\n                <th>{{'Maths'|translate}}</th>\r\n                <th>{{'Chemistry'|translate}}</th>\r\n                <th>{{'Total'|translate}}</th>\r\n                <th>{{'Percentage'|translate}}</th>\r\n                <th>{{'Result'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n    \r\n            <tbody>\r\n              <tr *ngFor=\"let marksheet of form.list; let i = index\">\r\n                <td> {{1+i}} </td>\r\n                <td> {{ marksheet.rollNo }} </td>\r\n                <td> {{ marksheet.name }} </td>\r\n                <td> {{ marksheet.physics }} </td>\r\n                <td> {{ marksheet.maths }} </td>\r\n                <td> {{ marksheet.chemistry }} </td>\r\n                <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry) }} /300</td>\r\n                <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry)/3 | number:'1.0-2' }} </td>\r\n                <td> <div class=\"\" *ngIf=\"result(marksheet.physics,marksheet.maths,marksheet.chemistry);then pass else fail \" ></div>\r\n                  <ng-template #pass ><div class=\"text-success font-weight-bold\"> Pass </div></ng-template>\r\n                  <ng-template #fail ><div class=\"text-danger font-weight-bold \"> Fail </div></ng-template>\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      \r\n      <br><br>\r\n      </div>\r\n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--LOG IN START-->\n<div *ngIf=\"checkLogin()\">\n  <nav class=\"navbar navbar-expand-lg bg-secondary navbar-secondary \">\n\n    <a class=\"navbar-brand\" href=\"/ORSui\"><img class=\"image-responsive\" src='./assets/logo.png' height=\"30px\"></a>\n\n    <button class=\"navbar-toggler navbar-light \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n<!--CHECK-->\n \n\n<!--CHECK-->\n    <div class=\"collapse navbar-collapse bg-secondary \" id=\"navbarNav\">\n      <select #locale (change)='changeLocale(locale.value)' class=\"bg-secondary text-light\">\n        <option class=\"text-light\" value=\"en\">English</option>\n        <option class=\"text-light\" value=\"hi\">{{'Hindi' | translate }}</option>\n      </select>\n      <ul class=\"nav navbar-nav \" style=\"list-style-type: none;\">\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary  dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'User'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/user\" class=\"dropdown-item\"><i class=\"fa fa-user-plus\"></i> {{'Add User'|translate}}</a>\n            <a routerLink=\"/userlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'User List'|translate}}</a>\n          </div>\n\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Role'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/role\" class=\"dropdown-item\"><i class=\"fa fa-user-circle\"></i>{{'Add Role'|translate}}</a>\n            <a routerLink=\"/rolelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Role List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'College'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/college\" class=\"dropdown-item\"><i class=\"fa fa-university\"></i> {{'Add\n              College'|translate}}</a>\n            <a routerLink=\"/collegelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'College\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Student'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/student\" class=\"dropdown-item\"><i class=\"fa fa-users\"></i> {{'Add Student'|translate}}</a>\n            <a routerLink=\"/studentlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Student\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Course'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/course\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add Course'|translate}}</a>\n            <a routerLink=\"/courselist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Course\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\" nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Subject'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/subject\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add Subject'|translate}}</a>\n            <a routerLink=\"/subjectlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Subject\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Marksheet'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/marksheet\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add\n              Marksheet'|translate}}</a>\n            <a routerLink=\"/marksheetlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Marksheet\n              List'|translate}}</a>\n            <a routerLink=\"/meritlist\" class=\"dropdown-item\"><i class=\"fa fa-list-ol\"></i> {{'Merit\n              List'|translate}}</a>\n            <a routerLink=\"/getmarksheet\" class=\"dropdown-item\"><i class=\"fa fa-id-card-o\"></i> {{'Get\n              Marksheet'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Faculty'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/faculty\" class=\"dropdown-item\"><i class=\"fa fa-user-circle\"></i> {{'Add\n              Faculty'|translate}}</a>\n            <a routerLink=\"/facultylist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Faculty\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'TimeTable'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/timetable\" class=\"dropdown-item\"><i class=\"fa fa-clock-o\"></i> {{'Add\n              TimeTable'|translate}}</a>\n            <a routerLink=\"/timetablelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'TimeTable\n              List'|translate}}</a>\n          </div>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav ml-auto\" style=\"list-style-type: none;\">\n        <li class=\"nav-item dropdown ml-auto \" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle ml-auto\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-user-circle\" style=\"font-size: 19px;\"> </i> {{firstName}} ({{roleName}})</button>\n          <div class=\"dropdown-menu dropdown-menu-right  ml-auto\">\n            <a class=\"dropdown-item \" routerLink=\"/myprofile\"><i class=\"fa fa-user\"></i> {{'My Profile'|translate}}</a>\n            <a class=\"dropdown-item \" routerLink=\"/changepassword\"><i class=\"fa fa-key\"></i> {{'Change Password'|translate}}</a>\n            <a class=\"dropdown-item \" (click)=\"logout();\"><i class=\"fa fa-sign-out\"></i> {{'Sign Out'|translate}}</a>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n  </nav>\n</div>\n<!--LOG IN END-->\n\n<!--LOG OUT START-->\n\n<div *ngIf=\"!checkLogin();\">\n  <nav class=\"navbar navbar-expand-lg bg-secondary navbar-secondary \">\n\n    <a class=\"navbar-brand\" href=\"/ORSui\"><img class=\"image-responsive\" src='./assets/logo.png' height=\"30px\"></a>\n\n    <button class=\"navbar-toggler navbar-light \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse bg-secondary \" id=\"navbarNav\">\n      <select #locale (change)='changeLocale(locale.value)' class=\"bg-secondary text-light\">\n        <option class=\"text-light\" value=\"en\">English</option>\n        <option class=\"text-light\" value=\"hi\">{{'Hindi'|translate}}</option>\n      </select>\n      <ul class=\"nav navbar-nav ml-auto\" style=\"list-style-type: none;\">\n        <li class=\"nav-item dropdown ml-auto\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"><i\n              class=\"fa fa-user-circle\" style=\"font-size: 19px;\"> </i> {{'Hi, Guest'|translate}}</button>\n          <div class=\"dropdown-menu dropdown-menu-right ml-auto\">\n\n            <a class=\"dropdown-item\" routerLink=\"/login\"><i class=\"fa fa-sign-in\"></i> &nbsp;{{'Log in' |\n              translate}}</a>\n            <a class=\"dropdown-item\" routerLink=\"/signup\"><i class=\"fa fa-users\"></i> &nbsp;{{'User Registration' |\n              translate}}</a>\n          </div>\n        <li>\n      </ul>\n    </div>\n  </nav>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/role/role-list.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/role/role-list.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoleRoleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;bottom: 0%;\">\r\n    <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'Role List'|translate}}</h1>\r\n    </div>\r\n    <div class=\"text-center row\">\r\n        <div class=\"col-3\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n            <div class=\"form-group  pr-3\">\r\n                <label for=\"name\" class=\"form-check-label pr-3 \">{{'Name'|translate}} : </label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Role Name'|translate}}\" name=\"name\"\r\n                    [(ngModel)]=\"form.searchParams.name\" id=\"name\">\r\n            </div>\r\n            <div class=\"form-group pr-3\">\r\n                <label for=\"description\" class=\"form-check-label pr-3 \">{{'Description'|translate}} : </label>\r\n                <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\"\r\n                    placeholder=\"{{'Enter Role Description'|translate}}\" [(ngModel)]=\"form.searchParams.description\">\r\n            </div>\r\n            <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n            <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n    <div class=\"col-6 \" *ngIf=\"!form.error && form.message != null && form.message.length()>0\"\r\n        class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n\r\n    <br>\r\n\r\n\r\n    <br>\r\n    <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n                <thead class=\"thead-light text-uppercase\">\r\n                    <tr>\r\n                        <th>{{'S.No'|translate}}</th>\r\n                        <th>{{'Name'|translate}}</th>\r\n                        <th>{{'Description'|translate}}</th>\r\n                        <th>{{'Edit'|translate}}/{{'Delete'|translate}}</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let role of form.list; let i = index\">\r\n                        <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                        <td> {{ role.name }} </td>\r\n                        <td> {{ role.description }} </td>\r\n                        <td>\r\n                            <div *ngIf=\"role.id==1;then read else write\"></div>\r\n                            <ng-template #read><i class=\"fa fa-edit\" style=\"font-size:20px;color:grey\"></i> / <i\r\n                                    class=\"fa fa-trash-o\" style=\"font-size:20px;color:grey\"></i></ng-template>\r\n                            <ng-template #write><a (click)=\"forward( '/role/' +  role.id)\" style=\"cursor: pointer;\">\r\n                                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n                                </a> / <a (click)=\"delete(role.id)\" style=\"cursor: pointer;\">\r\n                                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                                </a></ng-template>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\" col-12 form-inline\">\r\n        <div class=\"col-4 text-left \">\r\n            <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n            <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'Previous'|translate}}</button>\r\n            </ng-template>\r\n            <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'Previous'|translate}}</button>\r\n            </ng-template>\r\n        </div>\r\n\r\n        <div class=\"text-center col-4\">\r\n            <button class=\"btn-primary btn  \" (click)=\"forward('/role/')\">{{'Add'|translate}}</button>\r\n        </div>\r\n        <div class=\"col-3 text-right \">\r\n            <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n            <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'Next'|translate}}</button>\r\n            </ng-template>\r\n            <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'Next'|translate}}</button>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n    \r\n    <br><br>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/role/role.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/role/role.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoleRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid row \">\n    <div class=\"row ml-3\" style=\" background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5 \">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Role'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Role'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"form.error && form.message!=null \" class=\"alert alert-danger\">\n                        {{form.message}}</div>\n                    <div class=\"col-sm-4\" *ngIf=\"!form.error && form.message!=null\" class=\"alert alert-success\">\n                        {{form.message}}</div>\n                    <form>\n\n                        <div class=\"form-group row\">\n                            <label for=\"rName\" class=\"form-check-label\">{{'Role Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.name\" name=\"name\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Role Name'|translate}}\" id=\"rName\" [value]=\"form.data.name\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.name}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"description\" class=\"form-check-label\">{{'Role Description'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.description\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Role Description'|translate}}\" id=\"description\"\n                                    [value]=\"form.data.description\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.description}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"justify-content-center text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <button (click)=\"reset()\"\n                                    class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                                         \n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'Student List'|translate}}</h1>\r\n      </div>\r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"fName\" class=\"form-check-label pr-3 \">{{'First Name'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" name=\"firstName\"\r\n              [(ngModel)]=\"form.searchParams.firstName\" id=\"fName\">\r\n          </div>\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"email\" class=\"form-check-label pr-3 \">{{'Email Id'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Email ID'|translate}}\" name=\"email\"\r\n              [(ngModel)]=\"form.searchParams.email\" id=\"email\">\r\n          </div>\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"collegeId\" class=\"form-check-label pr-3\">{{'College'|translate}} :</label>&nbsp;\r\n            <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.searchParams.collegeId\" id=\"role\">\r\n              <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select College'|translate}}</option>\r\n              <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.id\">{{opt.name}}</option>\r\n            </select>\r\n          </div>\r\n          \r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n  \r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate}}</th>\r\n                <th>{{'First Name'|translate}}</th>\r\n                <th>{{'Last Name'|translate}}</th>\r\n                <th>{{'Email'|translate}}</th>\r\n                <th>{{'College'|translate}}</th>\r\n                <th>{{'Phone'|translate}}</th>\r\n                <th>{{'DOB'|translate}}</th>\r\n                <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr *ngFor=\"let student of form.list; let i = index\">\r\n                <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                <td> {{ student.firstName }} </td>\r\n                <td> {{ student.lastName }} </td>\r\n                <td> {{ student.email }} </td>\r\n                <td> {{ student.collegeName }} </td>\r\n                <td> {{ student.mobileNo }} </td>\r\n                <td> {{ student.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/student/' +  student.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n                  </a> / <a (click)=\"delete(student.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/student/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <br><br>\r\n    </div>\r\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\n    <div class=\" row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 750px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Student'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Student'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row \">\n                            <label for=\"collegeId\" class=\"form-check-label \">{{'College'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" name=\"collegeId\"\n                                    [(ngModel)]=\"form.data.collegeId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select College'|translate}}\n                                    </option>\n                                    \n                                    <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.id\">{{opt.name}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"role\"> {{form.inputerror.collegeId}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                                <label for=\"email\" class=\"form-check-label\">{{'Email'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n\n                                <ng-template #lUpdate>\n                                    <input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\" class=\"form-control\"\n                                        placeholder=\"Enter Email\" id=\"login\" disabled>\n                                </ng-template>\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\"\n                                        class=\"form-control\" placeholder=\"{{'Enter Email'|translate}}\" id=\"email\">\n                                </ng-template>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.email}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                        <button (click)=\"reset()\"\n                                        class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubjectSubjectListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'Subject List'|translate}}</h1>\r\n      </div>\r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"subjectName\" class=\"form-check-label pr-3 \">{{'Subject Name'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Subject Name'|translate}}\" name=\"subjectName\"\r\n              [(ngModel)]=\"form.searchParams.subjectName\" id=\"fName\">\r\n          </div>\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"courseId\" class=\"form-check-label pr-3\">{{'Course'|translate}} :</label>&nbsp;\r\n            <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.searchParams.courseId\" id=\"lname\">\r\n              <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}</option>\r\n              <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}</option>\r\n            </select>\r\n          </div>\r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n  \r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate}}</th>\r\n                <th>{{'Name'|translate}}</th>\r\n                <th>{{'Description'|translate}}</th>\r\n                <th>{{'Course Name'|translate}}</th>\r\n                <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr *ngFor=\"let subject of form.list; let i = index\">\r\n                <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                <td> {{ subject.subjectName }} </td>\r\n                <td> {{ subject.subjectDescription }} </td>\r\n                <td> {{ subject.courseName }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/subject/' +  subject.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n                  </a> / <a (click)=\"delete(subject.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/subject/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    <br><br>\r\n    </div>\r\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubjectSubjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row \">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"text-center mb-4\">\n                    <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                    <ng-template #hAdd>\n                        <h1>{{'Add Subject'|translate}}</h1>\n                    </ng-template>\n                    <ng-template #hUpdate>\n                        <h1>{{'Update Subject'|translate}}</h1>\n                    </ng-template>\n                </div>\n                <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                    {{form.message}}\n                </div>\n                <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                    {{form.message}}\n                </div>\n                    <form>\n                        <div class=\"form-group row \">\n                            <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\n                                 class=\"text-danger\">*</span> </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i>.</div>\n                                </div>\n                                <select class=\"form-control\" name=\"courseId\"\n                                    [(ngModel)]=\"form.data.courseId\" id=\"courseId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"role\"> {{form.inputerror.courseId}}\n                            </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"subjectName\" class=\"form-check-label\">{{'Subject Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.subjectName\" name=\"subjectName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Subject Name'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.subjectName}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"subjectDescription\" class=\"form-check-label\">{{'Description'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.subjectDescription\" name=\"subjectDescription\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Subject Description'|translate}}\"\n                                    id=\"subjectDescription\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.subjectDescription}} </span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                        <button (click)=\"reset()\"\n                                        class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-3\"></div>\n    </div>\n    <br>\n    <br>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable-list.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable-list.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTimetableTimetableListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid\">\r\n    <div class=\"\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;bottom: 0%;\">\r\n        <div class=\"d-flex bg-primary text-white paddin \">\r\n            <h1 class=\"text-center container-fluid \">{{'TimeTable List'|translate}}</h1>\r\n        </div>\r\n        <div class=\"text-center row\">\r\n            <form class=\"form-inline pt-3 text-center pl-5\">\r\n                <div class=\"form-group  pr-3\">\r\n                    <label for=\"subjectName\" class=\"form-check-label pr-3 \">{{'Subject Name'|translate}} : </label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Subject Name'|translate}}\" name=\"subjectName\"\r\n                        [(ngModel)]=\"form.searchParams.subjectName\" id=\"subjectName\">\r\n                </div>\r\n\r\n                <div class=\"form-group pr-3\">\r\n                    <label for=\"courseId\" class=\"form-check-label pr-3\">{{'Course Name'|translate}}:</label>&nbsp;\r\n                    <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.searchParams.courseId\" id=\"courseId\">\r\n                        <option [value]=0 [disabled]=\"true\" selected disabled>{{'Course Name'|translate}}</option>\r\n                  \r\n                        <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}</option>\r\n                    </select>\r\n                </div>\r\n                \r\n                <div class=\"form-group pr-3\">\r\n                    <label for=\"semester\" class=\"form-check-label pr-3\">{{'Semester'|translate}}:\r\n                    </label>\r\n                    <select [(ngModel)]=\"form.data.semester\" name=\"semester\" class=\"form-control\" id=\"semester\">\r\n                        <option [value]=\"null\" [disabled]=\"true\" selected disabled>{{'Select Semester'|translate}}</option>\r\n                        <option [value]=\"I\">I</option>\r\n                        <option [value]=\"II\">II</option>\r\n                        <option [value]=\"III\">III</option>*\r\n                        <option [value]=\"IV\">IV</option>\r\n                        <option [value]=\"V\">V</option>\r\n                        <option [value]=\"VI\">VI</option>\r\n                        <option [value]=\"VII\">VII</option>\r\n                        <option [value]=\"VIII\">VIII</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group pr-3\">\r\n                    <label for=\"datepicker\" class=\"form-check-label pr-3\">{{'Exam Date'|translate}}:\r\n                    </label>\r\n                    <input type=\"date\" id=\"datepicker\" name=\"examDate\" [(ngModel)]=\"form.data.examDate\"\r\n                        class=\"form-control\" placeholder=\"{{'Enter Date of Exam'|translate}}\">\r\n                </div>\r\n\r\n                <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n                <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n            </form>\r\n        </div>\r\n        <br>\r\n        <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n        <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n            {{form.message}}</div>\r\n\r\n        <br>\r\n        <div class=\"p-1\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"thead-light text-uppercase\">\r\n                        <tr>\r\n                            <th>{{'S.No'|translate}}</th>\r\n                            <th>{{'Course'|translate}}</th>\r\n                            <th>{{'Subject'|translate}}</th>\r\n                            <th>{{'Semester'|translate}}</th>\r\n                            <th>{{'Date'|translate}}</th>\r\n                            <th>{{'Time'|translate}}</th>\r\n                            <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let timetable of form.list; let i = index\">\r\n                            <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                            <td> {{ timetable.courseName }} </td>\r\n                            <td> {{ timetable.subjectName }} </td>\r\n                            <td> {{ timetable.semester }} </td>\r\n                            <td> {{ timetable.examDate | date : 'dd-MM-yyyy'}} </td>\r\n                            <td> {{ timetable.examTime }} </td>\r\n                            <td><a (click)=\"forward( '/timetable/' +  timetable.id)\" style=\"cursor: pointer;\">\r\n                                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n                                </a> / <a (click)=\"delete(timetable.id)\" style=\"cursor: pointer;\">\r\n                                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\" col-lg-12 form-inline mb-0  \">\r\n                    <div class=\"col-4 text-left \">\r\n                        <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n                        <ng-template #sus>\r\n                            <button (click)=\"previous()\" class=\"btn btn-success\">{{'Previous'|translate}}</button>\r\n                        </ng-template>\r\n                        <ng-template #fail>\r\n                            <button (click)=\"previous()\" disabled\r\n                                class=\"btn btn-light \">{{'Previous'|translate}}</button>\r\n                        </ng-template>\r\n                    </div>\r\n                    <div class=\"col-4 text-center \">\r\n                        <button class=\"btn-primary btn \" (click)=\"forward('/timetable/')\">{{'Add'|translate}}</button>\r\n                    </div>\r\n                    <div class=\"col-4 text-right \">\r\n                        <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n                        <ng-template #susN>\r\n                            <button (click)=\"next()\" class=\"btn btn-success\">{{'Next'|translate}}</button>\r\n                        </ng-template>\r\n                        <ng-template #failN>\r\n                            <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'Next'|translate}}</button>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    <br><br>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTimetableTimetableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 \" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\"> \n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add TimeTable'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update TimeTable'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n\n                        <div class=\"form-group row \">\n                            <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.courseList!=null\" name=\"courseId\"\n                                    [(ngModel)]=\"form.data.courseId\" id=\"courseId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"courseId\"> {{form.inputerror.courseId}}\n                            </span>\n                        </div>\n\n\n                        <div class=\"form-group row \">\n                            <label for=\"subjectId\" class=\"form-check-label \">{{'Subject Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.subjectList!=null\" name=\"subjectId\"\n                                    [(ngModel)]=\"form.data.subjectId\" id=\"subjectId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Subject\n                                        Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.subjectList\" [value]=\"opt.id\">{{opt.subjectName}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"subjectId\"> {{form.inputerror.subjectId}}\n                            </span>\n                        </div>\n\n\n\n                        <div class=\"form-group row\">\n                            <label for=\"semester\" class=\"form-check-label\">{{'Semester'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.semester\" name=\"semester\" class=\"form-control\"\n                                    id=\"semester\">\n                                    <option [value]=\"null\" [disabled]=\"true\" selected disabled>{{'Select Semester'|translate}}</option>\n                                    <option [value]=\"I\">I</option>\n                                    <option [value]=\"II\">II</option>\n                                    <option [value]=\"III\">III</option>\n                                    <option [value]=\"IV\">IV</option>\n                                    <option [value]=\"V\">V</option>\n                                    <option [value]=\"VI\">VI</option>\n                                    <option [value]=\"VII\">VII</option>\n                                    <option [value]=\"VIII\">VIII</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.semester}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Exam Date'|translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"examDate\" [(ngModel)]=\"form.data.examDate\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Exam'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.examDate}}</span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"examTime\" class=\"form-check-label\">{{'Exam Time'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.examTime\" name=\"examTime\" class=\"form-control\"\n                                    id=\"examTime\">\n                                    <option [value]=\"null\" [disabled]=\"true\" selected disabled>{{'Select Exam Time'|translate}}</option>\n                                    <option value=\"10:00 am to 01:00 pm\">10:00 am to 01:00 pm</option>\n                                    <option value=\"01:00 pm to 04:00 pm\">01:00 pm to 04:00 pm</option>\n                                    <option value=\"04:00 pm to 07:00 pm\">04:00 pm to 07:00 pm</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.examTime}} </span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-sm-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                        <button (click)=\"reset()\"\n                                        class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                               \n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\" container-fluid row\">\r\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 700px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4 pt-5\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1>{{'Change Password'|translate}}</h1>\r\n\r\n                        <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                            {{form.message}}\r\n                        </div>\r\n                        <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                            {{form.message}}\r\n                        </div>\r\n                        <form>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"password\" class=\"form-check-label\">{{'Old Password'|translate}}:\r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                    </div>\r\n                                    <input type=\"password\" [(ngModel)]=\"form.data.oldPassword\" name=\"oldPassword\"\r\n                                        class=\"form-control\" placeholder=\"{{'Enter Old Password'|translate}}\" id=\"oldPassword\">\r\n                                </div>\r\n\r\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.oldPassword}} </span>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"password\" class=\"form-check-label\">{{'New Password'|translate}}:\r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                    </div>\r\n                                    <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\r\n                                        class=\"form-control\" placeholder=\"{{'Enter New Password'|translate}}\" id=\"password\">\r\n                                </div>\r\n\r\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"confirmPassword\" class=\"form-check-label\">{{'Confirm Password'|translate}}:\r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                    </div>\r\n                                    <input type=\"password\" [(ngModel)]=\"form.data.confirmPassword\"\r\n                                        name=\"confirmPassword\" class=\"form-control\" placeholder=\"{{'Confirm Password'|translate}}\"\r\n                                        id=\"confirmPassword\">\r\n                                </div>\r\n\r\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.confirmPassword}} </span>\r\n                            </div>\r\n                            <div class=\"form-inline\">\r\n                                <div class=\"col-4\"></div>\r\n                                <div class=\"text-center\">\r\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Save'|translate}}</button>&nbsp;\r\n                                    <button class=\"btn btn-primary  \" (click)=\"this.forward('myprofile')\">{{'My\r\n                                        Profile'|translate}}</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid row\">\r\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 900px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1 class=\"text-dark\">{{'My Profile'|translate}}</h1>\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <form>\r\n                        <div class=\"form-group row \">\r\n                            <div *ngIf=\"form.data.picName\">\r\n                                <img src=\"http://localhost:8080/User/getPic/{{form.data.id}}\" height=\"55px\"\r\n                                    width=\"80px\">\r\n                            </div>\r\n                            <div *ngIf=\"!form.data.picName\">\r\n                                <img src=\"../../assets/default.jpg\" height=\"55px\" width=\"80px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"picture\" class=\"form-check-label\">{{'Profile Picture'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"file\" (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\"\r\n                                    name=\"pic\" class=\"form-control\" placeholder=\"{{'Select Picture'|translate}}\" id=\"pic\">\r\n                            </div>\r\n                            \r\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.picture}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span></label>\r\n\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\r\n                                    [value]=\"form.data.firstName\">\r\n                            </div>\r\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"login\" class=\"form-check-label\">{{'Login ID'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-double grey-text\"></i> </div>\r\n                                </div>\r\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\r\n                                    <option [value]=\"null\" [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\r\n                                    <option [value]=\"Male\">Male</option>\r\n                                    <option [value]=\"Female\">Female</option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row \">\r\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\r\n                                    class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"form-inline\">\r\n                            <div class=\"col-3\"></div>\r\n                            <div class=\"text-center\">\r\n                                <button (click)=\"submit()\"\r\n                                    class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\r\n                                <button (click)=\"this.forward('changepassword')\" class=\"btn btn-secondary\">{{'Change\r\n                                    Password'|translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"></div>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid\">\r\n    <div class=\"\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 900px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'User List'|translate}}</h1>\r\n      </div>\r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3 mr-3 \">\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"fName\" class=\"form-check-label pr-3 \">{{'First Name'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" name=\"firstName\"\r\n              [(ngModel)]=\"form.searchParams.firstName\" id=\"fName\">\r\n          </div>\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"lName\" class=\"form-check-label pr-3 \">{{'Login Id'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"login\" id=\"lName\" placeholder=\"{{'Enter Login Id'|translate}}\"\r\n              [(ngModel)]=\"form.searchParams.login\">\r\n          </div>\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"role\" class=\"form-check-label pr-3\">{{'Role'|translate}} :</label>&nbsp;\r\n            <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" id=\"role\">\r\n              <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select User Role'|translate}}</option>\r\n              <option *ngFor=\"let opt of form.preload.roleList\" [value]=\"opt.id\">{{opt.name}}</option>\r\n            </select>\r\n          </div>\r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-6 \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n  \r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate }}</th>\r\n                <th>{{'Image'|translate}}</th>\r\n                <th>{{'First Name' |translate}}</th>\r\n                <th>{{'Last Name' |translate }}</th>\r\n                <th>{{'Login ID' | translate  }}</th>\r\n                <th>{{'Gender'| translate}}</th>\r\n                <th>{{'Role'|translate}}</th>\r\n                <th>{{'Phone'|translate}}</th>\r\n                <th>{{'DOB'|translate}}</th>\r\n                <th>{{'Edit'|translate}} /{{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr *ngFor=\"let user of form.list; let i = index\">\r\n                <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                <td>\r\n                  <div *ngIf=\"user.picName\" >\r\n                  <img src=\"http://localhost:8080/User/getPic/{{user.id}}\" height=\"55px\" width=\"80px\">\r\n                </div>\r\n                <div *ngIf=\"!user.picName\" >\r\n                  <img src=\"./assets/default.jpg\" height=\"55px\" width=\"80px\">\r\n                </div> \r\n                </td>\r\n                <td> {{ user.firstName}} </td>\r\n                <td> {{ user.lastName }} </td>\r\n                <td> {{ user.login }} </td>\r\n                <td> {{ user.gender }} </td>\r\n                <td> {{ user.roleName }} </td>\r\n                <td> {{ user.mobileNo }} </td>\r\n                <td> {{ user.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>\r\n                  <div *ngIf=\"user.roleId==1;then read else write\"></div>\r\n                  <ng-template #read><i class=\"fa fa-edit\" style=\"font-size:20px;color:grey\"></i> / <i\r\n                      class=\"fa fa-trash-o\" style=\"font-size:20px;color:grey\"></i></ng-template>\r\n                  <ng-template #write><a (click)=\"forward( '/user/' +  user.id)\" style=\"cursor: pointer;\">\r\n                      <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\r\n                    </a> / <a (click)=\"delete(user.id)\" style=\"cursor: pointer;\">\r\n                      <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                    </a></ng-template>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"form-inline \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/user/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n    </div>\r\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid row \" >\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 950px;bottom: 0%;\">\n\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4 pt-5 \">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"text-center mb-4\">\n                    <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                    <ng-template #hAdd>\n                        <h1 class=\"text-dark\">{{'Add User'|translate}}</h1>\n                    </ng-template>\n                    <ng-template #hUpdate>\n                        <h1 class=\"text-dark\">{{'Update User'|translate}}</h1>\n                    </ng-template>\n                </div>\n                <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                    {{form.message}}\n                </div>\n                <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                    {{form.message}}\n                </div>\n                <form>\n                    <div class=\"form-group row \">\n                        <label for=\"role\" class=\"form-check-label \">{{'Role'|translate}} :<span\n                                class=\"text-danger\">*</span>\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                            </div>\n                            <select class=\"form-control\" *ngIf=\"form.preload.roleList!=null\" name=\"roleId\"\n                                [(ngModel)]=\"form.data.roleId\" id=\"role\">\n                                <option [value]=default [disabled]=\"true\" selected disabled>{{'Select User Role'|translate}}\n                                </option>\n                                <option *ngFor=\"let opt of form.preload.roleList\" [value]=\"opt.id\">{{opt.name}}\n                                </option>\n                            </select>\n                        </div>\n\n                        <span class=\"text-danger mr-auto mb-auto \" id=\"role\"> {{form.inputerror.roleId}} </span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\n                            <span class=\"text-danger\">*</span></label>\n\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                            </div>\n                            <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                                class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\n                                [value]=\"form.data.firstName\">\n                        </div>\n                        <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\n                        </span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\n                            <span class=\"text-danger\">*</span>\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n                            </div>\n                            <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\n                                placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\n                        </div>\n\n                        <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\n                            <span class=\"text-danger\">*</span>\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                            </div>\n                            <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\n                        </div>\n\n                        <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"login\" class=\"form-check-label\">{{'Login ID'|translate}}:\n                            <span class=\"text-danger\">*</span>\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                            </div>\n                            <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n                            <ng-template #lUpdate>\n                                <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Email'|translate}}\" id=\"log\">\n                            </ng-template>\n                            <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Email'|translate}}\" id=\"login\">\n                            </ng-template>\n                        </div>\n\n                        <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\n                            <span class=\"text-danger\">*</span>\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                            </div>\n                            <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\n                        </div>\n\n                        <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\n                            <span class=\"text-danger\">*</span>\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-venus-double grey-text\"></i> </div>\n                            </div>\n                            <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n                                <option [value]=\"null\" [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\n                                <option [value]=\"Male\">Male</option>\n                                <option [value]=\"Female\">Female</option>\n                            </select>\n                        </div>\n\n                        <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\n                    </div>\n\n                    <div class=\"form-group row \">\n                        <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\n                                class=\"text-danger\">*</span>\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                            </div>\n                            <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                        </div>\n\n                        <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"picture\" class=\"form-check-label\">{{'Upload Image'|translate}}:\n                        </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-file-picture-o grey-text\"></i> </div>\n                            </div>\n                            <input type=\"file\" (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\"\n                                name=\"pic\" class=\"form-control\" placeholder=\"{{'Upload Image'|translate}}\" id=\"pic\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-inline\">\n                        <div class=\"col-4\"></div>\n                        <div class=\"text-center\">\n                            <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                            <ng-template #add>\n                                <button (click)=\"submit()\"\n                                    class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <button (click)=\"reset()\"\n                               class=\"btn btn-secondary\">{{'Reset'|translate}}</button>&nbsp;\n                                    \n                            </ng-template>\n                            <ng-template #update>\n                                <button (click)=\"submit()\"\n                                    class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                            </ng-template>\n                        </div>\n                    </div>\n\n\n\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-4\"></div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"container-fluid row \">\n    <div class=\"content-wrapper row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/wel.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\">\n\n        <div class=\"col-sm-12\">\n            \n            <h1 class=\"text-light text-center font-weight-bold \" style=\"margin-top: 17%;\">{{'Welcome To Online Result System'|translate}}</h1>\n        </div>\n\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _college_college_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./college/college-list.component */
    "./src/app/college/college-list.component.ts");
    /* harmony import */


    var _college_college_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./college/college.component */
    "./src/app/college/college.component.ts");
    /* harmony import */


    var _course_course_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./course/course-list.component */
    "./src/app/course/course-list.component.ts");
    /* harmony import */


    var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./course/course.component */
    "./src/app/course/course.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./faculty/faculty-list.component */
    "./src/app/faculty/faculty-list.component.ts");
    /* harmony import */


    var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./faculty/faculty.component */
    "./src/app/faculty/faculty.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _login_user_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/user-registration.component */
    "./src/app/login/user-registration.component.ts");
    /* harmony import */


    var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./marksheet/marksheet.component */
    "./src/app/marksheet/marksheet.component.ts");
    /* harmony import */


    var _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./marksheet/get-marksheet.component */
    "./src/app/marksheet/get-marksheet.component.ts");
    /* harmony import */


    var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./marksheet/marksheet-list.component */
    "./src/app/marksheet/marksheet-list.component.ts");
    /* harmony import */


    var _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./marksheet/merit-list.component */
    "./src/app/marksheet/merit-list.component.ts");
    /* harmony import */


    var _role_role_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./role/role-list.component */
    "./src/app/role/role-list.component.ts");
    /* harmony import */


    var _role_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./role/role.component */
    "./src/app/role/role.component.ts");
    /* harmony import */


    var _student_student_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./student/student-list.component */
    "./src/app/student/student-list.component.ts");
    /* harmony import */


    var _student_student_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./student/student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./subject/subject-list.component */
    "./src/app/subject/subject-list.component.ts");
    /* harmony import */


    var _subject_subject_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./subject/subject.component */
    "./src/app/subject/subject.component.ts");
    /* harmony import */


    var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./timetable/timetable-list.component */
    "./src/app/timetable/timetable-list.component.ts");
    /* harmony import */


    var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./timetable/timetable.component */
    "./src/app/timetable/timetable.component.ts");
    /* harmony import */


    var _user_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./user/change-password.component */
    "./src/app/user/change-password.component.ts");
    /* harmony import */


    var _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./user/user-list.component */
    "./src/app/user/user-list.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _user_my_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./user/my-profile.component */
    "./src/app/user/my-profile.component.ts");
    /* harmony import */


    var _login_forgot_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./login/forgot-password.component */
    "./src/app/login/forgot-password.component.ts");

    var routes = [{
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"]
    }, {
      path: 'user/:id',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"]
    }, {
      path: 'userlist',
      component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"]
    }, {
      path: 'role',
      component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    }, {
      path: 'role/:id',
      component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    }, {
      path: 'rolelist',
      component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_16__["RoleListComponent"]
    }, {
      path: 'subject',
      component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_21__["SubjectComponent"]
    }, {
      path: 'subject/:id',
      component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_21__["SubjectComponent"]
    }, {
      path: 'subjectlist',
      component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_20__["SubjectListComponent"]
    }, {
      path: 'student',
      component: _student_student_component__WEBPACK_IMPORTED_MODULE_19__["StudentComponent"]
    }, {
      path: 'student/:id',
      component: _student_student_component__WEBPACK_IMPORTED_MODULE_19__["StudentComponent"]
    }, {
      path: 'studentlist',
      component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_18__["StudentListComponent"]
    }, {
      path: 'college',
      component: _college_college_component__WEBPACK_IMPORTED_MODULE_4__["CollegeComponent"]
    }, {
      path: 'college/:id',
      component: _college_college_component__WEBPACK_IMPORTED_MODULE_4__["CollegeComponent"]
    }, {
      path: 'collegelist',
      component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_3__["CollegeListComponent"]
    }, {
      path: 'course',
      component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"]
    }, {
      path: 'course/:id',
      component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"]
    }, {
      path: 'courselist',
      component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_5__["CourseListComponent"]
    }, {
      path: 'timetable',
      component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_23__["TimetableComponent"]
    }, {
      path: 'timetable/:id',
      component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_23__["TimetableComponent"]
    }, {
      path: 'timetablelist',
      component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_22__["TimetableListComponent"]
    }, {
      path: 'marksheet',
      component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetComponent"]
    }, {
      path: 'marksheetlist',
      component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_14__["MarksheetListComponent"]
    }, {
      path: 'marksheet/:id',
      component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetComponent"]
    }, {
      path: 'getmarksheet',
      component: _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_13__["GetMarksheetComponent"]
    }, {
      path: 'meritlist',
      component: _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_15__["MeritListComponent"]
    }, {
      path: 'faculty',
      component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_9__["FacultyComponent"]
    }, {
      path: 'facultylist',
      component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_8__["FacultyListComponent"]
    }, {
      path: 'faculty/:id',
      component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_9__["FacultyComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: 'login/:in',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: 'login/:id',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: 'signup',
      component: _login_user_registration_component__WEBPACK_IMPORTED_MODULE_11__["UserRegistrationComponent"]
    }, {
      path: 'changepassword',
      component: _user_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"]
    }, {
      path: 'forgotpassword',
      component: _login_forgot_password_component__WEBPACK_IMPORTED_MODULE_29__["ForgotPasswordComponent"]
    }, {
      path: 'myprofile',
      component: _user_my_profile_component__WEBPACK_IMPORTED_MODULE_28__["MyProfileComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    }, {
      path: 'welcome',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_27__["WelcomeComponent"]
    }, {
      path: '',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_27__["WelcomeComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Project5_UI';
    });

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: myHttpLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "myHttpLoader", function () {
      return myHttpLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _role_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./role/role.component */
    "./src/app/role/role.component.ts");
    /* harmony import */


    var _role_role_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./role/role-list.component */
    "./src/app/role/role-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _http_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./http-service.service */
    "./src/app/http-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _course_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./course/course.component */
    "./src/app/course/course.component.ts");
    /* harmony import */


    var _course_course_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./course/course-list.component */
    "./src/app/course/course-list.component.ts");
    /* harmony import */


    var _college_college_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./college/college.component */
    "./src/app/college/college.component.ts");
    /* harmony import */


    var _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./college/college-list.component */
    "./src/app/college/college-list.component.ts");
    /* harmony import */


    var _student_student_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./student/student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _foot_foot_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./foot/foot.component */
    "./src/app/foot/foot.component.ts");
    /* harmony import */


    var _student_student_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./student/student-list.component */
    "./src/app/student/student-list.component.ts");
    /* harmony import */


    var _subject_subject_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./subject/subject.component */
    "./src/app/subject/subject.component.ts");
    /* harmony import */


    var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./subject/subject-list.component */
    "./src/app/subject/subject-list.component.ts");
    /* harmony import */


    var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./marksheet/marksheet.component */
    "./src/app/marksheet/marksheet.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_user_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./user/user-list.component */
    "./src/app/user/user-list.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./marksheet/marksheet-list.component */
    "./src/app/marksheet/marksheet-list.component.ts");
    /* harmony import */


    var _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./marksheet/get-marksheet.component */
    "./src/app/marksheet/get-marksheet.component.ts");
    /* harmony import */


    var _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./marksheet/merit-list.component */
    "./src/app/marksheet/merit-list.component.ts");
    /* harmony import */


    var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./timetable/timetable.component */
    "./src/app/timetable/timetable.component.ts");
    /* harmony import */


    var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./timetable/timetable-list.component */
    "./src/app/timetable/timetable-list.component.ts");
    /* harmony import */


    var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./faculty/faculty.component */
    "./src/app/faculty/faculty.component.ts");
    /* harmony import */


    var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./faculty/faculty-list.component */
    "./src/app/faculty/faculty-list.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _login_user_registration_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./login/user-registration.component */
    "./src/app/login/user-registration.component.ts");
    /* harmony import */


    var _user_change_password_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./user/change-password.component */
    "./src/app/user/change-password.component.ts");
    /* harmony import */


    var _user_my_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./user/my-profile.component */
    "./src/app/user/my-profile.component.ts");
    /* harmony import */


    var _login_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./login/forgot-password.component */
    "./src/app/login/forgot-password.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function myHttpLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _role_role_component__WEBPACK_IMPORTED_MODULE_5__["RoleComponent"], _role_role_list_component__WEBPACK_IMPORTED_MODULE_6__["RoleListComponent"], _course_course_component__WEBPACK_IMPORTED_MODULE_10__["CourseComponent"], _course_course_list_component__WEBPACK_IMPORTED_MODULE_11__["CourseListComponent"], _college_college_component__WEBPACK_IMPORTED_MODULE_12__["CollegeComponent"], _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__["CollegeListComponent"], _student_student_component__WEBPACK_IMPORTED_MODULE_14__["StudentComponent"], _student_student_list_component__WEBPACK_IMPORTED_MODULE_19__["StudentListComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"], _foot_foot_component__WEBPACK_IMPORTED_MODULE_18__["FootComponent"], _subject_subject_component__WEBPACK_IMPORTED_MODULE_20__["SubjectComponent"], _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_21__["SubjectListComponent"], _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_22__["MarksheetComponent"], _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_27__["MarksheetListComponent"], _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_28__["GetMarksheetComponent"], _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_29__["MeritListComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_23__["UserComponent"], _user_user_list_component__WEBPACK_IMPORTED_MODULE_24__["UserListComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__["WelcomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"], _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"], _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_31__["TimetableListComponent"], _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__["FacultyComponent"], _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__["FacultyListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"], _login_user_registration_component__WEBPACK_IMPORTED_MODULE_35__["UserRegistrationComponent"], _user_change_password_component__WEBPACK_IMPORTED_MODULE_36__["ChangePasswordComponent"], _user_my_profile_component__WEBPACK_IMPORTED_MODULE_37__["MyProfileComponent"], _login_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__["ForgotPasswordComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__["PageNotFoundComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
          useFactory: myHttpLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
        }
      })],
      providers: [_http_service_service__WEBPACK_IMPORTED_MODULE_8__["HttpServiceService"], //DataValidator,
      _login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_40__["CookieService"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_41__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_41__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/base-list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/base-list.component.ts ***!
    \****************************************/

  /*! exports provided: BaseListCtl */

  /***/
  function srcAppBaseListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseListCtl", function () {
      return BaseListCtl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./base.component */
    "./src/app/base.component.ts");

    var BaseListCtl = /*#__PURE__*/function (_base_component__WEBP) {
      _inherits(BaseListCtl, _base_component__WEBP);

      var _super = _createSuper(BaseListCtl);

      //flag: boolean;
      function BaseListCtl(endpoint, locator, route) {
        var _this;

        _classCallCheck(this, BaseListCtl);

        _this = _super.call(this, endpoint, locator, route);
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        return _this;
      }

      _createClass(BaseListCtl, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.preload();
          this.form.data.pageNo = 1;
          this.form.data.pageSize = 10;
          this.display();
        }
      }, {
        key: "display",
        value: function display() {
          this.form.error = false;
          this.form.message = null;
          this.search();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.form.error = false;
          this.form.message = null;
          this.form.data.pageNo = 1;
          this.search();
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          _get(_getPrototypeOf(BaseListCtl.prototype), "delete", this).call(this, id);
        }
      }, {
        key: "next",
        value: function next() {
          this.form.error = false;
          this.form.message = null;
          this.form.data.pageNo++;
          console.log(this.form.data.pageNo + '----pageNo');
          this.display();
        }
      }, {
        key: "previous",
        value: function previous() {
          this.form.error = false;
          this.form.message = null;

          if (this.form.data.pageNo > 0) {
            this.form.data.pageNo--;
            this.display();
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          //this.flag = false;
          this.form.searchParams = {};
          this.form.error = false;
          this.form.message = null;
          this.submit();
        }
      }, {
        key: "deleteAll",
        value: function deleteAll(ids) {
          for (var i = 0; i < ids.length; i++) {
            this["delete"](ids[i]);
          }
        }
      }, {
        key: "selectAll",
        value: function selectAll() {}
      }]);

      return BaseListCtl;
    }(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseCtl"]);
    /***/

  },

  /***/
  "./src/app/base.component.ts":
  /*!***********************************!*\
    !*** ./src/app/base.component.ts ***!
    \***********************************/

  /*! exports provided: BaseCtl */

  /***/
  function srcAppBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseCtl", function () {
      return BaseCtl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BaseCtl = /*#__PURE__*/function () {
      function BaseCtl(endpoint, serviceLocator, route) {
        _classCallCheck(this, BaseCtl);

        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
          endpoint: null,
          get: null,
          save: null,
          search: null,
          "delete": null,
          preload: null
        };
        this.form = {
          error: false,
          message: null,
          preload: null,
          data: {
            id: null,
            pageNo: 0,
            pageSize: 10
          },
          inputerror: {},
          searchParams: {},
          searchMessage: null,
          list: [],
          pageNo: 0,
          pageSize: 0,
          count: 0
        };

        var _self = this;

        _self.initApi(endpoint);

        serviceLocator.getPathVariable(route, function (params) {
          _self.form.data.id = params["id"];
          console.log('I GOT ID', _self.form.data.id);
        });
      }

      _createClass(BaseCtl, [{
        key: "reset",
        value: function reset() {
          this.form.error = false, this.form.message = null, this.sadaf = {}, this.form.inputerror = {};
          this.form.data = {
            id: null,
            pageNo: null,
            pageSize: null
          };
          this.display();
        }
      }, {
        key: "initApi",
        value: function initApi(ep) {
          this.api.endpoint = ep;
          this.api.get = ep + "/get";
          this.api.save = ep + "/save";
          this.api.search = ep + "/search";
          this.api["delete"] = ep + "/delete";
          this.api.preload = ep + "/preload"; //console.log("API", this.api);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.preload();

          if (this.form.data.id && this.form.data.id > 0) {
            this.display();
          }

          console.log('run');
        }
      }, {
        key: "preload",
        value: function preload() {
          var _self = this;

          this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            if (res.success) {
              _self.form.preload = res.result;
            } else {
              _self.form.error = false; //_self.form.message = res.result.message;
              //_self.form.message = "An Error Occured please reload";
            } //console.log('FORM', _self.form);

          });
        }
      }, {
        key: "display",
        value: function display() {
          var _self = this;

          this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            if (res.success) {
              _self.populateForm(_self.form.data, res.result);
            } else {
              _self.form.error = true;
              _self.form.message = res.result.message;
            } //console.log('FORM', _self.form);

          });
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _self = this;

          this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = null;
            _self.form.inputerror = {};

            if (res.success) {
              _self.form.error = false;
              _self.form.message = "Data is saved"; //_self.forward('/user/'+res.result)
            } else {
              _self.form.error = true;
              _self.form.inputerror = res.result.inputerror;
              _self.form.message = res.result.message;
            } //console.log('FORM', _self.form);

          });
        }
      }, {
        key: "search",
        value: function search() {
          var _self = this; //_self.populateForm(_self.form.data,_self.form.searchParams)


          _self.form.searchParams["pageNo"] = _self.form.data.pageNo;
          _self.form.searchParams["pageSize"] = _self.form.data.pageSize; //console.log("Search Form", _self.form.searchParams);

          this.serviceLocator.httpService.post(_self.api.search, _self.form.searchParams, function (res) {
            if (res.success) {
              _self.form.list = res.result.list;
              console.log(_self.form.list);
              _self.form.pageNo = res.result.pageNo;
              _self.form.pageSize = res.result.pageSize;
              _self.form.count = res.result.count;
              _self.form.searchParams = res.result.searchParams;

              if (_self.form.count == 0) {
                console.log("gardad------------------------------");
                _self.form.message = "No record found";
                _self.form.error = true;
              } //console.log("List Size", _self.form.count,"Page No",_self.form.pageNo,"page Size",_self.form.pageSize,"count",_self.form.count);

            } else {
              _self.form.error = false;
            }

            console.log("form ----------------------" + _self.form.message);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _self = this;

          this.serviceLocator.httpService.get(_self.api["delete"] + "/" + id, function (res) {
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
      }, {
        key: "forward",
        value: function forward(page) {
          this.serviceLocator.forward(page);
        }
      }]);

      return BaseCtl;
    }();
    /***/

  },

  /***/
  "./src/app/college/college-list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/college/college-list.component.ts ***!
    \***************************************************/

  /*! exports provided: CollegeListComponent */

  /***/
  function srcAppCollegeCollegeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function () {
      return CollegeListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var CollegeListComponent = /*#__PURE__*/function (_base_list_component_) {
      _inherits(CollegeListComponent, _base_list_component_);

      var _super2 = _createSuper(CollegeListComponent);

      function CollegeListComponent(serviceLocator, route) {
        var _this2;

        _classCallCheck(this, CollegeListComponent);

        _this2 = _super2.call(this, serviceLocator.endpointService.COLLEGE, serviceLocator, route);
        _this2.serviceLocator = serviceLocator;
        _this2.route = route;
        return _this2;
      }

      _createClass(CollegeListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.collegeName = searchParams.collegeName;
          form.city = searchParams.city;
          form.state = searchParams.state;
        }
      }]);

      return CollegeListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    CollegeListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-college-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./college-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/college/college-list.component.html"))["default"]
    })], CollegeListComponent);
    /***/
  },

  /***/
  "./src/app/college/college.component.css":
  /*!***********************************************!*\
    !*** ./src/app/college/college.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCollegeCollegeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UvY29sbGVnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/college/college.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/college/college.component.ts ***!
    \**********************************************/

  /*! exports provided: CollegeComponent */

  /***/
  function srcAppCollegeCollegeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollegeComponent", function () {
      return CollegeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var CollegeComponent = /*#__PURE__*/function (_base_component__WEBP2) {
      _inherits(CollegeComponent, _base_component__WEBP2);

      var _super3 = _createSuper(CollegeComponent);

      function CollegeComponent(serviceLocator, route) {
        var _this3;

        _classCallCheck(this, CollegeComponent);

        _this3 = _super3.call(this, serviceLocator.endpointService.COLLEGE, serviceLocator, route);
        _this3.serviceLocator = serviceLocator;
        _this3.route = route;
        return _this3;
      }

      _createClass(CollegeComponent, [{
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.name = data.name;
          form.address = data.address;
          form.city = data.city;
          form.state = data.state;
          form.phoneNo = data.phoneNo;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.forward('/collegelist');
        }
      }]);

      return CollegeComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    CollegeComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-college',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./college.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/college/college.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./college.component.css */
      "./src/app/college/college.component.css"))["default"]]
    })], CollegeComponent);
    /***/
  },

  /***/
  "./src/app/course/course-list.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/course/course-list.component.ts ***!
    \*************************************************/

  /*! exports provided: CourseListComponent */

  /***/
  function srcAppCourseCourseListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseListComponent", function () {
      return CourseListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var CourseListComponent = /*#__PURE__*/function (_base_list_component_2) {
      _inherits(CourseListComponent, _base_list_component_2);

      var _super4 = _createSuper(CourseListComponent);

      function CourseListComponent(serviceLocator, route) {
        var _this4;

        _classCallCheck(this, CourseListComponent);

        _this4 = _super4.call(this, serviceLocator.endpointService.COURSE, serviceLocator, route);
        _this4.serviceLocator = serviceLocator;
        _this4.route = route;
        return _this4;
      }

      _createClass(CourseListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          // form.collegeId = searchParams.collegeId;
          form.name = searchParams.name;
          form.courseDescription = searchParams.courseDescription;
          form.courseDuration = searchParams.courseDuration;
        }
      }]);

      return CourseListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    CourseListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course-list.component.html"))["default"]
    })], CourseListComponent);
    /***/
  },

  /***/
  "./src/app/course/course.component.css":
  /*!*********************************************!*\
    !*** ./src/app/course/course.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCourseCourseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/course/course.component.ts":
  /*!********************************************!*\
    !*** ./src/app/course/course.component.ts ***!
    \********************************************/

  /*! exports provided: CourseComponent */

  /***/
  function srcAppCourseCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
      return CourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var CourseComponent = /*#__PURE__*/function (_base_component__WEBP3) {
      _inherits(CourseComponent, _base_component__WEBP3);

      var _super5 = _createSuper(CourseComponent);

      function CourseComponent(serviceLocator, route) {
        var _this5;

        _classCallCheck(this, CourseComponent);

        _this5 = _super5.call(this, serviceLocator.endpointService.COURSE, serviceLocator, route);
        _this5.serviceLocator = serviceLocator;
        _this5.route = route;
        return _this5;
      }

      _createClass(CourseComponent, [{
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.courseName = data.courseName;
          form.courseDescription = data.courseDescription;
          form.courseDuration = data.courseDuration;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.forward('/courselist');
        }
      }]);

      return CourseComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    CourseComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course.component.css */
      "./src/app/course/course.component.css"))["default"]]
    })], CourseComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/endpoint-service.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/endpoint-service.service.ts ***!
    \*********************************************/

  /*! exports provided: EndpointServiceService */

  /***/
  function srcAppEndpointServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function () {
      return EndpointServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EndpointServiceService = /*#__PURE__*/_createClass(function EndpointServiceService() {
      _classCallCheck(this, EndpointServiceService);

      this.SERVER_URL = "http://localhost:8080";
      this.AUTH = this.SERVER_URL + "/Auth";
      this.MESSAGE = this.SERVER_URL + "/Message";
      this.USER = this.SERVER_URL + "/User";
      this.ROLE = this.SERVER_URL + "/Role";
      this.COLLEGE = this.SERVER_URL + "/College";
      this.MARKSHEET = this.SERVER_URL + "/Marksheet";
      this.STUDENT = this.SERVER_URL + "/Student";
      this.COURSE = this.SERVER_URL + "/Course";
      this.SUBJECT = this.SERVER_URL + "/Subject";
      this.TIMETABLE = this.SERVER_URL + "/Timetable";
      this.FACULTY = this.SERVER_URL + "/Faculty";
    });

    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EndpointServiceService);
    /***/
  },

  /***/
  "./src/app/faculty/faculty-list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/faculty/faculty-list.component.ts ***!
    \***************************************************/

  /*! exports provided: FacultyListComponent */

  /***/
  function srcAppFacultyFacultyListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function () {
      return FacultyListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var FacultyListComponent = /*#__PURE__*/function (_base_list_component_3) {
      _inherits(FacultyListComponent, _base_list_component_3);

      var _super6 = _createSuper(FacultyListComponent);

      function FacultyListComponent(serviceLocator, route) {
        var _this6;

        _classCallCheck(this, FacultyListComponent);

        _this6 = _super6.call(this, serviceLocator.endpointService.FACULTY, serviceLocator, route);
        _this6.serviceLocator = serviceLocator;
        _this6.route = route;
        return _this6;
      }

      _createClass(FacultyListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.firstName = searchParams.firstName;
          form.email = searchParams.email;
          form.collegeId = searchParams.collegeId;
        }
      }]);

      return FacultyListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    FacultyListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faculty-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/faculty-list.component.html"))["default"]
    })], FacultyListComponent);
    /***/
  },

  /***/
  "./src/app/faculty/faculty.component.css":
  /*!***********************************************!*\
    !*** ./src/app/faculty/faculty.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacultyFacultyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/faculty/faculty.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/faculty/faculty.component.ts ***!
    \**********************************************/

  /*! exports provided: FacultyComponent */

  /***/
  function srcAppFacultyFacultyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacultyComponent", function () {
      return FacultyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var FacultyComponent = /*#__PURE__*/function (_base_component__WEBP4) {
      _inherits(FacultyComponent, _base_component__WEBP4);

      var _super7 = _createSuper(FacultyComponent);

      function FacultyComponent(serviceLocator, route) {
        var _this7;

        _classCallCheck(this, FacultyComponent);

        _this7 = _super7.call(this, serviceLocator.endpointService.FACULTY, serviceLocator, route);
        _this7.serviceLocator = serviceLocator;
        _this7.route = route;
        return _this7;
      }

      _createClass(FacultyComponent, [{
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.firstName = data.firstName;
          form.lastName = data.lastName;
          form.email = data.email;
          form.mobileNo = data.mobileNo;
          form.address = data.address;
          form.gender = data.gender;
          form.collegeId = data.collegeId;
          form.courseId = data.courseId;
          form.subjectId = data.subjectId;
          form.dob = data.dob;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.forward('/facultylist');
        }
      }]);

      return FacultyComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    FacultyComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faculty',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faculty.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/faculty.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faculty.component.css */
      "./src/app/faculty/faculty.component.css"))["default"]]
    })], FacultyComponent);
    /***/
  },

  /***/
  "./src/app/foot/foot.component.css":
  /*!*****************************************!*\
    !*** ./src/app/foot/foot.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFootFootComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3QvZm9vdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/foot/foot.component.ts":
  /*!****************************************!*\
    !*** ./src/app/foot/foot.component.ts ***!
    \****************************************/

  /*! exports provided: FootComponent */

  /***/
  function srcAppFootFootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FootComponent", function () {
      return FootComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FootComponent = /*#__PURE__*/_createClass(function FootComponent() {
      _classCallCheck(this, FootComponent);
    });

    FootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-foot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./foot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/foot/foot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./foot.component.css */
      "./src/app/foot/foot.component.css"))["default"]]
    })], FootComponent);
    /***/
  },

  /***/
  "./src/app/http-service.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/http-service.service.ts ***!
    \*****************************************/

  /*! exports provided: HttpServiceService */

  /***/
  function srcAppHttpServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpServiceService", function () {
      return HttpServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HttpServiceService = /*#__PURE__*/function () {
      function HttpServiceService(router, httpClient, cookie) {
        _classCallCheck(this, HttpServiceService);

        this.router = router;
        this.httpClient = httpClient;
        this.cookie = cookie;
      }

      _createClass(HttpServiceService, [{
        key: "isLogout",
        value: function isLogout() {
          var _self = this;

          var SessionID = localStorage.getItem('firstName');
          console.log(this.router.url + "------------------------------------------------");

          if ((SessionID == "" || SessionID == null) && this.router.url != "/login" && this.router.url != "/Auth" && this.router.url != "/login/logout" && this.router.url != "/forgotpassword" && this.router.url != "/signup" && !this.router.url.includes("/login/")) {
            if (_self.router.url.includes("login")) {
              var uri = _self.router.url;
            } else {
              var uri = '/login' + _self.router.url;
            }

            _self.router.navigateByUrl(uri);

            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "get",
        value: function get(endpoint, callback) {
          var _self = this;

          if (this.isLogout()) {
            return true;
          }

          return _self.httpClient.get(endpoint, {
            withCredentials: true
          }).subscribe(function (data) {
            console.log(data);
            callback(data);
          });
        }
      }, {
        key: "post",
        value: function post(endpoint, bean, callback) {
          var _self = this;

          if (this.isLogout()) {
            return true;
          }

          return _self.httpClient.post(endpoint, bean, {
            withCredentials: true
          }).subscribe(function (data) {
            console.log(data);
            callback(data);
          }, function (error) {
            console.log('ORS Error', error);
          });
        }
      }]);

      return HttpServiceService;
    }();

    HttpServiceService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpServiceService);
    /***/
  },

  /***/
  "./src/app/login/forgot-password.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login/forgot-password.component.ts ***!
    \****************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppLoginForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../endpoint-service.service */
    "./src/app/endpoint-service.service.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(serviceLocator, endpoint) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.serviceLocator = serviceLocator;
        this.endpoint = endpoint;
        this.form = {
          error: false,
          message: null,
          data: {},
          inputerror: {}
        };
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "forgot",
        value: function forgot() {
          var _self = this;

          this.serviceLocator.httpService.post(this.endpoint.AUTH + "/forgotPassword", this.form.data, function (res) {
            if (res.success) {
              //   _self.populateForm(this.form.data,res.result.data);
              _self.form.message = res.result;
            } else {
              _self.form.inputerror = _self.form.inputerror;
              _self.form.message = _self.form.message;
            }
          });
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.login = data.login;
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"]
      }, {
        type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password.component.html"))["default"]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../endpoint-service.service */
    "./src/app/endpoint-service.service.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route, endpoint, serviceLocator) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.form = {
          error: false,
          message: null,
          inputerror: {},
          data: {}
        };
        var s = "in";

        var _self = this;

        this.serviceLocator.getPathVariable(this.route, function (params) {
          s = params["in"];
          console.log(s + "uri------------");
        });

        if (s == "logout") {
          _self.form.message = "Logout Successfull";
        } else if (s != undefined) {
          _self.form.error = true;
          _self.form.message = "Session Expired Please Login";
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signIn",
        value: function signIn() {
          console.log("login");

          var _self = this;

          var uri = "in";
          this.serviceLocator.httpService.post(this.endpoint.AUTH + '/login', this.form.data, function (res) {
            if (res.success) {
              localStorage.setItem('firstName', res.result.data.firstName);
              localStorage.setItem('roleName', res.result.data.roleName);
              console.log(uri + "uri");

              _self.serviceLocator.getPathVariable(_self.route, function (params) {
                uri = params["in"];
                console.log(uri + "uri------------");
              });

              if (uri == undefined) {
                console.log("1");

                _self.serviceLocator.forward('dashboard');
              } else if (uri == "logout") {
                _self.serviceLocator.forward('dashboard');
              } else if (uri != undefined) {
                _self.serviceLocator.forward(uri);
              }
            } else {
              console.log('inelse');

              _self.populateForm(_self.form.data, res.result.data);

              _self.form.inputerror = res.result.inputerror;
              console.log("------------------", res.result.inputerror);
              _self.form.error = false;

              if (res.result.message) {
                _self.form.error = true;
                _self.form.message = res.result.message;
              } else {
                _self.form.message = null;
              }
            }
          });
        }
      }, {
        key: "signUp",
        value: function signUp() {
          this.serviceLocator.forward('signup');
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.login = data.login;
          form.password = data.password;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"]
      }, {
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/user-registration.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/login/user-registration.component.ts ***!
    \******************************************************/

  /*! exports provided: UserRegistrationComponent */

  /***/
  function srcAppLoginUserRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function () {
      return UserRegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../endpoint-service.service */
    "./src/app/endpoint-service.service.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");

    var UserRegistrationComponent = /*#__PURE__*/function (_login_component__WEB) {
      _inherits(UserRegistrationComponent, _login_component__WEB);

      var _super8 = _createSuper(UserRegistrationComponent);

      function UserRegistrationComponent(router, endpoint, serviceLocator) {
        var _this8;

        _classCallCheck(this, UserRegistrationComponent);

        _this8 = _super8.call(this, router, endpoint, serviceLocator);
        _this8.router = router;
        _this8.endpoint = endpoint;
        _this8.serviceLocator = serviceLocator;
        return _this8;
      }

      _createClass(UserRegistrationComponent, [{
        key: "reset",
        value: function reset() {
          this.form.error = false, this.form.message = null, this.form.inputerror = {};
          this.form.data = {};
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _self = this;

          _self.serviceLocator.httpService.post(this.endpoint.AUTH + "/register", this.form.data, function (res) {
            if (res.success) {
              _self.form.message = "User Registered Successfully please login";

              _self.populateForm(_self.form.data, res.result.data);

              _self.form.inputerror = res.result.inputerror;
            } else {
              _self.populateForm(_self.form.data, res.result.data);

              _self.form.inputerror = res.result.inputerror;
              console.log(_self.form.inputerror);
            }
          });
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.firstName = data.firstName;
          form.lastName = data.lastName;
          form.login = data.login;
          form.password = data.password;
          form.gender = data.gender;
          form.mobileNo = data.mobileNo;
          form.dob = data.dob;
        }
      }]);

      return UserRegistrationComponent;
    }(_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]);

    UserRegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"]
      }, {
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }];
    };

    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user-registration.component.html"))["default"]
    })], UserRegistrationComponent);
    /***/
  },

  /***/
  "./src/app/marksheet/get-marksheet.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/marksheet/get-marksheet.component.ts ***!
    \******************************************************/

  /*! exports provided: GetMarksheetComponent */

  /***/
  function srcAppMarksheetGetMarksheetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetMarksheetComponent", function () {
      return GetMarksheetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../endpoint-service.service */
    "./src/app/endpoint-service.service.ts");
    /* harmony import */


    var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../http-service.service */
    "./src/app/http-service.service.ts");

    var GetMarksheetComponent = /*#__PURE__*/function () {
      function GetMarksheetComponent(httpService, endpoint) {
        _classCallCheck(this, GetMarksheetComponent);

        this.httpService = httpService;
        this.endpoint = endpoint;
        this.form = {
          error: false,
          message: null,
          data: {},
          searchParams: {},
          inputerror: {}
        };
      }

      _createClass(GetMarksheetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _self = this;

          this.flag = false;
          this.httpService.post(_self.endpoint.MARKSHEET + "/getMarksheet", this.form, function (res) {
            if (res.success) {
              _self.flag = true;
              _self.form.data = res.result;
            } else {
              _self.flag = false;
              _self.form.error = true;
              _self.form.inputerror = res.inputerror;
            }
          });
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {}
      }, {
        key: "reset",
        value: function reset() {
          this.form.data = {};
          this.flag = false;
          this.form.error = false;
          this.form.message = null;
        }
      }]);

      return GetMarksheetComponent;
    }();

    GetMarksheetComponent.ctorParameters = function () {
      return [{
        type: _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"]
      }, {
        type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"]
      }];
    };

    GetMarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-marksheet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-marksheet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/get-marksheet.component.html"))["default"]
    })], GetMarksheetComponent);
    /***/
  },

  /***/
  "./src/app/marksheet/marksheet-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/marksheet/marksheet-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: MarksheetListComponent */

  /***/
  function srcAppMarksheetMarksheetListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function () {
      return MarksheetListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var MarksheetListComponent = /*#__PURE__*/function (_base_list_component_4) {
      _inherits(MarksheetListComponent, _base_list_component_4);

      var _super9 = _createSuper(MarksheetListComponent);

      function MarksheetListComponent(serviceLocator, route) {
        var _this9;

        _classCallCheck(this, MarksheetListComponent);

        _this9 = _super9.call(this, serviceLocator.endpointService.MARKSHEET, serviceLocator, route);
        _this9.serviceLocator = serviceLocator;
        _this9.route = route;
        return _this9;
      }

      _createClass(MarksheetListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.firstName = searchParams.firstName;
          form.rollNo = searchParams.rollNo;
        }
      }, {
        key: "result",
        value: function result(physics, maths, chemistry) {
          if ((physics + maths + chemistry) / 3 >= 35.0 && physics >= 35 && maths >= 35 && chemistry >= 35) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "percentage",
        value: function percentage(physics, maths, chemistry) {
          var per = 0.00;
          per = (physics + maths + chemistry) / 3;
        }
      }]);

      return MarksheetListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    MarksheetListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-marksheet-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./marksheet-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/marksheet-list.component.html"))["default"]
    })], MarksheetListComponent);
    /***/
  },

  /***/
  "./src/app/marksheet/marksheet.component.css":
  /*!***************************************************!*\
    !*** ./src/app/marksheet/marksheet.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMarksheetMarksheetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/marksheet/marksheet.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/marksheet/marksheet.component.ts ***!
    \**************************************************/

  /*! exports provided: MarksheetComponent */

  /***/
  function srcAppMarksheetMarksheetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function () {
      return MarksheetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var MarksheetComponent = /*#__PURE__*/function (_base_component__WEBP5) {
      _inherits(MarksheetComponent, _base_component__WEBP5);

      var _super10 = _createSuper(MarksheetComponent);

      function MarksheetComponent(serviceLocator, route) {
        var _this10;

        _classCallCheck(this, MarksheetComponent);

        _this10 = _super10.call(this, serviceLocator.endpointService.MARKSHEET, serviceLocator, route);
        _this10.serviceLocator = serviceLocator;
        _this10.route = route;
        return _this10;
      }

      _createClass(MarksheetComponent, [{
        key: "cancel",
        value: function cancel() {
          this.forward('/marksheetlist');
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.rollNo = data.rollNo;
          form.studentId = data.studentId;
          form.physics = data.physics;
          form.chemistry = data.chemistry;
          form.maths = data.maths;
        }
      }]);

      return MarksheetComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    MarksheetComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-marksheet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./marksheet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/marksheet.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./marksheet.component.css */
      "./src/app/marksheet/marksheet.component.css"))["default"]]
    })], MarksheetComponent);
    /***/
  },

  /***/
  "./src/app/marksheet/merit-list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/marksheet/merit-list.component.ts ***!
    \***************************************************/

  /*! exports provided: MeritListComponent */

  /***/
  function srcAppMarksheetMeritListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeritListComponent", function () {
      return MeritListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../endpoint-service.service */
    "./src/app/endpoint-service.service.ts");
    /* harmony import */


    var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../http-service.service */
    "./src/app/http-service.service.ts");

    var MeritListComponent = /*#__PURE__*/function () {
      function MeritListComponent(httpService, endpoint) {
        _classCallCheck(this, MeritListComponent);

        this.httpService = httpService;
        this.endpoint = endpoint;
        this.form = {
          list: [],
          error: false,
          pageNo: 0,
          pageSize: 0,
          count: 0
        };
      }

      _createClass(MeritListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.meritList();
        }
      }, {
        key: "result",
        value: function result(physics, maths, chemistry) {
          if ((physics + maths + chemistry) / 3 >= 35.0 && physics >= 35 && maths >= 35 && chemistry >= 35) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "meritList",
        value: function meritList() {
          var _self = this;

          _self.httpService.get(_self.endpoint.MARKSHEET + "/meritList", function (res) {
            if (res.success) {
              _self.form.error = false;
              _self.form.list = res.result.list;
              _self.form.pageNo = res.result.pageNo;
              _self.form.pageSize = res.result.pageSize;
              _self.form.count = res.result.count;
            } else {
              _self.form.error = true;
            }
          });
        }
      }]);

      return MeritListComponent;
    }();

    MeritListComponent.ctorParameters = function () {
      return [{
        type: _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"]
      }, {
        type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"]
      }];
    };

    MeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-merit-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./merit-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/marksheet/merit-list.component.html"))["default"]
    })], MeritListComponent);
    /***/
  },

  /***/
  "./src/app/nav/nav.component.css":
  /*!***************************************!*\
    !*** ./src/app/nav/nav.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../endpoint-service.service */
    "./src/app/endpoint-service.service.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts"); //import { CookieService } from 'ngx-cookie-service';


    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(translate, serviceLocator, endpoint) {
        _classCallCheck(this, NavComponent);

        this.translate = translate;
        this.serviceLocator = serviceLocator;
        this.endpoint = endpoint;
        this.firstName = '';
        this.roleName = '';
        this.menu = {};
        this.changeLocale("en");
        translate.setDefaultLang(localStorage.getItem("locale"));
      }

      _createClass(NavComponent, [{
        key: "changeLocale",
        value: function changeLocale(locale) {
          localStorage.setItem("locale", locale);
          this.translate.use(localStorage.getItem("locale"));
          this.ngOnInit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _self = this;

          var session = '';
          session = localStorage.getItem('firstName');

          if (session != null) {
            this.firstName = localStorage.getItem('firstName');
            this.roleName = localStorage.getItem('roleName');
            return true;
          }

          return false;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _self = this;

          this.serviceLocator.httpService.get(this.endpoint.AUTH + "/logout", function (res) {
            if (res.success) {
              localStorage.removeItem('firstName');
              localStorage.removeItem('roleName');

              _self.serviceLocator.forward('login/logout');
            } else {
              console.log('inelse');
            }
          }); //_self.cookie.delete('connect.sid');
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/nav/nav.component.css"))["default"]]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var PageNotFoundComponent = /*#__PURE__*/function (_service_locator_serv) {
      _inherits(PageNotFoundComponent, _service_locator_serv);

      var _super11 = _createSuper(PageNotFoundComponent);

      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);

        return _super11.apply(this, arguments);
      }

      return _createClass(PageNotFoundComponent);
    }(_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"]);

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html"))["default"]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/role/role-list.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/role/role-list.component.ts ***!
    \*********************************************/

  /*! exports provided: RoleListComponent */

  /***/
  function srcAppRoleRoleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleListComponent", function () {
      return RoleListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var RoleListComponent = /*#__PURE__*/function (_base_list_component_5) {
      _inherits(RoleListComponent, _base_list_component_5);

      var _super12 = _createSuper(RoleListComponent);

      function RoleListComponent(serviceLocator, route) {
        var _this11;

        _classCallCheck(this, RoleListComponent);

        _this11 = _super12.call(this, serviceLocator.endpointService.ROLE, serviceLocator, route);
        _this11.serviceLocator = serviceLocator;
        _this11.route = route;
        return _this11;
      }

      _createClass(RoleListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.name = searchParams.name;
          form.description = searchParams.description;
        }
      }]);

      return RoleListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    RoleListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-role-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./role-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/role/role-list.component.html"))["default"]
    })], RoleListComponent);
    /***/
  },

  /***/
  "./src/app/role/role.component.css":
  /*!*****************************************!*\
    !*** ./src/app/role/role.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoleRoleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/role/role.component.ts":
  /*!****************************************!*\
    !*** ./src/app/role/role.component.ts ***!
    \****************************************/

  /*! exports provided: RoleComponent */

  /***/
  function srcAppRoleRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleComponent", function () {
      return RoleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var RoleComponent = /*#__PURE__*/function (_base_component__WEBP6) {
      _inherits(RoleComponent, _base_component__WEBP6);

      var _super13 = _createSuper(RoleComponent);

      function RoleComponent(serviceLocator, route) {
        var _this12;

        _classCallCheck(this, RoleComponent);

        _this12 = _super13.call(this, serviceLocator.endpointService.ROLE, serviceLocator, route);
        _this12.serviceLocator = serviceLocator;
        _this12.route = route;
        return _this12;
      }

      _createClass(RoleComponent, [{
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.name = data.name;
          form.description = data.description;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.forward('/rolelist');
        }
      }]);

      return RoleComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    RoleComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-role',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./role.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/role/role.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./role.component.css */
      "./src/app/role/role.component.css"))["default"]]
    })], RoleComponent);
    /***/
  },

  /***/
  "./src/app/service-locator.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service-locator.service.ts ***!
    \********************************************/

  /*! exports provided: ServiceLocatorService */

  /***/
  function srcAppServiceLocatorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function () {
      return ServiceLocatorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./endpoint-service.service */
    "./src/app/endpoint-service.service.ts");
    /* harmony import */


    var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./http-service.service */
    "./src/app/http-service.service.ts");

    var ServiceLocatorService = /*#__PURE__*/function () {
      function ServiceLocatorService(hs, ep, r) {
        _classCallCheck(this, ServiceLocatorService);

        this.hs = hs;
        this.ep = ep;
        this.r = r;
        this.httpService = null;
        this.endpointService = null;
        this.router = null;
        this.httpService = hs;
        this.endpointService = ep;
        this.router = r;
      }

      _createClass(ServiceLocatorService, [{
        key: "getPathVariable",
        value: function getPathVariable(route, callback) {
          route.params.subscribe(function (params) {
            callback(params);
          });
        }
      }, {
        key: "forward",
        value: function forward(page) {
          this.router.navigateByUrl(page);
        }
      }]);

      return ServiceLocatorService;
    }();

    ServiceLocatorService.ctorParameters = function () {
      return [{
        type: _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]
      }, {
        type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceLocatorService);
    /***/
  },

  /***/
  "./src/app/student/student-list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/student/student-list.component.ts ***!
    \***************************************************/

  /*! exports provided: StudentListComponent */

  /***/
  function srcAppStudentStudentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListComponent", function () {
      return StudentListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var StudentListComponent = /*#__PURE__*/function (_base_list_component_6) {
      _inherits(StudentListComponent, _base_list_component_6);

      var _super14 = _createSuper(StudentListComponent);

      function StudentListComponent(serviceLocator, route) {
        var _this13;

        _classCallCheck(this, StudentListComponent);

        _this13 = _super14.call(this, serviceLocator.endpointService.STUDENT, serviceLocator, route);
        _this13.serviceLocator = serviceLocator;
        _this13.route = route;
        return _this13;
      }

      _createClass(StudentListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.firstName = searchParams.firstName;
          form.email = searchParams.email;
          form.collegeId = searchParams.collegeId;
        }
      }]);

      return StudentListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    StudentListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-list.component.html"))["default"]
    })], StudentListComponent);
    /***/
  },

  /***/
  "./src/app/student/student.component.css":
  /*!***********************************************!*\
    !*** ./src/app/student/student.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/student.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/student/student.component.ts ***!
    \**********************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var StudentComponent = /*#__PURE__*/function (_base_component__WEBP7) {
      _inherits(StudentComponent, _base_component__WEBP7);

      var _super15 = _createSuper(StudentComponent);

      function StudentComponent(serviceLocator, route) {
        var _this14;

        _classCallCheck(this, StudentComponent);

        _this14 = _super15.call(this, serviceLocator.endpointService.STUDENT, serviceLocator, route);
        _this14.serviceLocator = serviceLocator;
        _this14.route = route;
        return _this14;
      }

      _createClass(StudentComponent, [{
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.firstName = data.firstName;
          form.lastName = data.lastName;
          form.collegeId = data.collegeId;
          form.email = data.email;
          form.mobileNo = data.mobileNo;
          form.dob = data.dob;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.forward('/student');
        }
      }]);

      return StudentComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    StudentComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student.component.css */
      "./src/app/student/student.component.css"))["default"]]
    })], StudentComponent);
    /***/
  },

  /***/
  "./src/app/subject/subject-list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/subject/subject-list.component.ts ***!
    \***************************************************/

  /*! exports provided: SubjectListComponent */

  /***/
  function srcAppSubjectSubjectListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function () {
      return SubjectListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var SubjectListComponent = /*#__PURE__*/function (_base_list_component_7) {
      _inherits(SubjectListComponent, _base_list_component_7);

      var _super16 = _createSuper(SubjectListComponent);

      function SubjectListComponent(serviceLocator, route) {
        var _this15;

        _classCallCheck(this, SubjectListComponent);

        _this15 = _super16.call(this, serviceLocator.endpointService.SUBJECT, serviceLocator, route);
        _this15.serviceLocator = serviceLocator;
        _this15.route = route;
        return _this15;
      }

      _createClass(SubjectListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.subjectName = searchParams.subjectName;
          form.courseId = searchParams.courseId;
          form.courseName = searchParams.courseName;
        }
      }]);

      return SubjectListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    SubjectListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subject-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subject-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-list.component.html"))["default"]
    })], SubjectListComponent);
    /***/
  },

  /***/
  "./src/app/subject/subject.component.css":
  /*!***********************************************!*\
    !*** ./src/app/subject/subject.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubjectSubjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/subject/subject.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/subject/subject.component.ts ***!
    \**********************************************/

  /*! exports provided: SubjectComponent */

  /***/
  function srcAppSubjectSubjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectComponent", function () {
      return SubjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var SubjectComponent = /*#__PURE__*/function (_base_component__WEBP8) {
      _inherits(SubjectComponent, _base_component__WEBP8);

      var _super17 = _createSuper(SubjectComponent);

      function SubjectComponent(serviceLocator, route) {
        var _this16;

        _classCallCheck(this, SubjectComponent);

        _this16 = _super17.call(this, serviceLocator.endpointService.SUBJECT, serviceLocator, route);
        _this16.serviceLocator = serviceLocator;
        _this16.route = route;
        return _this16;
      }

      _createClass(SubjectComponent, [{
        key: "cancel",
        value: function cancel() {
          this.forward('/subjectlist');
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.courseId = data.courseId;
          form.courseName = data.courseName;
          form.subjectName = data.subjectName;
          form.subjectDescription = data.subjectDescription;
        }
      }]);

      return SubjectComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    SubjectComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subject',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subject.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subject.component.css */
      "./src/app/subject/subject.component.css"))["default"]]
    })], SubjectComponent);
    /***/
  },

  /***/
  "./src/app/timetable/timetable-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/timetable/timetable-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: TimetableListComponent */

  /***/
  function srcAppTimetableTimetableListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function () {
      return TimetableListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var TimetableListComponent = /*#__PURE__*/function (_base_list_component_8) {
      _inherits(TimetableListComponent, _base_list_component_8);

      var _super18 = _createSuper(TimetableListComponent);

      function TimetableListComponent(serviceLocator, route) {
        var _this17;

        _classCallCheck(this, TimetableListComponent);

        _this17 = _super18.call(this, serviceLocator.endpointService.TIMETABLE, serviceLocator, route);
        _this17.serviceLocator = serviceLocator;
        _this17.route = route;
        return _this17;
      }

      _createClass(TimetableListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.collegeId = searchParams.collegeId;
        }
      }]);

      return TimetableListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    TimetableListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timetable-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timetable-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable-list.component.html"))["default"]
    })], TimetableListComponent);
    /***/
  },

  /***/
  "./src/app/timetable/timetable.component.css":
  /*!***************************************************!*\
    !*** ./src/app/timetable/timetable.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTimetableTimetableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/timetable/timetable.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/timetable/timetable.component.ts ***!
    \**************************************************/

  /*! exports provided: TimetableComponent */

  /***/
  function srcAppTimetableTimetableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimetableComponent", function () {
      return TimetableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var TimetableComponent = /*#__PURE__*/function (_base_component__WEBP9) {
      _inherits(TimetableComponent, _base_component__WEBP9);

      var _super19 = _createSuper(TimetableComponent);

      function TimetableComponent(serviceLocator, route) {
        var _this18;

        _classCallCheck(this, TimetableComponent);

        _this18 = _super19.call(this, serviceLocator.endpointService.TIMETABLE, serviceLocator, route);
        _this18.serviceLocator = serviceLocator;
        _this18.route = route;
        return _this18;
      }

      _createClass(TimetableComponent, [{
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.courseId = data.courseId;
          form.subjectId = data.subjectId;
          form.semester = data.semester;
          form.examDate = data.examDate;
          form.examTime = data.examTime;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.forward('/timetablelist');
        }
      }]);

      return TimetableComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]);

    TimetableComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timetable',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timetable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timetable.component.css */
      "./src/app/timetable/timetable.component.css"))["default"]]
    })], TimetableComponent);
    /***/
  },

  /***/
  "./src/app/user/change-password.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/change-password.component.ts ***!
    \***************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppUserChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var ChangePasswordComponent = /*#__PURE__*/function (_base_component__WEBP10) {
      _inherits(ChangePasswordComponent, _base_component__WEBP10);

      var _super20 = _createSuper(ChangePasswordComponent);

      function ChangePasswordComponent(serviceLocator, route, httpClient) {
        var _this19;

        _classCallCheck(this, ChangePasswordComponent);

        _this19 = _super20.call(this, serviceLocator.endpointService.AUTH, serviceLocator, route);
        _this19.serviceLocator = serviceLocator;
        _this19.route = route;
        _this19.httpClient = httpClient;
        return _this19;
      }

      _createClass(ChangePasswordComponent, [{
        key: "submit",
        value: function submit() {
          var _self = this;

          this.serviceLocator.httpService.post(this.serviceLocator.endpointService.AUTH + "/changePassword", this.form.data, function (res) {
            if (res.success) {
              _self.form.error = false;
              _self.form.message = "Password Changed successfully";
            } else {
              _self.form.error = true;
              _self.form.message = "Error";
            }
          });
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.oldPassword = data.oldPassword;
          form.password = data.password;
          form.confirmPassword = form.confirmPassword;
        }
      }]);

      return ChangePasswordComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]);

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password.component.html"))["default"]
    })], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/user/my-profile.component.ts ***!
    \**********************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppUserMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var MyProfileComponent = /*#__PURE__*/function (_base_component__WEBP11) {
      _inherits(MyProfileComponent, _base_component__WEBP11);

      var _super21 = _createSuper(MyProfileComponent);

      function MyProfileComponent(serviceLocator, route, httpClient) {
        var _this20;

        _classCallCheck(this, MyProfileComponent);

        _this20 = _super21.call(this, serviceLocator.endpointService.USER, serviceLocator, route);
        _this20.serviceLocator = serviceLocator;
        _this20.route = route;
        _this20.httpClient = httpClient;
        _this20.uploadId = 0;
        _this20.getKey = false;
        _this20.selected = null;
        _this20.fileToUpload = null;
        _this20.userForm = null;
        return _this20;
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _self = this;

          this.serviceLocator.httpService.get(_self.api.endpoint + "/myProfile", function (res) {
            if (res.success) {
              _self.populateForm(_self.form.data, res.result);
            } else {
              _self.form.error = true;
              _self.form.message = "error";
              _self.form.inputerror = res.result.inputerror;
            }
          });
        }
      }, {
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.firstName = data.firstName;
          form.lastName = data.lastName;
          form.login = data.login;
          form.password = data.password;
          form.gender = data.gender;
          form.mobileNo = data.mobileNo;
          form.dob = data.dob;
          form.status = data.status;
          form.roleId = data.roleId;
          form.picName = data.picName;
        }
      }, {
        key: "myFile",
        value: function myFile() {
          var _this21 = this;

          this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this21.fileToUpload);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onSubmitProfile",
        value: function onSubmitProfile(fileToUpload, userform) {
          var formData = new FormData();

          var _self = this;

          formData.append('pic', fileToUpload);
          return this.httpClient.post(this.endpoint.USER + "/profilePic/" + this.uploadId, formData, {
            withCredentials: true
          });
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(files) {
          this.fileToUpload = files.item(0);
          console.log(this.fileToUpload);
        }
      }, {
        key: "onUpload",
        value: function onUpload(userform) {
          this.submit();
        }
      }]);

      return MyProfileComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]);

    MyProfileComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-my-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile.component.html"))["default"]
    })], MyProfileComponent);
    /***/
  },

  /***/
  "./src/app/user/user-list.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-list.component.ts ***!
    \*********************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-list.component */
    "./src/app/base-list.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");

    var UserListComponent = /*#__PURE__*/function (_base_list_component_9) {
      _inherits(UserListComponent, _base_list_component_9);

      var _super22 = _createSuper(UserListComponent);

      function UserListComponent(serviceLocator, route) {
        var _this22;

        _classCallCheck(this, UserListComponent);

        _this22 = _super22.call(this, serviceLocator.endpointService.USER, serviceLocator, route);
        _this22.serviceLocator = serviceLocator;
        _this22.route = route;
        return _this22;
      }

      _createClass(UserListComponent, [{
        key: "populateForm",
        value: function populateForm(form, searchParams) {
          form.firstName = searchParams.firstName; // form.lastName = searchParams.lastName;

          form.login = searchParams.login; //form.status = searchParams.status;

          form.roleId = searchParams.roleId;
        }
      }, {
        key: "search",
        value: function search() {
          this.form.data.pageSize = 5;

          _get(_getPrototypeOf(UserListComponent.prototype), "search", this).call(this);
        }
      }]);

      return UserListComponent;
    }(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]);

    UserListComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list.component.html"))["default"]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/base.component */
    "./src/app/base.component.ts");
    /* harmony import */


    var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service-locator.service */
    "./src/app/service-locator.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserComponent = /*#__PURE__*/function (_src_app_base_compone) {
      _inherits(UserComponent, _src_app_base_compone);

      var _super23 = _createSuper(UserComponent);

      function UserComponent(serviceLocator, route, httpClient) {
        var _this23;

        _classCallCheck(this, UserComponent);

        _this23 = _super23.call(this, serviceLocator.endpointService.USER, serviceLocator, route);
        _this23.serviceLocator = serviceLocator;
        _this23.route = route;
        _this23.httpClient = httpClient;
        _this23.uploadId = 0;
        _this23.getKey = false;
        _this23.selected = null;
        _this23.fileToUpload = null;
        _this23.userForm = null;
        return _this23;
      }

      _createClass(UserComponent, [{
        key: "populateForm",
        value: function populateForm(form, data) {
          form.id = data.id;
          form.firstName = data.firstName;
          form.lastName = data.lastName;
          form.login = data.login;
          form.password = data.password;
          form.gender = data.gender;
          form.mobileNo = data.mobileNo;
          form.dob = data.dob;
          form.status = data.status;
          form.roleId = data.roleId;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _self = this;

          this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = null;
            _self.form.inputerror = {};

            if (res.success) {
              _self.uploadId = res.result;

              if (_self.fileToUpload != null) {
                _self.myFile();
              }

              _self.form.error = false;
              _self.form.message = "Data is saved"; //_self.forward('/user/'+res.result)
            } else {
              _self.form.error = true;
              _self.form.inputerror = res.result.inputerror;
              _self.form.message = res.result.message;
            } //console.log('FORM', _self.form);

          });
        }
      }, {
        key: "myFile",
        value: function myFile() {
          var _this24 = this;

          console.log(this.form.data.id + 'after super.submit-----');
          this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this24.fileToUpload);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onSubmitProfile",
        value: function onSubmitProfile(fileToUpload, userform) {
          var formData = new FormData();

          var _self = this;

          formData.append('pic', fileToUpload);
          console.log(this.uploadId + 'this id number ======');
          return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.uploadId, formData, {
            withCredentials: true
          });
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(files) {
          this.fileToUpload = files.item(0);
          console.log(this.fileToUpload);
        }
      }, {
        key: "onUpload",
        value: function onUpload(userform) {
          this.submit();
          console.log(this.form.data.id + '---- after submit');
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.forward('/userlist');
        }
      }]);

      return UserComponent;
    }(src_app_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]);

    UserComponent.ctorParameters = function () {
      return [{
        type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.css":
  /*!***********************************************!*\
    !*** ./src/app/welcome/welcome.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.css */
      "./src/app/welcome/welcome.component.css"))["default"]]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Project5_UI\ors\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map