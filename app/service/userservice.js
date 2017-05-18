import {
    User
} from "../domain/user";

export default class UserService {
    constructor() {}

    GetUser(loginName, passWord) {
        var model = new user();
        model.LoginName = loginName;
        model.PassWord = passWord;
    }
}