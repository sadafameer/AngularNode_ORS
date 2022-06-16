var BaseCtl = require("../controller/BaseCtl");
var Role = require("../bean/Role");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains Role REST APIs
 */
class RoleCtl extends BaseCtl{

    constructor(){
        super();
        this.service = ServiceLocator.getRoleService();
    }
    /**
     * Returns Validate data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
      
        if(!body.name){
            result.inputerror.name = "Role name is required";
            pass= false;
        }
        if(!body.description){
            result.inputerror.description = "Role description is required";
            pass= false;
        }
        
        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**
     * Return bean of Role controller.
     * @param {*} request 
     */
    getBean(request){
        var role = new Role();
        role.populateRequest(request.body);
        return role;
    };
    /**
     * return service of Role controller.
     */
    getService(){
        return this.service;
    };
}

module.exports = RoleCtl;
