<template>
	<div>
		<my-dialog :isShow="isShowCheckDialog" @on-close="checkStatus">
			<!-- 这里 关闭时候也会 触发检查操作   监听子组件的on-close事件 -->
		<p>请检查你的支付状态</p>
	     <div class="button" @click="checkStatus">支付成功</div>
	     <div class="button" @click="checkStatus">支付失败</div>			
		</my-dialog>
		<my-dialog  :isShow="isShowSuccess" @on-close="toOrderList">购买成功</my-dialog>
		<my-dialog :isShow="isShowFail" @on-close="toOrderList">购买失败</my-dialog>
	</div>
</template>

<script>
import MyDialog from './dialoge.vue'
	export default {
		components:{
			MyDialog,
		},
		props:{
			isShowCheckDialog:{
				type:Boolean,
				default:false,
			},
			orderId:{
			type:String,
			}	
		},
		data(){
			return {
				isShowSuccess:false,
				isShowFail:false

			}
		},
		methods:{
			checkStatus(){
				console.log(this.orderId);
				this.$http.post('/api/checkOrder', {
			        orderId: this.orderId
			      })
			      .then((res) => {
			      	console.log(this.orderId)
			        this.isShowSuccess = true;
			        // this.isShowCheckDialog = false;  这里不要在字组件内 修改父组件的变量
			        // this.$emit('on-close-check-dialog')
			      }, (err) => {
			        this.isShowFail = true;
			        //  this.isShowCheckDialog = false;
			        // this.$emit('on-close-check-dialog')
			      });
    		},
    		toOrderList(){
    			this.$router.push({path:'/orderlist'})
    			// push等同于router-link中的to跳转
    		}

    	},
		    
		
		
	}
</script>

<style></style>