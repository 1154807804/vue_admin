<template>
  <div>
      <!-- <Addstudent @receive="authshow" v-show="restShow" :addauth="getadminlist"></Addstudent> -->
      
      <Header></Header>
      <div class="inner">
        <div class="tit">
           <div style="width:250px;float:left;height:40px;margin-left:-990px">
               <el-breadcrumb class="titlel" separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>学员管理</el-breadcrumb-item>
               </el-breadcrumb>
           </div>
        </div>
        <el-input placeholder="用户名" v-model="text" clearable></el-input>
        <!-- <el-input placeholder="邮箱"  clearable></el-input> -->
        <!-- <el-input placeholder="手机号"  clearable></el-input> -->
        <el-row>
            <el-button type="primary" @click="find">查询</el-button>
            <el-button @click="xianshi" type="success">添加</el-button>
        </el-row>
        <div class="table">
            <el-table :data="studentData" style="width: 100%">
                <el-table-column
                    
                    prop="username"
                    label="用户名"
                    width="180">
                </el-table-column>
                <el-table-column
                    disabled=false 
                    prop="email"
                    label="邮箱"
                    width="180">
                </el-table-column>
                <el-table-column  
                    prop="phone"
                    label="手机">
                </el-table-column>
                <el-table-column 
                    prop="updateAt"
                    label="注册日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="状态"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="tokenId"
                    label="操作">
                    <template slot-scope="scope" id="ee">
                        <el-button type="text" size="small" @click="edit(scope.row)" >修改</el-button>
                        <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                        <el-button id="free" type="text" size="small" @click="dialogFormVisible = true" :disabled="scope.row.state == '已完成'">冻结</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <el-pagination @current-change="currentpage"
                :page-size="3"
                layout="prev, pager, next"
                :total="counts">
            </el-pagination>
        </div>
      </div> 
      <Addstudent @receive="authshow" v-if="restShow" :addauth="getstudentlist" :token="tokenId" :info="userInfo" @clear="getClear"></Addstudent>
  </div>
</template>
<script>
import Axios from "axios"
import Header from "./header.vue"
import Addstudent from "./addstudent.vue"
export default {
    data(){
        return{
            studentData:[],
            text:"",
            restShow:false,
            pageStart:1,
            counts:0,
            restShowe:false,
            tokenId:'',
            userInfo:{}
        }
    },
    components:{Header,Addstudent},
    methods:{
        getstudentlist(){
            Axios({
                url:"/api/Handler/StudentshowList?action=showStudent",
                method:"get",
                params:{
                    pageStart:this.pageStart,
                    searchText:this.text
                }
            }).then(res=>{
                console.log(res)
                this.studentData=res.data.data.lists
                this.counts=res.data.data.counts
            })
        },
        
        find(){
            this.getstudentlist() 
        },
        del(row){
            console.log(arguments)
            console.log(row)
            Axios({
                url:"/api/Handler/StudentshowList?action=deleteStudent",
                method:"get", // get params
                params:{
                    tokenId:row.tokenId
                }
            }).then(res=>{
                if(res.data.success){
                    alert(res.data.success)
                    this.getstudentlist()
                }
            }) 
        },
        edit(row){
            this.restShow=true
            this.tokenId=row.tokenId
            this.userInfo.username=row.username;
            this.userInfo.phone=row.phone;
            this.userInfo.email=row.email;
            this.userInfo.tokenId=row.tokenId
        },
        xianshi(){
            this.restShow=true
        },
        authshow(val){
            this.restShow=val
        },
        currentpage(page){
            this.pageStart=page
            this.getstudentlist()
        },
        getClear(val){
            this.tokenId=val
        },
        freeze(){
            // document.getElementById("ee").attr(disabled,"disabled")
            // console.log(document.getElementById("ee"))

        }
    },
    mounted(){
        this.getstudentlist()
        document.body.style.background="#eee"
        // document.getElementById("ee").attr(disabled,"disabled")
    },
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
.titlel{
    line-height: 45px;
}
.tit span{
    font-size: 14px;
    color: #75736e
}
.findwrap{
    width: 100%;
    height: 40px;
    border: 1px solid #d1cfc9;
    /* background: white; */
}
.el-input{
    width: 20%;
}
.el-row{
    width: 30%;
    float: right;
}
.el-row button{
    margin-left: 20px;
    float: left;
}
/* .findwrap input{
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
} */
.table{
    margin:14px auto;
    width:100%;
    /* height: 330px; */
    border:1px solid #d1cfc9;
    background: white;
}
/* .table>div{
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
    width: 145px;
    padding-left: 10px;
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
} */
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
