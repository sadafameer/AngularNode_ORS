var BaseCtl = require("../controller/BaseCtl");
var Course = require("../bean/Course");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains course REST APIs
 */
class CourseCtl extends BaseCtl{

    constructor(){
        super();
        this.service = ServiceLocator.getCourseService();
    }

    
preload(request, response){
    var res = new Response('no data');
    response.json(res);

}

    validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
        console.log("inside Validate Course Method");
        if(!body.courseName){
            result.inputerror.courseName = "Course Name is required";
            pass= false;
        }
        if(!body.courseDescription){
            result.inputerror.courseDescription  = "Description is required";
            pass= false;
        }
        if(!body.courseDuration){
            result.inputerror.courseDuration  = " Course Duration is required";
            pass= false;
        }
        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**
     * Return bean of course controller.
     * @param {*} request 
     */
    getBean(request) {
        var course = new Course();
        course.populateRequest(request.body);
        return course;
    };

    /**
     * return service of course controller.
     */
    getService() {
        return this.service;
    };
}


module.exports = CourseCtl;