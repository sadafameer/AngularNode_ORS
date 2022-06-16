var BaseCtl = require("../controller/BaseCtl");
var College = require("../bean/College");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains College REST APIs
 */
class CollegeCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getCollegeService();
    }
    /**
     * Returns preload data.
     * 
     * @param {*} request 
     * @param {*} response 
     */

    /**
     * Returns Validate data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
        if(!body.name){
            result.inputerror.name = "College Name is required";
            pass= false;
        }
        if(!body.address){
            result.inputerror.address = "College Address is required";
            pass= false;
        }
        if(!body.state){
            result.inputerror.state = "College State is required";
            pass= false;
        }
        
        if(!body.phoneNo){
            result.inputerror.phoneNo = "College PhoneNo is required";
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
        var college = new College();
        college.populateRequest(request.body);
        return college;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = CollegeCtl;
