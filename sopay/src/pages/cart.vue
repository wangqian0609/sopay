<template>
	<div class="cartContent">
		<nav-header :title="navTitle"></nav-header>
		<div class="cartList">
			<div class="noGoods" v-show="goodShow">
				<div class="noSign">
					<label>Shopping has no goods in the cart</label>
				</div>
			</div>
			<div class="goodsList" v-show="!goodShow">
				<ul>
					<li v-for="(item,index) in cartList" data-type="0">
						<div class="goodInfo" @touchstart = 'touchStart'  @touchend = 'touchEnd' @click="skip">
							<div class="img">
								<img :src="item.img">
							</div>
							<div class="content">
								<h2>{{item.title}}</h2>
								<span>{{item.size}}&nbsp;&nbsp;x&nbsp;&nbsp;<div class="color" v-bind:style="{backgroundColor:item.color}"></div></span>
								<dl class="numBox">
									<dd @click="add(index)">+</dd>
									<dd>{{item.num}}</dd>
									<dd @click="sub(index)">-</dd>
								</dl>
								<label>${{item.price}}</label>
							</div>
						</div>
						<div class="deleBtn" :data-index='index' @click="deleteItem">
							<i class="iconfont">&#xe64b;</i>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="cartFooter">
			<dl class="price">
				<dd>
					<span>Subtotal</span>
					<label>${{subTotal}}</label>
				</dd>
				<dd>
					<span>Discount</span>
					<label>${{orderinfo.discount}}</label>
				</dd>
				<dd>
					<span>TOTAL</span>
					<label>${{Total}}</label>
				</dd>
				<div class="clear"></div>
			</dl>
			<input type="button" value="PLACE ORDER" @click="orderGoods">
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.cartContent{
		width:100%;
		height:100%;
		position:relative;
		.clear{
			clear:both;
			height:0;
		}
		.cartList{
			width:100%;
			overflow-x:hidden;
			overflow-y:scroll;
			-webkit-overflow-scrolling:touch;
			border-top:1px solid #f8f8f8;
			position:absolute;
			top:.44rem;
			left:0;
			bottom:1.96rem;
			.noGoods{
				width:100%;
				height:100%;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				padding:.1rem .2rem;
				.noSign{
					width:2.5rem;
					label{
						width:100%;
						text-align:center;
						font-family:'Montserrat';
						font-size:.16rem;
						color:#A1A1A1;
					}
				}
			}
			.goodsList{
				width:100%;
				position:relative;
				ul{
					width:100%;
					li{
						width:100%;
						height:1.3rem;
						border-radius:.03rem;
						background-color:#fff;
						border-bottom:1px solid #D8D8D8;
						position:relative;
						user-select:none;
						transition:all .3s;
						-webkit-trabsition:all .3s;
						.goodInfo{
							width:100%;
							padding:.19rem 0.4rem .19rem .9rem;
							background-color:#fff;
							position:absolute;
							left:0;
							top:0;
							bottom:0;
							z-index:3;
							& > .img{
								width:.82rem;
								height:.92rem;
								overflow:hidden;
								display:-webkit-box;
								-webkit-box-pack:center;
								-webkit-box-align:center;
								position:absolute;
								top:.19rem;
								left:.04rem;
								img{
									width:100%;
								}
							}
							& > .content{
								width:100%;
								h2{
									width:100%;
									line-height:.22rem;
									display:inline-block;
									text-overflow: ellipsis;
								    white-space: nowrap;
								    overflow: hidden;
									margin-bottom:.01rem;
									font-size:.16rem;
									color:#3A3B3D;
								}
								span{
									width:100%;
									line-height:.22rem;
									margin-bottom:.01rem;
									display:inline-block;
									font-size:.13rem;
									color:#656767;
									.color{
										width:.2rem;
										height:.2rem;
										display:inline-block;
										vertical-align:middle;
									}	
								}
								.numBox{
									width:.8rem;
									height:.22rem;
									line-height:.22rem;
									margin-bottom:.01rem;
									text-align:center;
									border:1px solid #D8D8D8;
									display:table;
									dd{
										display:table-cell;
										font-family:'Montserrat';
										font-size:.13rem;
										color:#D8D8D8;
										border-right: 1px solid #D8D8D8;
										&:nth-child(2){
											font-family:"Montserrat";
											font-size:.13rem;
											color:#3A3B3D;
										}
										&:last-child{
											border-right:none;
										}
									}
								}
								label{
									width:100%;
									line-height:.23rem;
									display:inline-block;
									font-size:.13rem;
									color:#937364;
								}

							}
						}
						.deleBtn{
							width:44px;
							height:1.3rem;
							line-height:1.3rem;
							display:inline-block;
							text-align:center;
							background-color:#FD4958;
							position:absolute;
							top:.0;
							right:-44px;
							.iconfont{
								color:#fff;
								font-size:.17rem;
							}
						}
					}
					li[data-type="0"]{
					  transform: translate3d(0,0,0);
					}
					li[data-type="1"]{
					  transform: translate3d(-44px,0,0);
					}
				}
			}
		}
		.cartFooter{
			width:100%;
			height:1.96rem;
			padding:0 .2rem .02rem;;
			background-color:#f8f8f8;
			position:absolute;
			bottom:0;
			left:0;
			z-index:20;
			.price{
				width:100%;
				display:inline-block;
				dd{
					width:100%;
					line-height:.5rem;
					span{
						width:35%;
						display:inline-block;
						font-size:.13rem;
						font-family:'Montserrat';
						color:#9D9D9D;
					}
					label{
						width:65%;
						display:inline-block;
						text-align: right;
						float:right;
						font-size:.13rem;
						font-family:'Montserrat';
						color:#3A3B3D;
					}
				}
			}
			input{
				width:90%;
				height:.44rem;
				line-height:.44rem;
				display:block;
				margin:0 auto;
				border:none;
				background-color:#1E1E1E;
				text-align: center;
				font-size:.12rem;
				font-family:'Montserrat';
				color:#fff;

			}
		}
	}
