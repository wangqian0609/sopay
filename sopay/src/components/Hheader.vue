<template>
	<div class="navPart" v-bind:class="{ isActive:lists }">
		<nav class="nav">
			<div class="nav-left" @click="listFun">
				<i class="iconfont">&#xe67a;</i>
			</div>
			<div class="nav-label">
				<label>{{title}}</label>
			</div>
			<div class="nav-right">
				<!-- <i class="iconfont">&#xe613;</i> -->
			</div>
			<div class="clear"></div>
		</nav>
		<div class="operate" v-show="lists">
			<dl>
				<dd v-for="item in FuncList" @click="go(item.function)">
					<i :class="item.icon"></i>
					<label>{{item.name}}</label>
				</dd>
				<div class="clear"></div>
			</dl>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';
	@import '../common/icon/iconfont.css';
	
	.navPart{
		width:100%;
		// height:2.34rem;
		position:absolute;
		left:0;
		top:0;
		z-index:20;
		.nav{
			width:100%;
			height:.44rem;
			line-height:.44rem;
			padding:0 .2rem;
			.nav-left{
				width:10%;
				display:inline-block;
				text-align:left;
				float:left;
				.iconfont{
					font-size:.18rem;
					color:#000;
				}
			}
			.nav-label{
				width:80%;
				display:inline-block;
				text-align:center;
				label{
					font-size:.15rem;
					color:#000;
				}
			}
			.nav-right{
				width:10%;
				display:inline-block;
				text-align:right;
				float:right;
				.iconfont{
					font-size:.18rem;
					color:#000;
				}
			}
		}
		.operate{
			width:100%;
			padding:0 .2rem;
			border-top:1px solid #A1A2A5;
			border-bottom:1px solid #A1A2A5;
			dl{
				width:100%;
				display:inline-block;
				dd{
					width:33.3%;
					height:.95rem;
					display:inline-block;
					padding:.3rem 0 0;
					float:left;
					border-right:1px solid #A1A2A5;
					border-bottom:1px solid #A1A2A5;
					i{
						width:100%;
						display:inline-block;
						text-align:center;
						font-size:.21rem;
						color:#000;
					}
					label{
						width:100%;
						display:block;
						text-align:center;
						font-size:.11rem;
						font-family:'Montserrat';
						color:#000;
					}
					&:nth-child(3n){
						border-right:none;
					}
					&:nth-child(4),&:nth-child(5),&:nth-child(6){
						border-bottom:none;
					}
				}
			}
		}
		.clear{
			height:0;
			clear:both;
		}
	}
	.isActive{
		background-color:#fff;
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			title:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				FuncList:[
					{name:'SHOP',icon:"icon-shoppingcar",function:'Home'},
					{name:'OFFERS',icon:"icon-star",function:'Collect'},
					{name:'ORDERS',icon:"icon-label",function:'Order'},
					{name:'CART',icon:"icon-shopping",function:'Cart'},
					{name:'ACCOUNT',icon:"icon-user",function:'Account'},
					{name:'SETTINGS',icon:"icon-setting",function:'Setting'}
				],
				lists:false,
				logger:this.$route.params.user,
			}
		},
		methods:{
			listFun:function(){
				this.lists = !this.lists;
			},
			go:function(target){
				console.log(this.logger);
				if(target == "Order"){
					this.$router.push({name:target,params:{status:'all',user:this.logger}});
				}
				else{
					this.$router.push({name:target,params:{user:this.logger}});
				}
			}
		}
	}
</script>