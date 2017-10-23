<template>
	<div class="index-container clearfloat">
		<div class="index-left">
			<div class="index-left-content">
				<h2>全部产品</h2>

				<div class="left-product" v-for="product in productList">
					<h3>{{product.title}}</h3>
					<ul class="product-list">
						<li v-for="item in product.list">
							<a :href="item.url">
							{{item.name}}</a><!-- 此处的href绑定的变量  应该采取v-bind动态绑定   此处的产品列表可以渲染附加信息，通过v-if添加 -->
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div class="hr" v-if="!product.last">
					</div><!-- 此处通过一个判断来清除最后一项的下划线 -->
				</div>
			</div>
			<div class="index-left-content">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newsList" class="new-item"><a :href="item.url">{{item.title}}</a></li>
				</ul>
			</div>
		</div>
		<div class="index-right clearfloat">
			<div class="index-right-content">
				<slide-show :slides="slides" :inv="slideSpeed"></slide-show><!--这里调用一个通用组件  -->
			</div>
			<div class="index-right-content clearfloat">
				<ul class="list clearfloat">
					<li v-for="(item,index) in boardList" :class="[{'line-last': index % 2 !== 0},'index-right-'+item.id]"><!--此处通过v-for的index  来实现第二个 li 没有右外边距    绑定多个类 使用数组-->
						<div class="product-logo"><img ></div>
						<div class="product-content">
							<h3>{{item.title}}</h3>
							<div>{{item.description}}</div>
							<button><a :href="'detail/'+item.toKey">立即购买</a></button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import slideShow from '../components/slideshow.vue'  //导入 并且添加组件
export default {
	components:{
		slideShow,
	},
	created:function(){				//调用vue-resource之后就可以在 全局组件中调用 this.$http方法
		//模拟后台调用数据  此时newsList从后台调用
	    this.$http.get('api/getNewsList')
	    .then((res) => {
	      this.newsList = res.data
	    }, (err) => {
	      console.log(err)
	    })
  },

	data(){
		return {
			slideSpeed:2000,
			slides: [
	        {
	          src: require('../assets/slideShow/pic1.jpg'),  //通过require获取图片地址.webpack中，js中的地址必须用  require才会将图片打包到最终的项目文件中
	          title: 'xxx1',
	          href: 'detail/analysis'
	        },
	        {
	          src: require('../assets/slideShow/pic2.jpg'),
	          title: 'xxx2',
	          href: 'detail/count'
	        },
	        {
	          src: require('../assets/slideShow/pic3.jpg'),
	          title: 'xxx3',
	          href: 'detail/publish'
	        },
	        {
	          src: require('../assets/slideShow/pic4.jpg'),
	          title: 'xxx4',
	          href: 'detail/forecast'
	        }
	      	],
			boardList: [
	        {
	          title: '开放产品',
	          description: '开放产品是一款开放产品',
	          id: 'car',
	          toKey: 'analysis',
	          saleout: false
	        },
	        {
	          title: '品牌营销',
	          description: '品牌营销帮助你的产品更好地找到定位',
	          id: 'earth',
	          toKey: 'count',
	          saleout: false
	        },
	        {
	          title: '使命必达',
	          description: '使命必达快速迭代永远保持最前端的速度',
	          id: 'loud',
	          toKey: 'forecast',
	          saleout: true
	        },
	        {
	          title: '勇攀高峰',
	          description: '帮你勇闯高峰，到达事业的顶峰',
	          id: 'hill',
	          toKey: 'publish',
	          saleout: false
	        }
	      ],
			newsList:[],
			productList:{
				//设计成对象方便以后更改需求，直接从服务端调取数据
				pc:{ 
					title:'PC产品',
					last:false,
					list:[//产品名字和url存储
			        {
			          name: '数据统计',
			          url: 'detail/count'
			        },
			        {
			          name: '数据预测',
			          url: 'detail/count',
			          hot:true,
			        },
			        {
			          name: '流量分析',
			          url: 'detail/analysis',
			          hot: true
			        },
			        {
			          name: '广告发布',
			          url: 'detail/forecast'
			        }
			      ]
				},
				app:{
					title:'手机应用类',
					last:true,
					list:[//产品名字
					{
		              name: '91助手',
		              url: 'http://weixin.com'
		            },
		            {
		              name: '产品助手',
		              url: 'http://twitter.com',
		              hot: true
		            },
		            {
		              name: '智能地图',
		              url: 'http://maps.com'
		            },
		            {
		              name: '团队语音',
		              url: 'http://phone.com'
		            }
		            ],
				}
			}
		}
	}
}
</script>
<!-- scoped  指定样式只对本组件产生影响，不会影响到全局 -->
<style scoped> 
.clearfloat:after{
	content: "";
	display: table;
	height: 0;
	clear: both;
}
.index-left{
	width: 270px;
	float: left;
	margin-right: 30px;
	background: #fff;
}

.index-left .index-left-content h2{
	background-color: #4fc08d;
	color: #fff;
	padding-left: 10px;
	height: 40px;
	line-height: 40px;
}
.index-left .index-left-content h3{
	font-weight: bold;
	padding-left: 10px;
	margin: 15px 0px;
}

.index-left .index-left-content .hr{
	border-bottom: 1px solid #ccc;
}
.index-left .index-left-content ul {
	padding-left: 25px;
	margin-bottom: 10px;
}
.index-left .index-left-content ul li{
	height: 25px;
	line-height: 25px;
}
.product-list li .hot-tag{
	color: #fff;
	background: #f00;

}
.new-item{
	width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.index-right{
	width: 820px;
	float: left;
}
.index-right .list li{
	box-sizing: border-box;
	float: left;
	width: 400px;
	background: #fff;
	margin-right: 10px;
	margin-bottom: 20px;
	padding: 20px;
}
.index-right .list .line-last {
	margin-right: 0px;
}
.index-right .list .product-logo{
	float: left;
	width: 100px;
	height: 100px;
	margin-right: 10px;
}
.index-right .list .product-content{
	float: left;
	width: 200px;
}
.index-right .list .product-content h3{
	color: #000;
	font-weight: bold;
}
.index-right .list .product-content div{
	margin: 10px 0px;
}
.index-right .list .product-content button{
	display: block;
	width: 100px;
	background: #4fc08d;
	color: #fff;
	cursor: pointer;
	height: 40px;
	line-height: 30px;
	border-radius: 5px;
}
.index-right-car .product-logo{
  background: url(../assets/images/1.png) no-repeat;
}
.index-right-loud .product-logo{
  background: url(../assets/images/2.png) no-repeat;
}
.index-right-earth .product-logo{
  background: url(../assets/images/3.png) no-repeat;
}
.index-right-hill .product-logo{
  background: url(../assets/images/4.png) no-repeat;
}
</style>