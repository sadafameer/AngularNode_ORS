var BaseCtl = require("../controller/BaseCtl");
var Subject = require("../bean/Subject");
var Response = require("../bean/Response");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains Subject REST APIs
 */
class SubjectCtl extends BaseCtl{

    constructor(){
        super();
        this.service = ServiceLocator.getSubjectService();
    }
    preload(request, response) {
        var courseService = ServiceLocator.getCourseService();
        courseService.search('', null, null,function (err, course) {
            var result = {};
            result.courseList = course.list;
            var res = new Response(err,result);
            response.json(res)
        });
    }
    /**
     * Returns Validate data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
      
        // if(!body.subjectName){
        //     result.inputerror.subjectName = "Subject name is required";
        //     pass= false;
        // }
        // if(!body.subjectDescription){
        //     result.inputerror.subjectDescription = "Subject description is required";
        //     pass= false;
        // }
        // if(!body.courseId){
        //     result.inputerror.courseId = "Course ID is required";
        //     pass= false;
        // }
        // if(!body.courseName){
        //     result.inputerror.courseName = "Course Name is required";
        //     pass= false;
        // }
        
        // if(pass==false){
        //     callback(pass,result)
        // }else {
        //     callback(pass)
        if(!body.subjectName){
            result.inputerror.subjectName = "Subject name is required";
            pass= false;
        }
        if(!body.subjectDescription){
            result.inputerror.subjectDescription = "Subject description is required";
            pass= false;
        }
        if(!body.courseId){
            result.inputerror.courseId = "Course ID is required";
            pass= false;
        }
        // if(!body.courseName){
        //     result.inputerror.courseName = "Course Name is required";
        //     pass= false;
        // }
        
        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**
     * Return bean of Subject controller.
     * @param {*} request 
     */
    getBean(request){
        var subject = new Subject();
        subject.populateRequest(request.body);
        return subject;
    };
    /**
     * return service of Subject controller.
     */
    getService(){
        return this.service;
    };
}

module.exports = SubjectCtl;
