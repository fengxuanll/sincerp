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
            // var db = new sqlite3.Database("/db/sincerp.sqlite3", function () {
            //     db.all("select * from user where loginName = ? and passWord = ?", [this.loginName, this.passWord], function (err, row) {
            //         alert(row.id);
            //     })
            // });

            var sequelize = new Sequelize('sincerp', null, null, {
                host: 'localhost',
                dialect: 'sqlite',
                pool: {
                    max: 20,
                    min: 0,
                    idle: 10000
                },
                storage: 'db/sincerp.sqlite3'
            });

            var User = sequelize.define('user', {
                id: Sequelize.INTEGER,
                loginName: Sequelize.STRING,
                passWord: Sequelize.STRING,
                status: Sequelize.INTEGER
            });
            User.findAll({
                where: {
                    loginName: this.loginName,
                    passWord: this.passWord
                }
            }).then(function (result) {
                if (result.length == 1) {
                    alert("登录成功");
                } else {
                    alert(result);
                }
            });
        }
    }
});