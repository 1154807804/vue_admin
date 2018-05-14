<template>
  <div>
      <Header></Header>
      <div class="inner">
        <div class="tit">
           <div style="width:250px;float:left;height:40px;margin-left:-990px">
            <span class="now">首页</span>
            <span>/用户管理</span>
            <span>/系统人员</span>
           </div>
        </div>
        <div class="findwrap">
            <input  type="text" placeholder="模糊查找 姓名">
            <button class="sear">查询</button>
            <button class="add">+添加</button>
        </div>
        <div class="table">
            <div class="list">
                <div style="width:34px;border-right:1px solid #d1cfc9"><i>aa</i></div>
                <div style="padding-left:14px">系统人员列表</div>
            </div>
            <div class="list tit">
                <div class="t_1 border">用户名</div>
                <div  class="t_2 border">姓名</div>
                <div class="t_1 border">后台权限</div>
                <div class="t_1 border">手机</div>
                <div class="t_1 border">编辑日期</div>
                <div class="t_1">操作</div>
            </div>
            <div class="list tit cont">
                <div class="t_1">用户名</div>
                <div  class="t_2">姓名</div>
                <div class="t_1">后台权限</div>
                <div class="t_1">手机</div>
                <div class="t_1">编辑日期</div>
                <div class="t_1">
                    <button>编辑</button>
                    <button>删除</button>
                </div>
            </div>
            <div class="list tit cont">
                <div class="t_1">用户名</div>
                <div  class="t_2">姓名</div>
                <div class="t_1">后台权限</div>
                <div class="t_1">手机</div>
                <div class="t_1">编辑日期</div>
                <div class="t_1">
                    <button>编辑</button>
                    <button>删除</button>
                </div>
            </div>
        </div>
        <div class="page">
            <button style="margin-left:5px;margin-right:10px">|<<</button>
            <button><<</button>
            <span>
                跳转到第
                <input type="text" value="1">
                <button class="ad">+</button>
                <button class="jian">-</button>
                页
                <button style="width:35px">Go</button>
                /共
                <span>2</span>
                页
                <span>【4】条</span>
            </span>
            <button style="margin-left:5px;margin-right:10px">>></button>
            <button>>>|</button>
            <span>1-3</span>
        </div>
      </div> 
  </div>
</template>
<script>
import Header from "../../components/header.vue"
export default {
   components:{Header}
}
</script>
<style>
body{
    background: #f6f6f3;
}
.inner{
    width: 1333px;
    margin: 0 auto;
}
.tit .now{
    color: #127fd0;
}
.tit{
    height: 45px;
    line-height: 45px;
}
.tit span{
    font-size: 14px;
    color: #75736e
}
.findwrap{
    width: 100%;
    height: 56px;
    border: 1px solid #d1cfc9;
    background: white;
}
.findwrap input{
    width: 560px;
    height: 34px;
    border: 1px solid #c5c1bb;
    padding-left: 5px;
    margin-left: 10px;
    margin-top: 10px;
    float: left;
}
.findwrap button{
    height: 34px;
    width: 113px;
    background: #4664ad;
    border: none;
    color: white;
    margin-top: 10px;
    margin-left: 10px;
}
.findwrap .sear{
    background: #1fbb5c;
}
.findwrap .add{
    float: right;
    margin-right: 20px;
}
.table{
    margin:14px auto;
    width:100%;
    height: 330px;;
    border:1px solid #d1cfc9;
    background: white;
}
.table>div{
    height: 38px;
    line-height: 38px;
    color: #666460;
    font-size: 14px;
    background: white;
    border:1px solid #d1cfc9
}
.table>div>div{
    float: left;
}
.table .tit{
    background: #f1efed;
}
.table .cont{
    background:white;
    color: black;
}
.table .tit .t_1{
    width: 150px;
    padding-left: 14px;
}
.table .tit .t_2{
    width: 490px;
    padding-left: 14px;
}
.table .tit .border{
    border-right: 1px solid #d1cfc9
}
.table .cont button{
    background: transparent;
    border: none;
    color: #1850e5;
    margin-right: 10px;
}
.page{
    height: 38px;
    line-height: 38px;
    width: 100%;
    border: 1px solid #d1cfc9;
    position: relative;
}
.page button{
    width: 25px;
    height: 25px;
    border: 1px solid #d1cfc9;
    background: white;
    color: black;
}
.page input{
    width: 60px;
    height: 24px;
    border: 1px solid #d1cfc9;
    padding-left: 5px;
}
.page .ad{
    position: absolute;
    border: 0;
    background: none;
    top: 4px;
    left: 188px;
}
.page .jian{
    position: absolute;
    border: 0;
    background: none;
    top: 13px;
    left: 188px;
}
</style>
