var $vm = new Vue({
    el: "#app",
    data: {
        loginName: "",
        passWord: ""
    },
    methods: {
        loginFn: function () {
            alert(this.loginName);
        }
    }
});