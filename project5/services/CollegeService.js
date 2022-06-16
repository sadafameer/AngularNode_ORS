var College = require("../bean/College");
var BaseService = require("./BaseService");

class CollegeService extends BaseService {

    /**
     * Finds college by primary key id
     * returns College object
     */

    /**
    * Finds record by primary key id
    */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_college WHERE ID= ?";
        var params = [id];
        console.log('findByPk "College"--');
        super.executeSQLForObject(sql, params, new College(), callback);
    };
    /**
    * Searches and returns list. Applies pagination as well.
     * 
     * @param {*} college 
     * @param {*} callback 
     */
    search(college, pageNo, pageSize, callback, ctx) {

        var sql = "SELECT * FROM st_college where 1=1 ";

        if (college.name) {
            sql += " and NAME like  '" + college.name + "%'";
        }
        if (college.city) {
            sql += "and CITY like '" + college.city + "%'";
        }
        if (college.phoneNo) {
            sql += "and PHONE_NO='" + college.phoneNo + "'";
        }
        if (college.state) {
            sql += "and STATE like '" + college.state + "%'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize }, new College(), function(err, list) {
            callback(err, list);
        });
    }




    
    /**
     * Adds a college and returns primary key
     * 
     * @param {*} college 
     * @param {*} callback 
     * @param {*} ctx 
     */

     add(college, callback) {
        var sql = "SELECT * FROM st_college WHERE NAME =?";
        var params = [college.name];
        super.executeSQLForObject(sql, params, new College(), function (err, result) {
            if (result == undefined) {
                  var sql = "INSERT INTO st_college (CREATED_DATETIME,MODIFIED_DATETIME,NAME,ADDRESS,STATE,CITY,PHONE_NO) "
            + " VALUES (NOW(),NOW(),?,?,?,?,?)";
        var params = [college.name, college.address, college.state,
        college.city, college.phoneNo];
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
     * Updates a college 
     * @param {*} college 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(college, callback, ctx) {
        var sql = "UPDATE st_college SET  MODIFIED_DATETIME = NOW(),NAME=?,ADDRESS=?,STATE=?,CITY=?,PHONE_NO=?  WHERE ID=?"
        var params = [college.name, college.address, college.state,
        college.city, college.phoneNo, college.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        });
    }

    /**
     * Delete a college and return deleted bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback, ctx) {
        super.delete(id, 'st_college', callback, ctx);
    }
}

//Export college service
module.exports = CollegeService;