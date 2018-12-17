<template>
	<div class="accountContent">
		<nav-header :title="navTitle"></nav-header>
		<div class="content">
			<div class="userTop">
				<div class="user-img">
					<img :src="loggerImg">
				</div>
				<h2>{{logger}}</h2>
				<input type="text" maxlength="25" v-model="moods">
			</div>
			<div class="orderList">
				<div class="title">
					<span>My Orders</span>
					<i @click="goOrder('all')">All Orders</i>
				</div>
				<dl class="orderStatus">
					<dd @click="goOrder('payment')">Payment</dd>
					<dd @click="goOrder('delivery')">Delivery</dd>
					<dd @click="goOrder('received')">Received</dd>
					<dd @click="goOrder('evaluation')">Evaluation</dd>
				</dl>
			</div>
			<div class="userWallet">
				<div class="title">
					<span>My Wallet</span>
					<i class="iconRight">></i>
				</div>
				<div id="wallet"></div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	.accountContent{
		width:100%;
		height:100%;
		.content{
			width:100%;
			background-color:#f8f8f8;
			position:absolute;
			top:.44rem;
			left:0;
			bottom:0;
			.userTop{
				width:100%;
				min-height:1.4rem;
				padding:.3rem .2rem .4rem 1rem;
				position:relative;
				background: linear-gradient(#6077E7,#3599DE);
				background: -webkit-linear-gradient(#6077E7,#3599DE);
				.user-img{
					width:.7rem;
					height:.7rem;
					border-radius:50%;
					display:-webkit-box;
					-webkit-box-align:center;
					-webkit-box-pack:center;
					overflow:hidden;
					position:absolute;
					top:.2rem;
					left:.2rem;
					img{
						width:100%;
					}
				}
				h2{
					width:100%;
					line-height:.4rem;
					display:inline-block;
					font-family:'Montserrat';
					font-size:.2rem;
					color:#1a1a1a;
				}
				input[type='text']{
					width:100%;
					line-height:.3rem;
					border:none;
					background-color:transparent;
					font-family:'Montserrat';
					font-size:.16rem;
					color:#a1a1a1;
					font-weight:normal;
				}
			}
			.orderList{
				width:90%;
				display:block;
				padding:.05rem .1rem;
				margin:-.1rem auto 0;
				background-color:#fff;
				border-radius:.05rem;
				overflow:hidden;
				position:relative;
				z-index:2;
				.title{
					width:100%;
					padding:0 .2rem;
					span{
						line-height:.44rem;
						font-family:'Montserrat';
						font-size:.18rem;
						color:#1a1a1a;
					}
					i{
						float:right;
						line-height:.44rem;
						font-family:'Montserrat';
						font-style:normal;
						font-size:.12rem;
						color:#a1a1a1;
						&:after{
							content:' >';
							line-height:.44rem;
							font-family:serif;
							font-style:normal;
							font-size:.12rem;
							color:#a1a1a1;
						}
					}
				}
				.orderStatus{
					width:100%;
					display:table;
					border-top:1px solid #e1e1e1;
					dd{
						width:25%;
						height:.44rem;
						line-height:.44rem;
						text-align:center;
						display:table-cell;
						font-family:"Montserrat";
						font-size:.13rem;
						color:#1a1a1a;
					}
				}
			}
			.userWallet{
				width:90%;
				display:block;
				padding:.05rem .2rem;
				margin:.1rem auto;
				background-color:#fff;
				border-radius:.05rem;
				overflow:hidden;
				.title{
					width:100%;
					height:.44rem;
					line-height:.44rem;
					font-family:'Montserrat';
					font-size:.18rem;
					color:#1a1a1a;
					border-bottom:1px solid #e1e1e1;
					.iconRight{
						float:right;
						line-height:.44rem;
						font-family:serif;
						font-style:normal;
						font-size:.12rem;
						color:#a1a1a1;
					}
				}
				#wallet{
					width:100%;
					height:3rem;
				}
			}
		}
	}
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'
	import echarts from 'echarts'

	export default{
		// props:{
		// 	xValue:{
		// 		type:Array,
		// 		default:''
		// 	},
		// 	yValue:{
		// 		type:Array,
		// 		default:''
		// 	}
		// },
		data(){
			return{
				navTitle:'Account',
				logger:this.$route.params.user,
				moods:'',
				loggerImg:'',
				loggerOrder:[],
				yData:{total:'',time:''},
				charts:'',
				option:{
					xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				        data:[]
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
				        // data: [820, 932, 901, 934, 1290, 1330, 1320],
				        data:[],
				        type: 'line',
				        areaStyle: {},
				        itemStyle: {
			                normal: {
			                    color: '#3599DE'//修改区域颜色
			                }
			            },
				    }]
				}

			}
		},   
		components:{
			'nav-header':navHeader
		},
		mounted(){
			this.$http.get('/api/users').then((data) => {
				const users = data.body.data;
				for(let i = 0;i < users.length; i++){
					if(users[i].name == this.logger){
						this.loggerImg = users[i].headImg;
						this.loggerOrder = users[i].order;
						this.moods = users[i].mood;
					}
				}
				if (this.loggerImg == '') {
					this.loggerImg= 'https://a.icons8.com/hhXdmTld/mOH5Zx/bitmap.png'
				}
				if(this.moods == ''){
					this.moods = 'Please input your mood';
				}
				// console.log(this.loggerOrder);
				if(this.loggerOrder.length != 0){
					for(let j = 0 ; j < this.loggerOrder.length; j++){
						this.option.xAxis.data.push(this.loggerOrder[j].time);
						// this.yData.time = this.loggerOrder[j].time;
						// this.yData.total = this.loggerOrder[j].total;
						// this.yValue.push(this.yData);
						this.option.series[0].data.push(this.loggerOrder[j].total);
					}
				}
				console.log(this.option);
				this.drawPie('wallet');
			});
		},
		methods:{
			goOrder:function(target){
				this.$router.push({name:'Order',params:{status:target,user:this.logger}});
			},
			drawPie(id){
				var dom = document.getElementById(id);
				this.charts = echarts.init(dom);
				if(this.option && typeof this.option === "object"){
					this.charts.setOption(this.option, true);
				}
			}
		}
	} 
</script>