<template>
  <div>
    <div class="header">
      <img src="../../../static/images/logo.png" alt="翡翠学院">
      <h1>翡翠学院后台<br><span>the sysmaster of feicuischool</span></h1>
    </div>
    <div class="login">
      <div class="user">
        <i class="fa user-o"></i>
        <input type="text" placeholder="用户名">
      </div>
      <div class="pwd">
        <i></i>
        <input type="password" placeholder="密码">
      </div>
      <div class="code">
        <i></i>
        <input style="width:270px" type="text" placeholder="验证码">
        <div class="yzm">aaa</div>
      </div>
      <div class="bot" style="border:none;">
        <input class="forget" type="button" name="" id="" value="忘记密码?">
        <input class="log" type="submit" name="" id="" value="登录" >
      </div>
    </div>
  </div>
</template>
<script>
import "../../css/common.css"
import "../../css/login.css"
import "../../css/font-awesome-4.7.0/css/font-awesome.min.css"
export default {
  
}
</script>
<style>
.login i{
  font-size: 14px;
  color: white;
  z-index: 999;
}
</style>
