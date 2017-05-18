import {
    UserService
} from "../service/userservice";

$(function () {
    document.getElementById("loginName").focus();
});

var $vm = new Vue({
    el: "#app",
    data: {
        loginName: "",
        passWord: ""
    },
    methods: {
        loginFn: function () {
            this.loginName = $.trim(this.loginName);
            if (this.loginName == "") {
                document.getElementById("loginName").focus();
                alert("请输入登录名。");
                return;
            }
            if (this.passWord == "") {
                document.getElementById("passWord").focus();
                alert("请输入密码。");
                return;
            }

            var userService = new UserService();
            alert(userService.GetUser().Id);
        }
    }
});