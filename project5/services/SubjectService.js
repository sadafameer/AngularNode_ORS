var Subject = require("../bean/Subject");
var BaseService = require("./BaseService");
var CourseService = require("./CourseService");
var StudentService = require("./StudentService");

class SubjectService extends BaseService {

    /**
     *Finds student by primary key id
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_subject WHERE ID= ?";
        var params = [id];
        console.log('findByPk--');
        super.executeSQLForObject(sql, params, new Subject(), callback);
    };

        /**
     * Search subject by  subject name, Description
     * Returns Subject bean
     * @param {*} subject 
     * @param {*} callback 
     */
         search(subject, pageNo, pageSize, callback) {
            var sql = "SELECT * FROM st_subject where 1=1 ";
    
            if (subject.subjectName) {
                sql += " and SUBJECT_NAME = '" + subject.subjectName + "'";
            }
            if (subject.subjectDescription) {
                sql += " and SUBJECT_DESCRIPTION = '" + subject.subjectDescription + "'";
            }
            if (subject.courseID){
                sql+= "and COURSE_ID = '" + subject.courseID + "'";
            }
            if (subject.courseName) {
                sql += " and COURSE_NAME like '" + subject.courseName + "%'";
            }
            super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize}, new Subject(), function (err, list) {
                callback(err, list);
            });
        }
        // add(subject, callback) {
        //     var sql = "SELECT * FROM st_subject WHERE SUBJECT_NAME =?";
        //     var params = [subject.subjectName];
        //     super.executeSQLForObject(sql, params, new Subject(), function (err, result) {
        //         if (result == undefined) {
        //     var sql = "INSERT INTO st_subject (CREATED_DATETIME,MODIFIED_DATETIME,SUBJECT_NAME,SUBJECT_DESCRIPTION,COURSE_ID,COURSE_NAME)" + " VALUES (NOW(),NOW(),?,?,?,?)";
        //             console.log("inside add method");
        //         var params = [subject.subjectName, subject.subjectDescription, subject.courseID,subject.courseName,subject.id];
    
        //             var serv = new BaseService();
        //             serv.executeSQL(sql, params, function (err, result) {
        //                 if (err) {
        //                     callback(err);
        //                 } else {
        //                     callback(err, result.insertId);
        //                 }
        //             });
        //         } else {
        //             result.message = "This record already exists";
        //             callback(result);
        //         }
        //     });
        // }
        add(subject, callback) {
            var sql = "SELECT * FROM st_subject WHERE SUBJECT_NAME=?";
            var params = [subject.subjectName];
            super.executeSQLForObject(sql, params, new Subject(), function (err, result) {
                if (result == undefined) {
                    var courseService = new CourseService();
                    courseService.findByPk(subject.courseId, function (cErr, course) {
                        if (cErr) {
                            callback(cErr);
                        } else {
                            console.log(course.courseName);
                            subject.courseName = course.courseName;
                            var sql = "INSERT INTO st_subject (SUBJECT_NAME,SUBJECT_DESCRIPTION,COURSE_ID,COURSE_NAME,CREATED_BY,CREATED_DATETIME) VALUE (?,?,?,?,?,NOW())";
                            var params = [subject.subjectName, subject.subjectDescription, subject.courseId, subject.courseName, subject.createdBy];
                            var baseService = new BaseService();
                            baseService.executeSQL(sql, params, function (err, result) {
                                if (err) {
                                    callback(err);
                                } else {
                                    callback(err, result.insertId);
                                }
                            });
                        }
                    });
    
                } else {
                    result.message = "This record already exists";
                    callback(result);
                }
    
            });
        }
    
    
    //    
    update(subject, callback) {
        var courseService = new CourseService();
        courseService.findByPk(subject.courseId, function (cErr, course) {
            if (cErr) {
                callback(cErr);
            } else {
                subject.courseName = course.courseName;
                var sql = "UPDATE st_subject SET SUBJECT_NAME=? , SUBJECT_DESCRIPTION=? , COURSE_ID=?, COURSE_NAME=? , MODIFIED_BY=? ,MODIFIED_DATETIME=NOW() WHERE ID = ?";
                var params = [subject.subjectName, subject.subjectDescription, subject.courseId, subject.courseName, subject.modifiedBy, subject.id];
                var baseService = new BaseService();
                baseService.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.insertId);
                    }
                });
            }
        });

    }
    

        delete(id, callback, ctx) {
            super.delete(id, 'st_subject', callback, ctx);
        }

}
module.exports = SubjectService;