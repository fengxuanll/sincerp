var User = require("../domain/user");

export default class UserService {
    constructor() {}

    GetUser(loginName, passWord) {
        var model = new User();
        model.LoginName = loginName;
        model.PassWord = passWord;
    }
}