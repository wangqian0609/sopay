<template>
	<div class="comfirm">
		<nav-header :title="navTitle"></nav-header>
		<div class="comfirmContent">
			<dl class="address">
				<dd>{{address.addrNam}}<span>{{address.addrTel}}</span></dd>
				<dd>{{address.address}}</dd>
			</dl>
			<ul class="goodInfo">
				<li v-for="item in goods.good">
					<div class="imgs">
						<img :src="item.img">
					</div>
					<div class="info">
						<h2>{{item.title}}</h2>
						<label>{{item.size}} x{{item.num}}<i :style="{backgroundColor:item.color}"></i></label>
						<span>${{item.price}}</span>
					</div>
				</li>
			</ul>
			<div class="price">
				<span>Total</span>
				<label>${{goods.total}}</label>
			</div>
			<div class="payment">
				<input type="button" value="PAYMENT" @click="payment">
			</div>
		</div>
		<dialog-bar v-model="sendVal" type="danger" :title="maskTitle" :content="maskContent" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm" dangerText="Cancel"></dialog-bar>
		<show-pop :title="sendTitie" v-model="isShow" v-on:close="clickClose()"></show-pop>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.comfirm{
		width:100%;
		height:100%;
		.comfirmContent{
			width:100%;
			background-color:#f8f8f8;
			overflow-x:hidden;
			overflow-y:scroll;
			-webkit-overflow-scrolling:touch;
			position:absolute;
			top:.44rem;
			bottom:0;
			.address{
				width:100%;
				min-height:.4rem;
				padding:0 .2rem;
				border-top:.05rem solid #f8f8f8;
				background-color:#fff;
				dd{
					line-height:.2rem;
					padding:.1rem 0;
					font-family:'Montserrat';
					font-size:.17rem;
					color:#333;
					span{
						float:right;
					}
				}
			}
			.goodInfo{
				width:100%;
				padding:0 .2rem;
				border-top:.05rem solid #f8f8f8;
				background-color:#fff;
				li{
					width:100%;
					min-height:1rem;
					padding:.1rem .1rem .1rem 1rem;
					margin-top:.05rem;
					background-color:#fff;
					border-radius:.03rem;
					position:relative;
					.imgs{
						width:.8rem;
						height:.8rem;
						display:flex;
						justify-content:center;
						align-items:center;
						overflow:hidden;
						position:absolute;
						top:.1rem;
						left:.1rem;
						border-radius:.03rem;
						img{
							width:100%;
						}
					}
					.info{
						width:100%;
						h2{
							width:100%;
							line-height:.2rem;
							height:.4rem;
							display:-webkit-box;
							overflow:hidden;
							white-space:normal;
							text-overflow:ellipsis;
							word-wrap:break-word;
							-webkit-line-clamp:2;
							-webkit-box-orient:vertical;
							font-size:.17rem;
							color:#333;
							font-family:'Montserrat';
						}
						label{
							width:100%;
							line-height:.2rem;
							display:inline-block;
							font-size:.17rem;
							font-style:normal;
							color:#666;
							i{
								width:.15rem;
								height:.15rem;
								display:inline-block;
								margin-left:.1rem;
							}
						}
						span{
							width:100%;
							display:inline-block;
							font-size:.17rem;
							font-style:normal;
							color:#999;
							font-family:'Montserrat';
						}
					}
				}
			}
			.price{
				width:100%;
				padding:0 .2rem;
				border-top:.05rem solid #f8f8f8;
				background-color:#fff;
				span{
					width:35%;
					line-height:.4rem;
					display:inline-block;
					font-size:.17rem;
					font-family:'Montserrat';
					color:#9D9D9D;
				}
				label{
					width:65%;
					line-height:.4rem;
					display:inline-block;
					text-align: right;
					float:right;
					font-size:.17rem;
					font-family:'Montserrat';
					color:#de0007;
				}
			}
			.payment{
				width:100%;
				padding:0 .2rem;
				margin-top:.4rem;
				input{
					width:100%;
					height:.44rem;
					line-height:.44rem;
					border:none;
					background-color:#1E1E1E;
					text-align: center;
					font-size:.12rem;
					font-family:'Montserrat';
					color:#fff;
				}
			}
		}
	}
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'
	import dialog from '../components/dialog'
	import showpop from '../components/showpop'

	export default{
		data(){
			return{
				logger:this.$route.params.user,
				goods:this.$route.params.goods,
				address:{},
				navTitle:'ComfirmOrder',
				maskTitle:'',
				maskContent:'',
				sendVal:false,
				sendTitie:'',
				isShow:false
			}
		},
		components:{
			'nav-header':navHeader,
			'dialog-bar':dialog,
			'show-pop':showpop
		},
		mounted(){
			this.$http.get('/api/users').then((data) => {
				const users = data.body.data;
				for(let i = 0; i < users.length; i++){
					if(users[i].name == this.logger){
						this.address = users[i].addr;
					}
				}
				console.log(this.address);
				if(!this.address || !this.address.addrNam || !this.address.addrTel || !this.address.address) {
					this.maskTitle = 'Erro';
					this.maskContent = 'Please enter your address!';
					this.openMask()
				}
			})
		},
		methods:{
			openMask:function(){
				this.sendVal = true;
			},
			clickCancel:function(){
				console.log('点击了取消');
				this.$router.push({name:'Cart',params:{user:this.logger}})
			},
			clickDanger:function(){
				console.log('点击了提示');
			},
			clickConfirm:function(){
				console.log('点击了确认');
				this.$router.push({name:'EditAddress',params:{user:this.logger}})
			},
			payment:function(){
				console.log('支付');
				this.sendTitie = "Successful purchase of goods!";
				this.isShow = true;
			},
			clickClose:function(){
				console.log('点击了关闭');
				this.isShow = false;
				this.$router.push({name:'Home',params:{user:this.logger}})
			}
		}
	}
</script>