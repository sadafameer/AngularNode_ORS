var BaseCtl = require("../controller/BaseCtl");
var Marksheet = require("../bean/Marksheet");
var Response = require("../bean/Response");
var ServiceLocator = require("../services/ServiceLocator");
var DataValidator = require('./DataValidator');
/**
 * Contains College REST APIs
 */
class MarksheetCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getMarksheetService();
    }

    preload(request, response) {
        var studentService = ServiceLocator.getStudentService();
        studentService.search('', null, null, function (err, student) {
            var result = {};
            result.studentList = student.list;
             
            var res = new Response(err, result);
            response.json(res)
        });
    }

    validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
        if(!body.rollNo){
            result.inputerror.rollNo = "Roll no is required";
            pass= false;
        }
        else if(!DataValidator.isRollNo(body.rollNo)){
            result.inputerror.rollNo = "Please enter valid roll no";
            pass= false;
        }
        if(!body.studentId){
            result.inputerror.studentId = "Student ID is required";
            pass= false;
        }
        
        if(!body.physics){
            result.inputerror.physics = "Physics is required";
            pass= false;
        }
        else if(!DataValidator.isMarks(body.physics)){
            result.inputerror.physics = "Marks are invalid";
            pass= false;
        }
        if(!body.chemistry){
            result.inputerror.chemistry = "chemistry is required";
            pass= false;
        }
        else if(!DataValidator.isMarks(body.chemistry)){
            result.inputerror.chemistry = "Marks  ARE invalid";
            pass= false;
        }
        if(!body.physics){
            result.inputerror.maths = "maths is required";
            pass= false;
        }
        else if(!DataValidator.isMarks(body.maths)){
            result.inputerror.maths = "Marks are invalid";
            pass= false;
        }

        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }
    meritList(request,response){
        this.service.meritList(function(err,result){
            var resp = new Response(err,result);
            response.json(resp);
        })
    }
    getMarksheet(request,response){
        var rollNo =  request.body.rollNo
         this.service.getMarksheet(rollNo,function(err,result){
             var resp = new Response(err,result);
             response.json(resp);
             
         })
        }
    getBean(request) {
        var marksheet = new Marksheet();
        marksheet.populateRequest(request.body);
        return marksheet;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = MarksheetCtl;














