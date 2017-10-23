<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="left-logo"><img :src="productIcon"></div> 
			<!-- 这里的图片不再v-for循环中，可以使用计算属性实时跟新，$route.path  即子路由变换时，跟新路径 -->
			<ul class="left-list">
				<router-link v-for="product in productList" tag="li" :to="{path:product.path}" active-class="current">
					{{product.name}}
				</router-link>
				<!-- 路由位置 to动态绑定: -->
			</ul>
		</div>
		<div class="detail-right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
			<!-- <div class="buy-info">
				<h2></h2>
				<p></p>
				<form class="g-form">
					<div class="form-line">
						<div class="form-label"><span>购买数量:</span></div>
						<div class="form-input">
							<select name="" id="">
								<option value="1">1</option>
								<option value="2">2</option>
							</select>
						</div>
					</div>
					<div class="form-line">
						<div class="form-label"><span>产品类型:</span></div>
						<div class="form-input">
							<select name="" id="">
								<option value="simple">入门版</option>
								<option value="2">2</option>
							</select>
						</div>
					</div>
					<div class="form-line">
						<div class="form-label"><span>有效时间:</span></div>
						<div class="form-input">
							<span>半年</span>
						</div>
					</div>
					<div class="form-line">
						<div class="form-label"><span>总计:</span></div>
						<div class="form-input">
							<span>500</span>
						</div>
					</div>
				</form>
			</div>
			<div class="product-info">
				<h2>产品说明</h2>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id:1,
				productList:[
		        { 
		          name: '数据统计',
		          path: 'count',  //这里的路径不能加/  ，不然会跳转回根目录

		          icon: require('../assets/images/1.png'),
		          active: false
		        },
		        {
		          name: '数据预测',
		          path: 'forecast',
		          icon: require('../assets/images/1.png'),
		          active: false
		        },
		        {
		          name: '流量分析',
		          path: 'analysis',
		          icon: require('../assets/images/2.png'),
		          active: false
		        },
		        {
		          name: '广告发布',
		          path: 'publish',
		          icon: require('../assets/images/2.png'),
		          active: false
		        }
					      ],
				imgMap: {
				        '/detail/count': require("../assets/images/1.png"),
				        '/detail/forecast': require("../assets/images/2.png"),
				        '/detail/analysis': require("../assets/images/3.png"),
				        '/detail/publish': require("../assets/images/4.png"),
				      	},
			}
		},

		computed:{
			productIcon(){
				console.log(this.$route.path)
				return this.imgMap[this.$route.path];
			}
		}
	}
</script>

<style >
	.detail-wrap {

	}
	.detail-wrap .detail-left{
		float: left;
		width: 180px;
		background: #fff;
		overflow: hidden;
	}
	.detail-wrap .detail-left .left-logo{
		width: 100px;
		height: 100px;
		padding: 20px 40px;
	}
	.detail-wrap .detail-left .left-list{
		width: 100%;
	}
	.detail-wrap .detail-left .left-list li{
		width: 100%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.detail-wrap .detail-left .left-list .current{
		background: #2ca;
		color: #fff;
	}
	.detail-wrap .detail-right{
		float: left;
		margin-left: 20px;
	}
	.detail-wrap .detail-right .buy-info{
		width: 900px;
		margin-bottom: 20px;
	}
	.detail-wrap .detail-right .product-info{
		width: 900px;
		float: left;
	}
</style>