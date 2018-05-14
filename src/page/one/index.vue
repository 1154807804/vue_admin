<template>
  <div>
      <Header></Header>
      <div class="inner">
          <div class="class">
              <ul>
                <li>
                    <h1>课程列表</h1>
                    <h2>Course List</h2>
                    <p><i class="fa fa-camera-retro fa-lg"></i></p>
                </li>
                <li>
                    <h1>课程添加</h1>
                    <h2>Course Add</h2>
                    <p><i class="fa fa-camera-retro fa-lg"></i></p>
                </li>
                <li>
                    <h1>课程置顶</h1>
                    <h2>Course Up</h2>
                    <p><i class="fa fa-camera-retro fa-lg"></i></p>
                </li>
                <li>
                    <h1>视频管理</h1>
                    <h2>Video Manage</h2>
                    <p><i class="fa fa-camera-retro fa-lg"></i></p>
                </li>
                <li>
                    <h1>用户管理</h1>
                    <h2>User Manage</h2>
                    <p><i class="fa fa-camera-retro fa-lg"></i></p>
                </li>
                <li style="margin-right:0">
                    <h1>学员管理</h1>
                    <h2>Student Manage</h2>
                    <p><i class="fa fa-camera-retro fa-lg"></i></p>
                </li>
            </ul>
          </div>
          
      </div>
      <div class="inner">
        <div class="table">
           <ul>
            <li></li>
            <li style="width:530px"></li>
           </ul>
        </div>
      </div>
  </div>
</template>
<script>
import "../../css/common.css"
import "../../css/font-awesome-4.7.0/css/font-awesome.min.css"
import Header from "../../components/header.vue"
export default {
   components:{Header}
}
</script>
<style>
body{
    background: #546196
}
.inner{
    width: 1242px;
    margin: 0 auto;
}
.class{
    width: 100%;
    height: 258px;
    margin-top: 56px;
}
.class li{
    float: left;
    width: 162px;
    height: 202px;
    background: rgba(255, 255,255, .2);
    margin-right: 54px;
    cursor: pointer;
}
.class li:hover{
    background: #1cb4e5
}
.class li h1{
    margin-top: 40px;
    font-size: 22px;
    font-weight: normal;
    color: white;
    text-align: center;
}
.class li h2{
    margin-top: 15px;
    font-size: 10px;
    font-weight: normal;
    color: white;
    text-align: center;
}
.class li p{
    margin-top: 30px;
    text-align: center;
}
.class li i{
    font-size: 30px;
    color: white;
}

/* 表 */
.table{
    height: 500px;
}
.table li{
    margin-top: 30px;
    float: left;
    width: 400px;
    height: 360px;
    background: white;
    margin-right: 50px;
}
</style>
