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
            var db = new sqlite3.Database("/db/sincerp.sqlite3", function () {
                db.all("select * from user where loginName = ? and passWord = ?", [this.loginName, this.passWord], function (err, row) {
                    alert(row.id);
                })
            });
        }
    }
});