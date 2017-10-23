<template>
	<div class="slide-show" @mouseenter="clearInv" @mouseleave="runInv">
		<!-- 轮播图滚动  实现鼠标移入时 自动轮播停止，移出后继续轮播 -->
		<div class="slide-img">
			<a :href="slides[nowIndex].href">
				<transition name="slide-new">
					<img v-if="isShow" :src="slides[nowIndex].src">
				</transition>
				<transition name="slide-old">
					<img v-if="!isShow" :src="slides[nowIndex].src">
				</transition>
			</a>
		</div>  <!-- 属性需要动态绑定-->
		<h2>{{slides[nowIndex].title}}</h2>
		<ul class="list">
			<li @click="goto(prevIndex)">&lt;</li>
			<li v-for="(item,index) in slides"  @click="goto(index)" :class="{'current':index === nowIndex}">{{index+1}}</li>
			<li @click="goNext">&gt;</li>
		</ul>

	</div>
</template>

<script>
	export default {
		props:{
			slides:{
				type:Array,
				
			},
			inv:{
				type:Number,
				default:1000,

			}
		},
		data(){
			return {
				nowIndex:0,
				isShow:true,
			}
		},
		methods:{
			goto(index){
				 this.isShow = false;   //怎么实现滚动切换的逻辑？
				setTimeout(()=>{
					this.isShow = true;
					this.nowIndex = index;
				},10)
			},

			goNext(){
				if(this.nowIndex===this.slides.length-1){
					this.goto(0);
				}else{
					this.goto(this.nowIndex+1);
				}
			},
			runInv(){
				this.invId = setInterval(()=>{//实现自动滚动，这里赋值一个id可以取消循环
					this.goNext();
				},this.inv)
			},
			clearInv(){
				clearInterval(this.invId);
			}	
		},
		mounted(){   //渲染完之后，自动调用的函数
				// console.log(1);
				this.runInv();//实现幻灯片自动滚动
			},

		computed:{
			//通过计算属性  也可 实现翻页的 方法，复用goto方法
			prevIndex(){
				if(this.nowIndex===0){
					return this.slides.length-1;
				}else{
					return this.nowIndex -1
				}
			}
		}
	}
</script>

<style scoped>
	.slide-show {
		position: relative;
		width: 820px;
		height: 330px;
		overflow: hidden;
	}
	.slide-show h2{
		width: 100%;
		background:#ccc; 
		position: absolute;
		bottom: 0px;
		height: 30px;
		line-height: 30px;
		left: 0px;
		padding-left: 20px;
	}
	.slide-show .list{
		position: absolute;
		bottom: 0px;
		right: 0px;
		height: 30px;
	}
	.slide-show .list li{
		display: inline-block;
		width: 15px;
		text-align: center;
		margin: 0px 5px;
		line-height: 30px;
		cursor: pointer;
	}
	.slide-show .list li.current{
		background: #f00;
		color: #fff;
	}

	.slide-new-enter-active {
		transition: all 0.5s;
	}
	.slide-new-enter{
		transform: translateX(900px)
	}
	.slide-old-leave{
		opacity: 1;
	}
	.slide-old-leave-active{
		transition: all 0.5s;		
	}
	.slide-old-leave-to{
		transform: translateX(-900px);
		opacity: 0;	
	}
	
</style>