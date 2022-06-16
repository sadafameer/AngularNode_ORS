
var BaseCtl = require("../controller/BaseCtl");
var Faculty = require("../bean/Faculty");
var Response = require("../bean/Response");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains User REST APIs.
 */

class FacultyCtl extends BaseCtl {
 
  constructor() {
    super();
    this.service = ServiceLocator.getFacultyService();
}

preload(request, response) {
    var collegeService = ServiceLocator.getCollegeService();
    var courseService = ServiceLocator.getCourseService();
    var subjectService = ServiceLocator.getSubjectService();
    var result = {}
    collegeService.search('', null, null,function (err, college) {
        if (!err) {
            result.collegeList = college.list;
            courseService.search('', null,null, function (err, course) {
                if (!err) {
                    result.courseList = course.list;
                    subjectService.search('', null, null,function (err, subject) {
                        if (!err) {
                            result.subjectList = subject.list;
                            var res = new Response(err,result);
                            response.json(res);
                        }
                    });
                }
            });
        }
    });
};
          
validate(body,callback){
    var pass = true;
    var result = {};
    result.inputerror = {};
    if(!body.firstName){
        result.inputerror.firstName = "First Name is required";
        pass= false;
    }
    if(!body.lastName){
        result.inputerror.lastName = "Last Name is required";
        pass= false;
    }
    if(!body.email){
        result.inputerror.email = "Email is required";
        pass= false;
    }
            if(!body.mobileNo){
        result.inputerror.mobileNo= "Mobile is required";
        pass= false;
    }
                  if(!body.gender){
        result.inputerror.gender= "Gender is required";
        pass= false;
    }
                  if(!body.collegeId){
        result.inputerror.collegeId = "College Name is required";
        pass= false;
    }
    if(!body.courseId){
        result.inputerror.courseId = "Course Name is required";
        pass= false;
    }
     
       if(!body.subjectId){
        result.inputerror.subjectId= "Subject Name required";
        pass= false;
       }
        
if(!body.dob){
        result.inputerror.dob = "DOB is required";
        pass= false;
    }
    if(pass==false){
        callback(pass,result)
    }else {
        callback(pass)
    }
}

    /**
     * Get preload data.
     * @param {*} request 
     * @param {*} response 
     */

    
   

   /**
     * Returns Faculty bean populated from request parameters. 
     */
    getBean(request) {
        var faculty = new Faculty();
        faculty.populateRequest(request.body);
        return faculty;
    };

    
    /**
     * Returns service of this controller.
     */
     getService() {
        return this.service;
    };
}

module.exports = FacultyCtl;







     













