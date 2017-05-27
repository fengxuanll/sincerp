 //var UserService = require("../service/userservice");

 $$(function () {
     // 如果是已登录状态，跳转到首页
     document.getElementById("loginName").focus();
 });

 var $vm = new Vue({
     el: "#loginForm",
     data: {
         loginName: "",
         passWord: ""
     },
     methods: {
         loginFn: function () {
             // var userService = new UserService();
             // alert(userService.GetUser().Id);
             return false;
         }
     }
 });

 layui.use(['form', 'layer'], function () {
     var form = layui.form(),
         layer = layui.layer;

     //监听提交
     form.on('submit(login)', $vm.loginFn);
 });