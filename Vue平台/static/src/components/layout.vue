<template>
	<div>
		<div class="app-header">
			<div class="header-container">
				<div class="header-logo">
					<a href="#"><img src="../assets/logo.png"  alt="header-logo"></a>
				</div>
				<ul class="header-nav">
					<li><a href="#">登陆</a></li>
					<li><a href="#">注册</a></li>
					<li><a href="#">关于</a></li>
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
	</div>
</template>

<script>
	export default {
	data(){
		return {

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
/* HTML5 display-role reset for older browsers */
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
	width: 960px;
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
	width: 50px;
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
	width: 960px;
}
.app-footer .footer-container .footer-content{
	text-align: center;
}
</style>