var BaseCtl = require("../controller/BaseCtl");
var Timetable = require("../bean/Timetable");
var ServiceLocator = require("../services/ServiceLocator");
var Response = require("../bean/Response");
/**
 * Contains College REST APIs
 */
class TimetableCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getTimetableService();
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
     /** 
     * Returns Validate data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
        if(!body.examTime){
            result.inputerror.examTime  = "Exam time is required";
            pass= false;
        }
        if(!body.examDate){
            result.inputerror.examDate = "Exam date is required";
            pass= false;
        }
        if(!body.subjectId){
            result.inputerror.subjectId = "Subject Id is required";
            pass= false;
        }
        
        // if(!body.subjectName){
        //     result.inputerror.subjectName = "Subject Name is required";
        //     pass= false;
    //}
        if(!body.courseId){
            result.inputerror.courseId = "Course Id is required";
            pass= false;
        }
        // if(!body.courseName){
        //     result.inputerror.courseName = "Course Name is required";
        //     pass= false;
       // }
        if(!body.semester){
            result.inputerror.semester = "Semester is required";
            pass= false;
        }
        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**
     * Returns College bean populated from request parameters. 
     */
    getBean(request) {
        var timetable = new Timetable();
        timetable.populateRequest(request.body);
        return timetable;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = TimetableCtl;
