<template>
    <x-header class="my-header"  :left-options="leftOptions" >
        <div slot="default">{{title}}</div>
        <div slot="right" style="color:#fff;" v-show="showRight" >
            注册
        </div>
    </x-header>
</template>
<script>
import {XHeader} from 'vux'
export default {
    name:'mheader',
    props:{
        title:{
            type:String,
            default:'康妆商城'
        },
        leftOptions:{
            type:Object,
            default:()=>{
                return {showBack:true,backText:''}
            }
        },
        showRight:{
            type:Boolean,
            default:false
        }
    },
    components:{
        XHeader
    }
}
</script>

<style>

</style>