</style>
<script type="text/javascript">
	import  navHeader from '../components/Hheader'

	export default{
		data(){
			return{
				navTitle:'Cart',
				logger:this.$route.params.user,
				goodShow:false,
				startX:0,
				endX:0,
				cartList:[],
				orderinfo:{
					good:[],
					subtotal:0,
					discount:0,
					total:0,
				}
			}
		},
		components:{
			"nav-header":navHeader
		},
		mounted(){
			this.$http.get('api/users').then((data) => {
				const user = data.body.data;
				for(let i = 0 ; i < user.length; i++){
					if(user[i].name == this.logger){
						this.cartList = user[i].cart;
					}
				}
				console.log(this.cartList);
				if(this.cartList.length == 0){
					this.goodShow = true;
				}
			});
		},
		computed:{
			Total:function(){
				this.orderinfo.total = this.orderinfo.subtotal - this.orderinfo.discount;
				return this.orderinfo.total;
			},
			subTotal:function(){
				this.orderinfo.subtotal = 0;
				for(let i = 0; i < this.cartList.length; i++){
					this.orderinfo.subtotal += this.cartList[i].price * this.cartList[i].num;
				}
				return this.orderinfo.subtotal;
			}
		},
		methods:{
			add:function(id){
				this.cartList[id].num ++;
			},
			sub:function(id){
				this.cartList[id].num --;
				if(this.cartList[id].num < 1){
					this.cartList[id].num = 1;
				}
			},
			skip:function(){
				if(this.checkSlide()){
					this.restSlide();
				}
				else{
					console.log('you click the slide');
				}
			},
			touchStart:function(ev){
				ev = ev || event;
				if(ev.touches.length == 1){
					this.startX = ev.touches[0].clientX;
				}
			},
			touchEnd:function(ev){
				ev = ev || event;
				let parentElement = ev.currentTarget.parentElement;
				this.endX = ev.changedTouches[0].clientX;
				if(parentElement.dataset.type == 0 && this.startX - this.endX > 44){
					this.restSlide();
					parentElement.dataset.type = 1;
				}
				if (parentElement.dataset.type == 1 && this.startX - this.endX < -44){
					this.restSlide();
					parentElement.dataset.type = 0;
				}
				this.startX = 0;
				this.endX = 0;
			},
			checkSlide:function(){
				let listItems = document.getElementsByTagName('li');
				for(let i = 0 ; i < listItems.length; i++){
					if( listItems[i].dataset.type == 1){
						return true;
					}
					return false;
				}
			},
			restSlide:function(){
				let listItems = document.getElementsByTagName('li');
				for( let i = 0; i < listItems.length; i++){
					listItems[i].dataset.type = 0;
				}
			},
			deleteItem:function(ev){
				ev = ev || event;
				let index = ev.currentTarget.dataset.index;
				this.restSlide();
				this.cartList.splice(index,1);
				// console.log(this.cartList);
			},
			orderGoods:function(){
				this.orderinfo.good = this.cartList;
				console.log(this.orderinfo);
				this.cartList = [];
				this.goodShow = true;
			}
		}
	}
</script>