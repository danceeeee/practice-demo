<template>
	<div>
		<div class="app-header">
			<div class="header-container">
				<div class="header-logo">
					<router-link :to="{path:'/'}"><img src="../assets/logo.png"  alt="header-logo"></router-link>
				</div>
				<ul class="header-nav">
					<li>{{username}}</li>
					<li @click="quitClick" v-if="username !==''">退出</li>
					<li @click="logClick" v-if="username ===''"><a href="#">登陆</a></li>
					<li @click="regClick" v-if="username ===''"><a href="#">注册</a></li>
					<li @click="aboutClick"><a href="#">关于</a></li>
				</ul>
			</div>
		</div>
		<div class="app-content">
			<div class="content-container">
				<router-view></router-view>
			</div>
		</div>
		<div class="app-footer">
			<div class="footer-container">
				<div class="footer-content">
					© 2016 fishenal MIT
				</div>
			</div>
		</div>
		<my-dialog :isShow="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
			<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
		</my-dialog>
		<my-dialog :isShow="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
			<log-form @has-log="onSuccessLog"></log-form>
		</my-dialog>
		<my-dialog :isShow="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
			<reg-form @has-log="onSuccessReg"></reg-form>
		</my-dialog>
	</div>
	</div>
	</div>
</template>

<script>
import Dialog from './dialoge.vue';
import LogForm from './logform';
import RegForm from './regform';

	export default {
		components:{
			MyDialog:Dialog,
			LogForm:LogForm,
			RegForm:RegForm,
		},
		data(){
			return {
				isShowAboutDialog:false,
				isShowLogDialog:false,
				isShowRegDialog:false,
				username:'',
			}
		},
		methods:{
			aboutClick(){
				this.isShowAboutDialog = true;
			},
			logClick(){
				this.isShowLogDialog = true;
			},
			regClick(){
				this.isShowRegDialog = true;
			},
			closeDialog(attr){
				this[attr] = false;  //传入的为字符串  用[]调用属性，不用.调用属性
			},
			onSuccessLog(data){
				console.log(data);
				this.username = data.username;
				console.log(data.username);
				this.isShowLogDialog = false; //登陆成功 自动退出弹框
			},
			onSuccessReg(data){
				console.log(data);
				this.username = data.username;
				console.log(data.username);
				this.isShowRegDialog = false; //登陆成功 自动退出弹框
			},
			quitClick(){
				this.username ='';
			}
		}
}
</script>

<style>
/* 重置样式 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0; 
 padding: 0;
border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}

.clearfloat:after{
	content: "";
	display: table;
	height: 0;
	clear: both;
}

.app-header {
	width: 100%;
	height: 90px;
	background: #444;
	margin-bottom: 20px;
}
.app-header .header-container{
	margin: 0 auto;
	width: 1000px;
}
.app-header .header-logo{
	float: left;
	
}
.app-header .header-logo img{
	height: 50px;
	width: 50px;
	margin-top: 20px;
}
.app-header .header-nav {
	float: right;
	padding: 35px 0px ;
	line-height: 20px;
}
.app-header .header-nav li{
	float: left;
	padding: 0 20px;
	color: #ccc;
	text-align: center;
}

.app-header .header-nav li+li{
	border-left: 1px solid ;
}

.app-content .content-container{
	margin: 0 auto;
	width: 1120px;
	overflow: hidden;
}
.app-footer{
	background: #ddd;
	height: 80px;
	line-height: 80px;
}
.app-footer .footer-container{
	margin: 0 auto;
	width: 1000px;
}
.app-footer .footer-container .footer-content{
	text-align: center;
}
/* form样式 */
.g-form .form-line{
		width: 100%;
		margin-bottom: 10px;
		
}
.g-form .form-line .form-label{
	width: 100px;
	display: inline-block;
	vertical-align: middle;
	margin-right: 15px;
}
.g-form .form-line .form-label span{
	float: right;
	
}
.g-form .form-line .form-input{
	display: inline-block;
	vertical-align: middle;
	padding: 10px 0px;
}

.g-form .form-line button{
	padding: 5px 12px;
	margin-left: 115px;
	border-radius: 5px;
	background: #4fc08d;
	color: #fff;	
}
.button{
	display: inline-block;
	margin-left: 100px;
	width: 70px;
	padding: 10px 12px;
	text-align: center;
	border-radius: 5px;
	background: #4fc08d;
	color: #fff;	
	cursor: pointer;
}

</style>