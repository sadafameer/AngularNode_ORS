var CollegeService = require("../services/CollegeService");
var MarksheetService = require("./MarksheetService");
var RoleService = require("../services/RoleService");
var StudentService = require("../services/StudentService");
var UserService = require("../services/UserService");
var FacultyService = require("../services/FacultyService");
var CourseService = require("../services/CourseService");
var SubjectService = require("../services/SubjectService");
var TimetableService = require("../services/TimetableService");
/**
 * Locate service 
 */
class ServiceLocator {

  constructor() {
    this.db = 'MySQL';
  }
  static getCollegeService() {
    return new CollegeService();
  }
  static getMarksheetService() {
    return new MarksheetService();
  }
  static getRoleService() {
    return new RoleService();
  }
  static getStudentService() {
    return new StudentService();
  }
  static getUserService() {
    return new UserService();
  }
static getFacultyService() {
     return new FacultyService();
}
static getCourseService(){
    return new CourseService();
}
static getSubjectService(){
  return new SubjectService();
}
static getMarksheetService(){
  return new MarksheetService();
}
static getTimetableService(){
  return new TimetableService();
}
}
module.exports = ServiceLocator;