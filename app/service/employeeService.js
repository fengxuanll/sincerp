var Employee = require("../domain/employee");

export default class EmployeeService {
    constructor() {}

    GetUser(loginName, passWord) {
        var model = new Employee();
        model.LoginName = loginName;
        model.PassWord = passWord;
        return model;
    }
}