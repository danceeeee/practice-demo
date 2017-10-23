<template>
	<div>
		<div class="buy-info">
			<h2>流量分析</h2>
			<p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
			<form class="g-form">
				<div class="form-line">
					<div class="form-label"><span>购买数量:</span></div>
					<div class="form-input">
						<counter :max="100" :min="1" @on-change="onParamChange('buyNum',$event)"></counter>
						<!-- 绑定的事件 若传入参数，需要手动传入$evnet 表示 event
						对象 ，不传入参数时，默认传入event对象,这里传入的$event 表示子组件 传递的参数？？-->
					</div>
				</div>
				<div class="form-line">
					<div class="form-label"><span>产品类型:</span></div>
					<div class="form-input">
						<v-selection :selections="productTypes" @on-change="onParamChange('buyType',$event)"></v-selection>
					</div>
				</div>
				<div class="form-line">
					<div class="form-label"><span>版本:</span></div>
					<div class="form-input">
						<v-multiply-chooser :selections="versonList" @on-change="onParamChange('versions',$event)"></v-multiply-chooser>
					</div>
				</div>
				<div class="form-line">
					<div class="form-label"><span>有效期：</span></div>
					<div class="form-input">
						<chooser :selections="periodList" @on-change="onParamChange('period',$event)"></chooser>
					</div>
				</div>
				<div class="form-line">
					<div class="form-label"><span>总计:</span></div>
					<div class="form-input">
						<span>{{price}}</span>
					</div>
				</div>
				<div class="form-line">
					<div class="form-input">
						<div class="button" @click="showBank">立即购买</div>
					</div>
				</div>

				<my-dialog :isShow="isShowBank" @on-close="closeBank">
					<table class="buy-dialog-table">
						<tr>
							<th>购买数量</th>
							<th>产品类型</th>
							<th>版本</th>
							<th>有效期</th>
							<th>总计</th>
						</tr>
						<tr>
							 <td>{{ buyNum }}</td>
					         <td>{{ buyType.label }}</td>
					         <td>{{ period.label }}</td>
					         <td>
						         <span v-for="item in versions">{{ item.label }}</span>
					         </td>
					         <td>{{ price }}</td>
						</tr>
					</table>
					<h3 class="buy-dialog-title">请选择银行</h3>
			        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
			        <div class="button buy-dialog-btn" @click="confirmBuy">
			          确认购买
			        </div>
				</my-dialog>
				<check-order :isShowCheckDialog="isShowCheck" :orderId="productOrderId" @on-close-check-dialog="closeCheckDialog"></check-order>
				<my-dialog :isShow="isShowErrorDialog">购买失败</my-dialog>
				<!-- 订单支付失败显示页面 -->
			</form>
		</div>
		<div class="product-info">
			<h2>产品说明</h2>
			<p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

	        <h3>用户行为指标</h3>
	        <ul>
	          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
	          <li>用户在网站的停留时间；</li>
	          <li>用户来源网站（也叫“引导网站”）；</li>
	          <li>用户所使用的搜索引擎及其关键词；</li>
	          <li>在不同时段的用户访问量情况等。</li>
	        </ul>

	        <h3>浏览网站方式</h3>
	        <ul>
	          <li>用户上网设备类型</li>
	          <li>用户浏览器的名称和版本</li>
	          <li>访问者电脑分辨率显示模式</li>
	          <li>用户所使用的操作系统名称和版本</li>
	          <li>用户所在地理区域分布状况等</li>
	        </ul>
			</div>

	</div>
</template>

<script>
import VSelection from '../../components/base/selection.vue'
import VMultiplyChooser from '../../components/base/multiplyChooser.vue'
import Counter from '../../components/base/counter.vue'
import Chooser from '../../components/base/chooser.vue'
import BankChooser from '../../components/bankchooser.vue'
import Dialog from '../../components/dialoge.vue'
import CheckOrder from '../../components/checkorder.vue'
	
	export default {
		components:{
			VSelection,
			VMultiplyChooser,
			Counter,
			Chooser,
			BankChooser,
			MyDialog:Dialog,
			CheckOrder,
					},

		data(){
			return {
				buyNum: 0,
		      	buyType: {},
		      	versions: [],
		      	period: {},
		      	price: 0,
		      	isShowBank:false,
		      	isShowCheck:false,
		      	bankId:null,
		      	isShowErrorDialog:false,
		      	productOrderId:null,
		      	productTypes:[
			        {
			          label: '入门版',
			          value: 0
			        },
			        {
			          label: '中级版',
			          value: 1
			        },
			        {
			          label: '高级版',
			          value: 2
			        }
			      ],
			      versonList:[
			        {
			          label: '客户版',
			          value: 0
			        },
			        {
			          label: '代理商版',
			          value: 1
			        },
			        {
			          label: '专家版',
			          value: 2
			        }
			      ],
		            periodList: [
			        {
			          label: '半年',
			          value: 0
			        },
			        {
			          label: '一年',
			          value: 1
			        },
			        {
			          label: '三年',
			          value: 2
			        }
			      ],
			}
		},

		methods:{
			onParamChange(attr,val){//这里将传出的数据 用一个方法封装,一定要注意这里传入的attr属性名的字符串，而不是属性
				this[attr] = val;
				// console.log(this[attr])
				this.getPrice();//属性变化后  重新计算金额
			},
			getPrice(){
				let buyVersionArry = this.versions.map((item)=>item.value)
				let param = {
					buyNumber:this.buyNum,
					buyType:this.buyType.value,
					period:this.period.value,
					version:buyVersionArry.join(','),
				}
				//数据转换的格式 与后端进行约定
				this.$http.post('/api/getPrice',param)
				.then((res)=>{
					// let data = JSON.parse(res); 如果未字符串，则需要调用转换未对象
					this.price = res.data.amount;//返回的对象 一定要用 res.data  获得参数值？
				})
			},
			onChangeBanks(bankObj){
				this.bankId = bankObj.id;
				// console.log(bankObj.id);
			},
			confirmBuy(){
				let buyVersionArry = this.versions.map((item)=>item.value)
				let param = {
					buyNumber:this.buyNum,
					buyType:this.buyType.value,
					period:this.period.value,
					version:buyVersionArry.join(','),
					bankId:this.bankId,
				};
				this.$http.post('/api/createOrder',param)
				.then((res)=>{
					this.productOrderId = res.data.orderId;
					// console.log(this.productOrderId,res.data.orderId)
					this.isShowCheck = true;
					this.isShowBank = false;
				},(error)=>{
					this.isShowErrorDialog = true;
					this.isShowBank = false;
				})
			},
			closeCheckDialog(){
				this.isShowCheck = false;
			},
			showBank(){
				this.isShowBank = true;
			},
			closeBank(){
				this.isShowBank = false;
			}
		},
		mounted(){//一开始的金额不是0，应该是更具各数据的默认值进行计算
			this.buyNum = 1;
			this.buyType = this.productTypes[0];
			this.versions = [this.versonList[0]];
			this.period = this.periodList[0];
			this.getPrice();
		}

	}
</script>
	
<style scoped>
	h2,h3,p,ul,li{
		line-height: 1.8em;
		padding-left: 10px;
	}
	h2,h3{
		font-weight: bold;
	}
	.product-info{
		margin-top: 80px;
	}
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>