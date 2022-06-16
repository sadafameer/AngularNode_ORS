
var Faculty = require("../bean/Faculty");
var BaseService = require("./BaseService");
var CollegeService = require("./CollegeService");
var CourseService = require("./CourseService");
var SubjectService = require("./SubjectService");


class FacultyService extends BaseService {

     /**
     * Finds marksheet by primary key id
     */
    findByPk(id, callback, ctx){
       var sql = "SELECT * FROM st_faculty WHERE ID=?";
       var params = [id];
       console.log('findByPk-----');
       super.executeSQLForObject(sql, params, new Faculty(), callback);
    };

    
    /**
    * Searches and returns list. Applies pagination as well.
     * 
     * @param {*} college 
     * @param {*} callback 
     */

    search(faculty, pageNo, pageSize, callback){
    
        var sql = "SELECT * FROM st_faculty where 1=1 ";

        if (faculty.firstName) {

            sql += " and FIRST_NAME like '"+faculty.firstName+"%'";
        }
     super.executeSQLForList(sql, {"pageNo": pageNo,"pageSize":pageSize}, new Faculty(), callback);
    }

     /**
     * Adds a record and returns primary key
     * @param {*} student 
     * @param {*} callback 
     * @param {*} ctx 
     */

      add(faculty, callback) {
        var sql = "SELECT * FROM st_faculty WHERE EMAIL = ?";
        var params = [faculty.email];
        super.executeSQLForObject(sql, params, new Faculty(), function (err, result) {
            var collegeService = new CollegeService();
            collegeService.findByPk(faculty.collegeId, function (err, college) {
                if (err) {
                    callback(err);
                } else {
                    faculty.collegeName = college.name;
                    var courseService = new CourseService();
                    courseService.findByPk(faculty.courseId, function (err, course) {
                        if (err) {
                            callback(err);
                        } else {
                            faculty.courseName = course.courseName;
                            var subjectService = new SubjectService();
                            subjectService.findByPk(faculty.subjectId, function (err, subject) {
                                if (err) {
                                    callback(err);
                                } else {
                                    faculty.subjectName = subject.subjectName;
                                    if (result == undefined) {
                                        var sql = "INSERT INTO st_faculty(FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,MOBILE_NO,ADDRESS,GENDER,COLLEGE_ID,COLLEGE_NAME,COURSE_ID,COURSE_NAME,SUBJECT_ID,SUBJECT_NAME,DOB,CREATED_BY,CREATED_DATETIME) " +
                                            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())"
                                        var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.password, faculty.mobileNo, faculty.address, faculty.gender, faculty.collegeId, faculty.collegeName, faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob, faculty.createdBy];
                                        var serv = new BaseService();
                                        serv.executeSQL(sql, params, function (err, result) {
                                            if (err) {
                                                callback(err);
                                            } else {
                                                callback(err, result.insertId);

                                            }

                                        })
                                    }
                                    else {
                                        result.message = "This record already exists";   
                                        callback(result);
                                    }
                                }
                            });

                        }
                    });
                }
            });
        });
    };

     update(faculty, callback) {
        var collegeService = new CollegeService();
        collegeService.findByPk(faculty.collegeId, function (err, college) {
            if (err) {
                callback(err);
            } else {
                faculty.collegeName = college.name;
                var courseService = new CourseService();
                courseService.findByPk(faculty.courseId, function (err, course) {
                    if (err) {
                        callback(err);
                    } else {
                        faculty.courseName = course.courseName;
                        var subjectService = new SubjectService();
                        subjectService.findByPk(faculty.subjectId, function (err, subject) {
                            if (err) {
                                callback(err);
                            } else {
                                faculty.subjectName = subject.subjectName;
                                    var sql = "UPDATE st_faculty SET FIRST_NAME=?,LAST_NAME=?,EMAIL=?,PASSWORD=?,MOBILE_NO=?,ADDRESS=?,GENDER=?,COLLEGE_ID=?,COLLEGE_NAME=?,COURSE_ID=?,COURSE_NAME=?,SUBJECT_ID=?,SUBJECT_NAME=?,DOB=?,MODIFIED_BY=?,MODIFIED_DATETIME = NOW() WHERE ID = ? "
                                    var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.password, faculty.mobileNo, faculty.address, faculty.gender, faculty.collegeId, faculty.collegeName, faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob, faculty.modifiedBy,faculty.id];
                                    var serv = new BaseService();
                                    serv.executeSQL(sql, params, function (err, result) {
                                        if (err) {
                                            callback(err);
                                        } else {
                                            callback(err, result.insertId);

                                        }

                                    })
                            }
                        });

                    }
                });
            }
        });
    }




  /**
     * Deletes a record.
     * 
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */

  delete(id, callback, ctx){
    super.delete(id, 'st_faculty', callback, ctx);

  }

}
module.exports = FacultyService;

    







