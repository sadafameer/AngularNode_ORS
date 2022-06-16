var BaseBean = require('../bean/BaseBean');

class Timetable extends BaseBean {

    constructor() {
        super();
        this.examTime = '';
        this.examDate = '';
        this.subjectId = '';
        this.subjectName = '';
        this.courseId = '';
        this.courseName = '';
        this.semester = '';

    };

    /**
     * Set populateResult into bean.
     * @param {*} res 
     */
    populateResult(res) {
        this.id = res.ID;
        this.examTime = res.EXAM_TIME;
        this.examDate = res.EXAM_DATE;
        this.subjectId = res.SUBJECT_ID;
        this.subjectName = res.SUBJECT_NAME;
        this.courseId = res.COURSE_ID;
        this.courseName = res.COURSE_NAME;
        this.semester = res.SEMESTER;
        this.createdBy = res.CREATED_BY;
        this.modifiedBy = res.MODIFIED_BY;
        this.createdDateTime = res.CREATED_DATETIME;
        this.modifiedDateTime = res.MODIFIED_DATETIME;
    }

    /**
     * Get request data from body.
     * @param {*} body 
     */
    populateRequest(body) {
        if (body.id) {
            this.id = body.id;
        }
        if (body.examTime) {
            this.examTime = body.examTime;
        }
        if (body.examDate) {
            this.examDate = body.examDate;
        }
        if (body.subjectId) {
            this.subjectId = body.subjectId;
        }
        if (body.subjectName) {
            this.subjectName = body.subjectName;
        }
        if (body.courseId) {
            this.courseId = body.courseId;
        }
    
    if (body.courseName) {
        this.courseName = body.courseName;
    }

if (body.semester) {
    this.semester = body.semester;
}
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }
}

module.exports = Timetable;