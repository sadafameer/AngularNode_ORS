var Student = require("../bean/Student");
var BaseService = require("./BaseService");
var CollegeService = require("./CollegeService");


class StudentService extends BaseService {

    /**
     *Finds student by primary key id
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_student WHERE ID= ?";
        var params = [id];
        console.log('findByPk--');
        super.executeSQLForObject(sql, params, new Student(), callback);
    };

    /**
     * Search student by CollegeId,CollegeName,FirstName,LastName,DateOfBirth
     * MobileNo,Email
     * returns Student Object
     * @param {*} student 
     * @param {*} callback 
     */
    search(student, pageNo, pageSize, callback, ctx) {
        var sql = "SELECT * FROM st_student where 1=1 ";
        if (student.collegeId) {
            sql += " and COLLEGE_ID = '" + student.collegeId + "'";
        }
        if (student.collegeName) {
            sql += " and COLLEGE_NAME like '" + student.collegeName + "%'";
        }
        if (student.firstName) {
            sql += " and FIRST_NAME like '" + student.firstName + "%'";
        }
        if (student.email) {
            sql += " and EMAIL like '" + student.email + "%'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo,"pageSize":pageSize }, new Student(), callback);

    }

    /**
     * Adds a record and returns primary key
     * @param {*} student 
     * @param {*} callback 
     * @param {*} ctx 
     */
     add(student, callback) {
        var sql = "SELECT * FROM st_student WHERE EMAIL =?";
        var params = [student.email];
        super.executeSQLForObject(sql, params, new Student(), function (err, result) {
            if (result == undefined) {
 var sql = "INSERT INTO st_student (CREATED_DATETIME,MODIFIED_DATETIME,COLLEGE_ID,COLLEGE_NAME,FIRST_NAME,LAST_NAME,DOB,MOBILE_NO,EMAIL) "
            + " VALUES (NOW(),NOW(),?,?,?,?,?,?,?)";
        var params = [student.collegeId, student.collegeName, student.firstName,
        student.lastName, student.dob, student.mobileNo, student.email];
       
                var serv = new BaseService();
                serv.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.insertId);
                    }
                });
            } else {
                result.message = "This record already exists";
                callback(result);
            }
        });
    }

    /**
     * Update a record
     * return count.
     * @param {*} student 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(student, callback, ctx) {
        var sql = "UPDATE st_student SET  MODIFIED_DATETIME = NOW(), COLLEGE_ID=?,COLLEGE_NAME=?,FIRST_NAME=?,LAST_NAME=?,DOB=?,MOBILE_NO=?,EMAIL=?  WHERE ID=?"
        var params = [student.collegeId, student.collegeName, student.firstName,
        student.lastName, student.dob, student.mobileNo, student.email, student.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var cService = new CollegeService();
                cService.findByPk(student.collegeId, function (cErr, college) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_student SET COLLEGE_NAME =? WHERE ID = ?";
                        var params = [college.name, student.id];
                        cService.executeSQL(upateSql, params, function (cErr, cResult) {
                            callback(err, result.affectedRows);
                        });
                    }
                }, ctx);

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
    delete(id, callback, ctx) {
        super.delete(id, 'st_student', callback, ctx);
    }

}
module.exports = StudentService;