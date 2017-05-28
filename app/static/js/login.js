'use strict';

var EmployeeService = require("../service/employeeService");

 $$(function () {
     // 如果是已登录状态，跳转到首页
     if (false) {
         location.href = "index.html";
     }
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
             let service = new EmployeeService();
             alert(JSON.stringify(service.GetUser(this.loginName, this.passWord)));

             return false;
         }
     }
 });

 layui.use(['form'], function () {
     var form = layui.form()
     //监听提交
     form.on('submit(login)', $vm.loginFn);
 });