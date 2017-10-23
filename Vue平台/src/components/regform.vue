<template>
	<div class="g-form">
		<div class="form-line">
			<div class="form-label"><span>用户名:</span></div>
			<div class="form-input">
				<input type="text" v-model="userName">
			</div>
			<span class="error">{{userErrors.errorText }}</span>
		</div>
		<div class="form-line">
			<div class="form-label"><span>密码:</span></div>
			<div class="form-input">
				<input type="password" v-model="passWord">
			</div>
			<span class="error">{{passoWrdErrors.errorText }}</span>
		</div>
		<div class="form-line">
			<div class="form-input">
				<button @click="onLogin">注册</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			userName:'',
			passWord:'',
		}
	},
	computed:{  //使用计算属性 来动态验证 输入的用户名和密码
		userErrors(){
			let errorText,status;
			if(!(/@/g.test(this.userName))){
				status = false;
				errorText = '不包含@'
			}else{
				status = true;
				errorText = '';
			}
			return {
				status,
				errorText,
			}
		},
		passoWrdErrors(){
			let errorText,status;
			if(!(/^\w{1,6}/g.test(this.passWord))){
				status = false;
				errorText = '密码需要1-6位'
			}else{
				status = true;
				errorText = '';
			}
			return {
				status,
				errorText,
			}
		},
	},
	methods:{
		onLogin(e){
			if(this.userErrors.status || this.passoWrdErrors.status){
				this.$http.get('api/login').then((res)=>{
					this.$emit('has-log',res.data)
				},()=>{})
			}else{
				e.preventDefault();
			}
		}
	}
}

	
</script>

<style>
</style>