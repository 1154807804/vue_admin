<template>
  <div>
      <canvas id="canvas" width="100%" height="36" @click="changeVeri"></canvas>
  </div>
</template>
<script>
// 获取canvas元素
// 绘制绘图环境2D
// 四方面
// 1绘制矩形
// 1.1rect()  x  y  w  h
// 1.2填充颜色  fillstyle=""
// 2绘制小点
// 2.1  arc()   x  y  o  r  2pi   false
// 3绘制干扰线
// 3.1 line    
// 4绘制文字
// 4.1font

// $ajax({
//     url:"",
//     type:"",
//     async:""
// })
import Axios from "axios"
export default {
  data(){
      return{
          canvas:"",
          width:"",
          height:""
      }
  },
  methods:{
      randomNum(min,max){
          return Math.floor(Math.random()*(max-min)+min)
      },
      randomColor(min,max){
         var r=this.randomNum(min,max)
         var g=this.randomNum(min,max)
         var b=this.randomNum(min,max)
         return 'rgb('+r+','+g+','+b+')'
      },
      changeVeri(){
          Axios({
              url:"api/Handler/AdminLoginHandler?action=veri", 
              method:"get"
          }).then(res=>{
              this.drawpic(res.data.data)
              console.log(res.data.data)
          })

        //   this.drawpic()
          
      },
      //绘制干扰因素封装函数
      drawpic(txt){
          //绘制矩形
        this.ctx.fillStyle=this.randomColor(180,250);
        this.ctx.fillRect(0,0,this.width,this.height)
        //绘制干扰线
        for(var i=0;i<5;i++){
            this.ctx.strokeStyle=this.randomColor(100,150)
            this.ctx.beginPath();
            this.ctx.moveTo(this.randomNum(0,this.width),this.randomNum(0,this.height))
            this.ctx.lineTo(this.randomNum(0,this.width),this.randomNum(0,this.height))
            this.ctx.lineWidth=1;
            this.ctx.closePath();
            this.ctx.stroke()
        }
        //绘制干扰点
        for(var i=0;i<50;i++){
            this.ctx.fillStyle=this.randomColor(150,200)
            this.ctx.beginPath();
            this.ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height),1,0,Math.PI*2,false)
            this.ctx.fill()
            this.ctx.closePath();
        }
        //绘制文字
        // var str = 'ABCEFGHJKLMNPQRSTWXY123456789';

        for(var i=0;i<4;i++){
            // var text = str[this.randomNum(0,str.length)];

            var text=txt[i];
            this.ctx.fillStyle=this.randomColor(50,160);
            this.ctx.beginPath()
            this.ctx.font=this.randomNum(16,30)+"px SimHei"
            var x=15*i+20
            var y=this.randomNum(18,25)
            var deg=this.randomNum(-30,30)
            // this.ctx.rotate(deg*Math,PI*2)
            this.ctx.fillText(text,x,y)
            this.ctx.fill()
            this.ctx.closePath()
        }
      }
  },
  mounted(){
      console.log(this.randomColor(100,255))
      this.canvas=document.getElementById('canvas')
      this.width=this.canvas.width
      this.height=this.canvas.height
      this.ctx=this.canvas.getContext("2d")
      this.changeVeri()
  }
}
</script>
<style>

</style>
