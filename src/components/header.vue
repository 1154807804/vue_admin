<template>
  <div>                             
    <Pwd @receive="authshow" v-show="restShow"></Pwd>
    <div class="top">
        <div class="inner">
            <div class="left">
                <img src="../../static/images/logo.png" alt="翡翠学院">
                <h1>翡翠学院后台<br><span>the sysmaster of feicuischool</span></h1>
            </div>
            <div class="right">
                <ul>
                    <li><i class="fa fa-camera-retro fa-lg"></i>卓新思创</li>
                    <li><i class="fa fa-camera-retro fa-lg"></i>在线客服</li>
                    <li><i class="fa fa-camera-retro fa-lg"></i>常见问题</li>
                    <li @click="safe"><i class="fa fa-camera-retro fa-lg"></i>安全中心</li>
                    <li @click="quit"><i class="fa fa-camera-retro fa-lg"></i>退出</li>
                    <li>{{userName}}</li>
                    <img style="margin-left:3px;height:50px;width:50px" src="../../static/images/logo.png" alt="">
                </ul>
            </div>
        </div>
    </div>
    <div class="nav">
        <div class="inner">
            <ul>
                <!-- <router-link to="/adminlist"> -->
                <a href="/adminlist">
                    <li><i class="fa fa-camera-retro fa-lg"></i>用户管理</li>
                </a>
                <!-- </router-link> -->
                <li><i class="fa fa-camera-retro fa-lg"></i>课程管理</li>
                <li><i class="fa fa-camera-retro fa-lg"></i>统计报表</li>
                <li><i class="fa fa-camera-retro fa-lg"></i>其他管理</li>
                <li><i class="fa fa-camera-retro fa-lg"></i>数据字典</li>
                <li><i class="fa fa-camera-retro fa-lg"></i>系统维护</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Pwd from "./pwd.vue"
import Axios from "axios"
import vm from "./bus"
import "../css/common.css"
import "../css/font-awesome-4.7.0/css/font-awesome.min.css"
export default {
    components:{Pwd},
    data(){
        return{
            userName:"",
            restShow:false,
            adminList:false,
        }
    },
    methods:{
        getInfo(){
            Axios({
                url:"/api/Handler/AdminLoginHandler?action=returninfo",
                method:"get"
            }).then(res=>{
                console.log(res)
                this.userName=res.data.data.userName
                sessionStorage.setItem("pass",res.data.data.password)
            })
        },
        //退出
        quit(){
            Axios({
                url:"/api/Handler/AdminLoginHandler?action=quit",
                method:"get"
            }).then(res=>{
                if(res.data.success){
                    alert(res.data.success)
                    this.$router.push("/")
                }
            })
        },
        safe(){
            this.restShow=true
        },
        authshow(val){
            console.log(val)
            this.restShow=val
        }
    },
    mounted(){
        this.getInfo()
    }
}
</script>

<style>
.top{
    height: 50px;
    background: #262626;
}
.inner{
    width: 1300px;
    margin: 0 auto;
}
.left{
    float: left;
    color: white
}
.left img{
    float: left;
    margin-top: 5px;
}
.left h1{
    width: 210px;
    float: left;
    font-size: 22px;
    font-weight: normal;
    margin-left: 10px;
    position: relative;
}
.left span{
    font-size: 10px;
    position: absolute;
    top: 31px;
}
.right{
    float: right;
}
.right li{
    float: left;
    color: #9f9b95;
    font-size: 12px;
    line-height: 50px;
    margin-left: 30px;
    cursor: pointer;
}
.right i{
    color: #9f9b95;
    font-size: 12px;
    margin-right: 5px;
}
.nav{
    height: 52px;
    background: #335089;
}
.nav ul{
    margin-left: 148px;
}
.nav li{
    float: left;
    color: white;
    font-size: 14px;
    line-height: 52px;
    margin-right: 60px;
    cursor: pointer;
}
.nav i{
    color: white;
    font-size: 14px;
    margin-right: 11px;
    vertical-align: middle
}
</style>