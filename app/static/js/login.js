// var UserService = require("../service/userservice");

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
            // let user = db.model('user', {
            //     loginName: String, // type shorthand
            //     passWord: String,
            //     status: Number,
            //     id: 'increments' // special type
            // });
            // user.create({
            //         loginName: this.loginName,
            //         passWord: this.passWord,
            //         status: 1
            //     })
            //     .then(function () {
            //         let overwatch = user.findOne({
            //             loginName: this.loginName
            //         });
            //         console.log(overwatch.status)
            //     });
            // return;

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

            // var userService = new UserService();
            // alert(userService.GetUser().Id);
        }
    }
});