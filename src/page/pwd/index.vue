<template>
  <div>
    <div class="wrap">
       <p>修改密码<button type="submit">X</button></p>
       <div class="pwd">
            <h5 class="pubtitle" style="margin-top:40px;margin-left:65px">*当前密码:</h5>
            <div class="pub-txt-bar" style="margin-top:40px;">
                <input id="mpass" name="mpass" type="password" class="shuruTxt">
            </div>
            <h5 style="margin-left:77px">*新密码:</h5>
            <div class="pub-txt-bar">
                <input id="newpass" name="newpass" type="password" class="shuruTxt">
            </div>
            <h5 style="margin-left:65px">*确认密码:</h5>
            <div class="pub-txt-bar">
                <input id="renewpass" name="renewpass" type="password" class="shuruTxt">
            </div>
            <div class="pub_btn">
                <input style="margin-left:150px;margin-right:30px" type="submit" name="Submit" onClick="return check();" id="" value="确定">
                <input style="background:#4664ad" type="submit" name="Submit" onClick="return check();" id="" value="取消">
            </div>
       </div>
    </div> 
  </div>
</template>
<script>
import "../../css/common.css"
import "../../css/font-awesome-4.7.0/css/font-awesome.min.css"
export default {
  
}
</script>
<style>
body{
    width: 100%;
    height: 100%;
    background:rgba(255, 255, 255, .3)
}
.wrap{
    width: 480px;
    height: 300px;
    background: #4664ad;
    margin: 170px auto;
    overflow: hidden;
}
.wrap p{
    width: 100%;
    font-size: 12px;
    color: white;
    margin-left: 10px;
    margin-top: 12px;
}
.wrap p button{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    float: right;
    margin-right: 18px;
    background: rgba(255, 255, 255, .6);
    border: none;
    font-size: 12px;
    color: #4664ad;
    font-weight: bold;
}
.wrap .pwd{
    width: 470px;
    height: 258px;
    background: white;
    margin: 10px auto;
}
.wrap .pwd>div,h5{
    float: left;
}
.wrap h5{
    color: #2c2d32;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    margin-right: 5px;
}
.pwd .shuruTxt{
    width: 300px;
    height: 24px;
    border: 1px solid #c8c2bb;
    padding-left: 10px;
    margin-bottom: 10px;
}
.pwd .pub_btn input{
    background: #46c540;
    color: white;
    width: 80px;
    height: 30px;
    border: none;
    margin-top: 20px;
}
</style>
