var Course = require("../bean/Course");
var BaseService = require("./BaseService");

class CourseService extends BaseService {

    /**
     * Finds role by primary key id
     * 
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_course WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Course(), callback);
    };

    /**
     * Search role by Name
     * 
     * @param {*} role 
     * @param {*} callback 
     */
    search(course, pageNo, pageSize, callback, ctx) {
        var sql = "SELECT * FROM st_course where 1=1 ";

        if (course.courseName) {
            sql += " and COURSE_NAME like '" + course.courseName + "%'";
        }

        if (course.courseDescription) {
            sql += " and COURSE_DESCRIPTION like '" + course.courseDescription + "%'";
        }
        if (course.courseDuration) {
            sql += " and COURSE_DURATION ='" + course.courseDuration + "'";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize}, new Course(), function (err, list) {
            callback(err, list);
        });
    }
    /**
     * Adds a record and returns primary key
     * 
     * @param {*} role 
     * @param {*} callback 
     * @param {*} ctx 
     */

     add(course, callback) {
        var sql = "SELECT * FROM st_course WHERE COURSE_NAME =?";
        var params = [course.courseName];
        super.executeSQLForObject(sql, params, new Course(), function (err, result) {
            if (result == undefined) {
                  var sql = "INSERT INTO st_course (CREATED_DATETIME,MODIFIED_DATETIME,COURSE_NAME,COURSE_DESCRIPTION,COURSE_DURATION) " + " VALUES (NOW(),NOW(),?,?,?)";
            console.log("Inside add method");
            var params = [course.courseName, course.courseDescription, course.courseDuration];
       
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
     * Updates a record and returns count.
     * @param {*} role 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(course, callback, ctx) {
        var sql = "UPDATE st_course SET MODIFIED_DATETIME = NOW(), COURSE_NAME=?, COURSE_DESCRIPTION=?, COURSE_DURATION=? WHERE ID=?";
        var params = [course.courseName, course.courseDescription, course.courseDuration, course.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        });
    }

    /**
     * Deletes record and return role bean.
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback, ctx) {
        super.delete(id, 'st_course', callback, ctx);
    }
}

module.exports = CourseService;