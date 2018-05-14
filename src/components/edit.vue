<template>
  <div :style="win" v-show="isShowe">
      <div class="wrap">
          我是编辑<br>
            用户名：<input type="text" name="userName" ref="userName">
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
            <input type="submit" @click="edit"/>
            <input type="button" @click="cancel" value="取消"/>
      </div>
  </div>
</template>
<script>
import Axios from "axios"
export default {
  props:['addauthe','id'],
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
          isShowe:false
      }
  },
  methods:{
    edit(){
       console.log(this.id)
       Axios({
            url:"/api/Handler/AdminRegHandler?action=update",
            method:"post",
            data:{
                userName:this.$refs.userName.value,
                truename:this.$refs.truename.value,
                phone:this.$refs.phone.value,
                power:this.$refs.power.value
            }
        }).then(res=>{
            
        })
    },
    cancel(){
       this.$emit("receive",this.isShowe) 
    }
  },
  mounted(){
      document.body.style.background="#fff"
  }
}
</script>
<style>
.wrap{
    width: 500px;
    height: auto;
    margin: 20px auto
}
</style>
