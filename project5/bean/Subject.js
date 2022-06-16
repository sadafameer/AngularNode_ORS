var BaseBean = require('../bean/Basebean');
var DataUtility = require("../utility/DataUtility");

class Faculty extends BaseBean {
   
     constructor() {
  
         super();
         this.subjectName = "";
         this.subjectDescription = "";
         this.courseId = "";
         this.courseName = "";
            }
 /**
       * Set populateResult into bean.
       * @param {*} res 
       */
 populateResult(res) {
  this.id = res.ID;
  this.subjectName = res.SUBJECT_NAME;
  this.subjectDescription = res.SUBJECT_DESCRIPTION;
  this.courseId = res.COURSE_ID;
  this.courseName = res.COURSE_NAME;
    };
/**
       * Get request data from body.
       * @param {*} body 
       */
 populateRequest(body) {

    if (body.id) {
        this.id = body.id;
    }
    if (body.subjectName){
     this.subjectName = body.subjectName;
    }
       if (body.subjectDescription){
        this.subjectDescription = body.subjectDescription;
       }
       if (body.courseId){
        this.courseId = body.courseId;
       }
       if (body.courseName){
        this.courseName = body.courseName;
       }
      
    };
}
 module.exports = Faculty;