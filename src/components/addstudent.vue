<template>
  <div :style="win">
      <div class="wrap">
            用户名：<input type="text" name="userName" ref="username">
            <br><br>
            手机号：<input type="text" name="phone" ref="phone">
            <br><br>
            邮箱：<input type="text" name="email" ref="email">
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
    
    add(){
        this.$emit("clear",this.cleartoken)
        Axios({
            url:this.token?'/api/Handler/studentHandler?type=addStudent':'/api/Handler/studentHandler?type=updateStudent',
            method:"post",
            data:{
                username:this.$refs.username.value,
                phone:this.$refs.phone.value,
                email:this.$refs.email.value,
            }
        }).then(res=>{
            if(res.data.success){
                this.token=""
                this.addauth()
                this.cancel()
                // console.log(res)
            }
        }) 
    },
    cancel(){
       this.$emit("receive",this.isShow) 
    }
  },
  
  mounted(){
      document.body.style.background="#fff"
      if(this.token){
          this.$refs.username.value=this.info.username
          this.$refs.phone.value=this.info.phone;
          this.$refs.email.value=this.info.email;
          this.info.tokenId=""
      }else{
          this.$refs.username.value="" 
          this.$refs.phone.value=""
          this.$refs.email.value="" 
      }
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
