<template>
  <div  v-show="isShow" :style="win">
    <div class="wrap" >
       <p>修改密码<button type="submit" @click="cancel">X</button></p>
       <div class="pwd">
            <h5 class="pubtitle" style="margin-top:40px;margin-left:65px">*当前密码:</h5>
            <div class="pub-txt-bar" style="margin-top:40px;">
                <input id="mpass" type="text" class="shuruTxt" ref="currentPass">
            </div>
            <h5 style="margin-left:77px">*新密码:</h5>
            <div class="pub-txt-bar">
                <input id="newpass" type="text" class="shuruTxt" ref="newPass">
            </div>
            <h5 style="margin-left:65px">*确认密码:</h5>
            <div class="pub-txt-bar">
                <input id="renewpass" name="renewpass" type="text" class="shuruTxt" ref="confirmPass">
            </div>
            <div class="pub_btn">
                <input @click="sure" style="margin-left:150px;margin-right:30px" type="submit" name="Submit" id="" value="确定">
                <input style="background:#4664ad" type="submit" name="Submit" @click="cancel" value="取消">
            </div>
       </div>
    </div> 
  </div>
</template>
<script>
import Axios from "axios"
import crypto from "crypto"
export default {
  data(){
      return{
          win:{
              width:window.innerWidth+"px",
              height:window.innerHeight+"px",
              background:"rgba(255,255,255,0.6)",
              position:"fixed",
              zIndex:999,
              left:0,
              top:0
          },
          isShow:false
      }
  },
  methods:{ 
      cancel(){
         this.$emit("receive",this.isShow)
      },
      sure(){
          var oldpwd=this.$refs.currentPass.value
          var md5=crypto.createHash("md5").update(oldpwd).digest("base64")
          console.log(md5)
          var dbpwd=sessionStorage.getItem("pass")
          console.log(dbpwd)
          if(md5===dbpwd){
              if(this.$refs.newPass.value==this.$refs.confirmPass.value){
                  Axios({
                        url:"/api/Handler/AdminRegHandler?action=updatepass",
                        method:"post",
                        data:{
                            password:this.$refs.currentPass.value,
                            newpass:this.$refs.newPass.value
                        }
                    }).then(res=>{
                        if(res.data.success){
                            alert(res.data.success)
                            this.$router.push("/")
                        }
                    })
                }else{
                    alert("修改失败")
                }
              }else{
                  alert("两次输入密码不正确")
              }
      }

  },
  mounted(){
      

  }
}
</script>
<style>
.wrap{
    width: 480px;
    height: 300px;
    background: #4664ad;
    margin: 170px auto;
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
