<template>
  <div :style="win">
      <div class="wrap">
            用户名：<input type="text" name="userName" ref="username">
            <br><br>
            姓名：<input type="text" name="truename" ref="truename">
            <br><br>
            手机号：<input type="text" name="phone" ref="phone">
            <br><br>
            权限选择:<select name="power" ref="power">
                <option >系统管理员</option>
                <option>课程管理员</option>
            </select>
            <br><br>
            <input type="submit" @click="add"/>
            <input type="button" @click="cancel" value="取消"/> 
      </div>
  </div>
</template>
<script>
import Axios from "axios"
//父传子

export default {
  props:['addauth',"token","info"],
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
          isShow:false,
          cleartoken:""
      }
  },
  
  methods:{
    cancel(){
       this.$emit("receive",this.isShow) 
    },
    add(){
        this.$emit("clear",this.cleartoken)
        Axios({
            url:this.token?'/api/Handler/AdminRegHandler?action=update':'/api/Handler/AdminRegHandler?action=add',
            method:"post",
            data:{
                userName:this.$refs.username.value,
                truename:this.$refs.truename.value,
                phone:this.$refs.phone.value,
                password:"123456",
                power:this.$refs.power.value,
            }
        }).then(res=>{
            if(res.data.success){
                this.token=""
                this.addauth()
                this.cancel()
            }
        }) 
    },
  },
  
  mounted(){
    //   console.log(this.token)
      document.body.style.background="#fff"
      if(this.token){
          this.$refs.username.value=this.info.username
          this.$refs.truename.value=this.info.truename
          this.$refs.phone.value=this.info.phone;
          this.info.tokenId=""
      }else{
          this.$refs.username.value="" 
          this.$refs.truename.value=""
          this.$refs.phone.value="" 
      } 
    //   console.log(this.info.username)
  },
  
}
</script>
<style>
.wrap{
    width: 500px;
    /* height: auto;
    margin: 100px auto */
}
</style>
