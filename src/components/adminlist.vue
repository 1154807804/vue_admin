<template>
  <div>
      
      <!-- <Edit @receivee="authshow" v-show="restShowe" :addauthe="getadminlist"></Edit> -->
      <Header></Header>
      <div class="inner">
        <div class="tit">
           <div style="width:250px;float:left;height:40px;margin-left:-990px">
               <el-breadcrumb class="titlel" separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>系统人员</el-breadcrumb-item>
               </el-breadcrumb>
           </div>
        </div>
        <el-input placeholder="请输入内容" v-model="text" clearable></el-input>
            <el-row>
                <el-button type="primary" @click="find">查询</el-button>
                <el-button @click="xianshi" type="success">添加</el-button>
            </el-row>
        <div class="table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column
                    prop="userName"
                    label="用户名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="trueName"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="power"
                    label="后台权限">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="手机"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="updateAt"
                    label="编辑日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="tokenId"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                        <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <el-pagination @current-change="currentpage"
                :page-size="3"
                layout="prev, pager, next"
                :total="count">
            </el-pagination>
        </div>
      </div> 
      <!-- @clear="getClear" -->
      <Add v-if="restShow" @receive="authshow"  :addauth="getadminlist" :token="tokenId" :info="userInfo" @clear="getClear"></Add>
  </div>
</template> 
<script>
import Axios from "axios"
import Header from "./header.vue"
import Add from "./add.vue"
import Edit from "./edit.vue"
export default {
    data(){
        return{
            tableData:[],
            text:"",
            restShow:false,
            pageStart:1,
            count:0,
            tokenId:'',
            userInfo:{}
        } 
    },
    components:{Header,Add},
    methods:{
        getadminlist(){
            Axios({
                url:"/api/Handler/AdminshowList?action=show",
                method:"get",
                params:{
                    pageStart:this.pageStart,
                    searchText:this.text
                }
            }).then(res=>{
                this.tableData=res.data.data.list
                this.count=res.data.data.count
            })
        },
        authshow(val){
            // console.log(val)
            this.restShow=val
        },
        find(){
            this.getadminlist() 
        },
        del(row){ 
            // console.log(arguments)
            // console.log(row)
            Axios({
                url:"/api/Handler/AdminshowList?action=delete",
                method:"get", // get params
                params:{
                    tokenId:row.tokenId
                }
            }).then(res=>{
                if(res.data.success){
                    alert(res.data.success)
                    this.getadminlist()
                }
            }) 
        },
        
        edit(row){
            this.restShow=true
            this.tokenId=row.tokenId
            this.userInfo.username=row.userName;
            this.userInfo.truename=row.trueName;
            this.userInfo.phone=row.phone;
            this.userInfo.tokenId=row.tokenId
        },
        xianshi(){
            this.restShow=true
        },
        currentpage(page){
            this.pageStart=page
            this.getadminlist()
        },
        getClear(val){
            this.tokenId=val
        }
    },
    mounted(){
        this.getadminlist()
        document.body.style.background="#eee"
    }
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
    width: 50%;
}
.el-row{
    width: 40%;
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
