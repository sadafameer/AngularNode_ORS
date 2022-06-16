var Timetable = require("../bean/Timetable");
var BaseService = require("./BaseService");
var CourseService = require("./CourseService");
var SubjectService = require("./SubjectService");
var CollegeService = require("./CollegeService");



class TimetableService extends BaseService {

    /**
     * Finds college by primary key id
     * returns College object
     */

    /**
    * Finds record by primary key id
    */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_timetable WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Timetable(), callback);
    };

    search(timetable, pageNo, pageSize, callback, ctx) {
        var sql = "SELECT * FROM st_timetable where 1=1 ";
        if (timetable.examTime) {
            sql += " and EXAM_TIME = '" + timetable.examTime + "'";
        }
        if (timetable.examDate) {
            sql += " and EXAM_DATE = '" + timetable.examDate + "'";
        }
        if (timetable.subjectId) {
            sql += " and SUBJECT_ID = '" + timetable.subjectId + "'";
        }
        if (timetable.subjectName) {
            sql += " and SUBJECT_NAME like '" + timetable.subjectName + "%'";
        }
        if (timetable.courseId) {
            sql += " and COURSE_ID = '" + timetable.courseId + "'";
        }
        if (timetable.courseName) {
            sql += " and COURSE_NAME = '" + timetable.courseName + "'";
        }
        if (timetable.semester) {
            sql += " and SEMESTER = '" + timetable.semester + "'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo,"pageSize":pageSize }, new Timetable(), callback);

    }
    add(timetable, callback) {
        var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? AND SEMESTER = ? AND SUBJECT_ID = ?";
        var params = [timetable.courseId, timetable.semester, timetable.subjectId];
        super.executeSQLForObject(sql, params, new Timetable(), function (err, result) {
            if (result == undefined) {
                var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? , SEMERESTER = ? ,EXAM_DATE = ?";
                var params = [timetable.courseId, timetable.semester, timetable.examDate];
                var baseService = new BaseService();
                baseService.executeSQLForObject(sql, params, new Timetable(), function (err, result) {
                    if (result == undefined) {
                        var subjectService = new SubjectService();
                        subjectService.findByPk(timetable.subjectId, function (err, subject) {
                            if (err) {
                                callback(err);
                            } else {
                                timetable.subjectName = subject.subjectName;
                                var courseService = new CourseService();
                                courseService.findByPk(timetable.courseId, function (err, course) {
                                    if (err) {
                                        callback(err);
                                    } else {
                                        timetable.courseName = course.courseName;
                                        var baseService = new BaseService()
                                        var sql = "INSERT INTO st_timetable (EXAM_TIME,EXAM_DATE,SUBJECT_ID,SUBJECT_NAME,COURSE_ID,COURSE_NAME,SEMESTER,CREATED_BY,CREATED_DATETIME) VALUES (?,?,?,?,?,?,?,?,NOW()) "
                                        var params = [timetable.examTime, timetable.examDate, timetable.subjectId, timetable.subjectName, timetable.courseId, timetable.courseName, timetable.semester, timetable.createdBy];
                                        baseService.executeSQL(sql, params, function (err, result) {
                                            if (err) {
                                                callback(err);
                                            }
                                            else {
                                          
                                                callback(err, result.insertId);
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                         
                        callback(result);
                    }
                })
            } else {
                result.message = "This record already exists"; 
                callback(result);
            }
        })
    };

    update(timetable, callback) {
        var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? AND SEMESTER = ? AND SUBJECT_ID = ?";
        var params = [timetable.courseId, timetable.semester, timetable.subjectId];
        super.executeSQLForObject(sql, params, new Timetable(), function (err, bean1) {
            if (bean1 == undefined || bean1.id == timetable.id) {
                var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? AND SEMESTER = ? AND EXAM_DATE = ?";
                var params = [timetable.courseId, timetable.semester, timetable.examDate];
                var baseService = new BaseService();
                baseService.executeSQLForObject(sql, params, new Timetable(), function (err, bean2) {
                    if (bean2 == undefined || bean2.id == timetable.id) {
                        var subjectService = new SubjectService();
                        subjectService.findByPk(timetable.subjectId, function (err, subject) {
                            if (err) {
                                callback(err);
                            } else {
                                timetable.subjectName = subject.subjectName;
                                var courseService = new CourseService();
                                courseService.findByPk(timetable.courseId, function (err, course) {
                                    if (err) {
                                        callback(err);
                                    } else {
                                        timetable.courseName = course.courseName;
                                        var baseService = new BaseService()
                                        var sql = "UPDATE st_timetable SET EXAM_TIME=?,EXAM_DATE=?,SUBJECT_ID=?,SUBJECT_NAME=?,COURSE_ID=?,COURSE_NAME=?,SEMESTER=?,MODIFIED_BY=?,MODIFIED_DATETIME=NOW() WHERE ID=? "
                                        var params = [timetable.examTime, timetable.examDate, timetable.subjectId, timetable.subjectName, timetable.courseId, timetable.courseName, timetable.semester, timetable.modifiedBy, timetable.id];
                                        baseService.executeSQL(sql, params, function (err, result) {
                                            if (err) {
                                                callback(err);
                                            }
                                            else {
                                                callback(err, result.insertId);
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        callback(bean2);
                    }
                })
            } else {
                callback(bean1);
            }
        })
    }
    delete(id, callback, ctx) {
        super.delete(id, 'st_timetable', callback, ctx);
    }

}

module.exports = TimetableService;