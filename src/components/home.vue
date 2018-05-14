<template>
  <div id="home">
      <div>
        <Header></Header>
      </div>
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
                <a href="/user">
                    <li style="margin-right:0">
                        <h1>学员管理</h1>
                        <h2>Student Manage</h2>
                        <p><i class="fa fa-camera-retro fa-lg"></i></p>
                    </li>
                </a>
            </ul>
          </div>
          
      </div>
      <div class="inner">
        <div class="table">
           <ul>
            <li ref="chart01" id="chart01"></li>
            <li ref="chart02" id="chart02" style="width:530px"></li>
            <li></li>
           </ul>
        </div>
      </div>
  </div>
</template>
<script>
import vm from "./bus"
import "../css/common.css" 
import "../css/font-awesome-4.7.0/css/font-awesome.min.css"
import Header from "./header.vue"
import Echarts from 'echarts'
// import Pwd from "./pwd.vue"

export default {
   components:{Header},
   data(){
        return{
          pwd:"",
          chartOne:""

        }
    },
    
    methods:{
    },
    mounted(){
        //图1  初始化
        this.chartOne = Echarts.init(document.getElementById("chart01"));
        // this.chartOne=document.getElementById("chart01")
        this.chartOne.setOption({
            title : {
                text: '学习人数比例',
                subtext: '',
                x:'center'
            },
            tooltip:{
                //formatter  悬浮框数据
                formatter: "{a} <br/>{b} : {c}%"
            },
            //工具箱
            toolbox:{
                show : true,
                feature : {
                    mark : {show: true},
                    restore : {show: false},
                    saveAsImage : {show: false}
                }
            },
            series:[
                {
                    name:'比例',
                    type:'gauge',
                    detail : {formatter:'{value}%'},
                    data:[{value: 80, name: '完成率'}]
                }
            ],
        })
        //图2
        this.chartTwo = Echarts.init(document.getElementById("chart02"));
        // this.chartOne=document.getElementById("chart01")
        this.chartTwo.setOption({
            title : {
                text: '考试通过率',
                subtext: '',
                x:'center',
                textStyle: {  
                    fontWeight: 'normal',              //标题颜色  
                    color: 'lightblue'  
            },
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: false},
                    dataView : {show: false, readOnly: false},
                    restore : {show: false},
                    saveAsImage : {show: false}
                }
            },
            color:["blue","lightblue"],
            calculable : false,
            series : [
                {
                    // name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:30,name:'已通过'},
                        {value:25,name:'未通过'}
                    ]
                }
            ]
        })

    }
}
</script>
<style>
/* body{
    background: #546196
} */
#home{
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
    background: rgba(255,255,255, .2);
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
    /* height: 500px; */
    overflow: hidden;
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
