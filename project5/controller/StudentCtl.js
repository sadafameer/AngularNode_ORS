var BaseCtl = require("../controller/BaseCtl");
var Student = require("../bean/Student");
var ServiceLocator = require("../services/ServiceLocator");
var Response = require("../bean/Response");


/**
 * Contains Student REST APIs.
 */

class StudentCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getStudentService();
    }

    /**
     * Returns preload data.
     * @param {*} request 
     * @param {*} response 
     */

    preload(request, response) {
        var collegeService = ServiceLocator.getCollegeService();
       collegeService.search('', null, null, function (err, college) {
           var result = {};
           result.collegeList = college.list;
           var res = new Response(err, result);
            response.json(res)
        });
   }
   

    validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
        console.log("inside Validate Student Method");
        if(!body.firstName){
            result.inputerror. firstName = "First Name is required";
            pass= false;
        }
        if(!body.lastName){
            result.inputerror.name = "Last name is required";
            pass= false;
        }
        if(!body.collegeId){
            result.inputerror.collegeId = " College Id is required";
            pass= false;
        }
         if(!body.collegeId){
             result.inputerror.collegeName = " College Name is required";
             pass= false;
          }

         if(!body.dob){
             result.inputerror.dob = "Dob is required";
             pass= false;
          
          }
         if(!body.mobileNo){
             result.inputerror.mobileNo = "Mobile number is required";
             pass= false;
          }
        if(!body.email){
             result.inputerror.email = "Email is required";
             pass= false;
         }
         // if(!body.image){
           //  result.inputerror.image = "Image is required";
            //pass= false;
           //}
        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**
     * Return bean of Sudent controller.
     * @param {*} request 
     */
    getBean(request) {
        var student = new Student();
        student.populateRequest(request.body);
        return student;
    };

    /**
     * return service of Role controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = StudentCtl;