<template>
  <div>
      <Nhead></Nhead>
        
        <div style="width:1200px;margin:15px auto 0;">
            <AsideMenu :curPath="'address'"></AsideMenu>
            <div class="user-main">
            <div class="contents">
                <p class="title">我的收货地址</p>
                <div class="new-address">
                    <el-form label-width="80px">
                        <el-form-item label="收货人">
                            <el-input v-model="newAddressInfo.consigner" placeholder="请填写收货人姓名" clearable ></el-input>
                        </el-form-item>
                        <el-form-item label="所在区域">
                           <el-select placeholder="选择省" v-model="newAddressInfo.provinceId" @change="provinceSelect">
                               <el-option v-for="(item,index) in provinceData" :key="index" :label="item.ProvinceDes" :value="item.ProvinceId"></el-option>
                           </el-select>
                           <el-select placeholder="选择市" v-model="newAddressInfo.cityId" @change="citySelect">
                                <el-option v-for="(item,index) in cityData" :key="index" :label="item.CityDes" :value="item.CityId"></el-option>
                           </el-select>
                           <el-select placeholder="选择区" v-model="newAddressInfo.areaId">
                                <el-option v-for="(item,index) in areaData" :key="index" :label="item.AreaDes" :value="item.AreaId"></el-option>
                           </el-select>
                        </el-form-item>
                        <el-form-item label="详细地址">
                            <el-input type="textarea" v-model="newAddressInfo.address" placeholder="请填写收货人姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="邮政编码">
                            <el-input v-model="newAddressInfo.postcode" placeholder="请填写邮政编码"></el-input>
                        </el-form-item>
                        <el-form-item label="电话号码">
                            <el-input v-model="newAddressInfo.mobile" placeholder="请填写电话号码"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                           <el-button @click="newAddress" type="primary" style="border-radius:2px;padding:10px 20px;">添加</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                
                
            </div>
        </div>
        </div>
  </div>
</template>
<script>
import Nhead from '../common/Nhead'

import AsideMenu from './AsideMenu'
export default {
    data(){
        return {
            provinceData:[],
            cityData:[],
            areaData:[],
            newAddressInfo:{
                consigner:'',
                provinceId:'',
                cityId:'',
                areaId:'',
                address:'',
                mobile:'',
                postcode:''
            }
        }
    },
    components:{
        Nhead,AsideMenu
    },
    methods:{
        newAddress(){
            console.log(this.newAddressInfo)
        },
        /**function:获取省 2018-2-27*/
        province(){
            this.$axios.get('/province')
            .then((res)=>{
                if(res.data.code==200){
                    this.provinceData=res.data.data;
                    this.newAddressInfo.provinceId=this.provinceData[0].ProvinceId;
                    this.city(this.newAddressInfo.provinceId)
                }
            })
            .catch((res)=>{
                this.$message({
                    message:'请稍后重试！',
                    type: 'error'
                });
            })
        },
        /**function:获取市 2018-2-27 */
        city(provinceId){
            this.$axios.get('/cities',{
                params:{
                    ProvinceId:provinceId
                }
            })
            .then((res)=>{
                if(res.data.code==200){
                    this.cityData=res.data.data;
                    this.newAddressInfo.cityId=this.cityData[0].CityId;
                    this.area(this.newAddressInfo.cityId)
                }
            })
            .catch((res)=>{
                this.$message({
                    message:'请稍后重试！',
                    type: 'error'
                });
            })
        },
        /**function:获取区 2019-1-27 */
        area(city){
            this.$axios.get('/areas',{
                params:{
                    CityId:city
                }
            })
            .then((res)=>{
                if(res.data.code==200){
                    this.areaData=res.data.data;
                    this.newAddressInfo.areaId=this.areaData[0].AreaId;
                   
                }
            })
            .catch((res)=>{
                this.$message({
                    message:'请稍后重试！',
                    type: 'error'
                });
            })
        },
        provinceSelect(v){
            this.city(v)
        },
        citySelect(v){
            this.area(v)
        }
    },
    created(){
        this.$nextTick(()=>{
            this.province()
        })
        
    }
}
</script>
<style lang="scss" >
.new-address{
.el-form-item{
    margin-bottom: 10px;
}
.el-form-item__label{
    font-size: 12px;
}
    .el-input__inner{
        border-radius: 0;
        font-size:12px;
        width:240px;
    }
    .el-input{
        width:240px;
    }
    .el-select{
        .el-input{
            width:100px;
        }
        .el-input__inner{
             width:100px;
        }
    }
    .el-textarea{
        width:240px;
        .el-textarea__inner{
            border-radius: 0;
            font-size: 12px;
        }
    }
}
</style>


