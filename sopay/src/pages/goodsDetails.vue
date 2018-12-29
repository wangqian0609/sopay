<template>
	<div class="goodsContent">
		<nav-header :title="navTitle" ></nav-header>
		<div class="goodsMiddle">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in goods.img">
						<img :src="item">
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<div class="goodsCollect" :class="{GotBlue:isCollect}" @click="isCollect = !isCollect"></div>
		</div>
		<div class="goodsInfo" v-show="isShow">
			<h2>{{goods.title}}</h2>
			<label>{{goods.describe}}</label>
			<dl class="goodSize">
				<dd v-for="(item,index) in goods.size" @click="selectSize(index)" v-bind:class="{active:index == currSize}">{{item}}</dd>
			</dl>
			<ul class="goodColor">
				<li v-for="(value,index) in goods.color" v-bind:style="{backgroundColor:value}" @click="selectColor(index)" v-bind:class="{active:index == currColor}"></li>
			</ul>
			<div class="goodNum">
				<label>数量</label>
				<dl class="numBox">
					<dd @click="addBtn">+</dd>
					<dd>{{selectGoods.num}}</dd>
					<dd @click="subBtn">-</dd>
				</dl>
			</div>
			<div class="clear"></div>
		</div>
		<div class="goodsFooter">
			<div class="left">
				<input type="button" value="Add To Cart" @click="addCart()">
			</div>
			<div class="center" @click="showDetails">
				<i v-show="!isShow" class="iconfont up" >&#xe64f;</i>
				<label>Show Details</label>
				<i v-show="isShow" class="iconfont down">&#xe64f;</i>
			</div>
			<div class="right">
				<i>${{goods.discount}}</i>
				<label>${{goods.price}}</label>
			</div>
			<div class="clear"></div>
		</div>
		<dialog-bar v-model="sendVal" type="danger" :title="maskTitle" :content="maskContent" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm" dangerText="Cancel"></dialog-bar>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.goodsContent{
		width:100%;
		height:100%;
		display:relative;
		.clear{
			clear:both;
			height:0;
		}
		.goodsMiddle{
			width:100%;
			background-color:#f8f8f8;
			position:absolute;
			top:.44rem;
			bottom:.68rem;
		}
		.goodsCollect{
			font-family:"iconfonts" !important;
			font-size:.3rem;
			color:#666;
			font-style:normal;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			position:fixed;
			right:.2rem;
			top:.5rem;
			z-index:2;
			&:before{
				content: "\e659";
			}
		}
		.GotBlue{
			color:#6077E7;
		}
		.goodsInfo{
			width:100%;
			background-color:rgba(255,255,255,0.6);
			position:absolute;
			left:0;
			bottom:.68rem;
			z-index:2;
			& > h2{
				width:100%;
				padding:.1rem .2rem;
				display: inline-block;
				font-family: 'Montserrat';
				font-size:.2rem;
				color:#1a1a1a;
				text-align: center;
			}
			& > label{
				width:100%;
				padding:0 .2rem .1rem;
				display: inline-block;
				font-family: 'Montserrat';
				font-size:.17rem;
				color:#1a1a1a;
				text-align: left;
			}
			.goodSize{
				width:100%;
				display:table;
				dd{
					height:.39rem;
					line-height:.39rem;
					display:table-cell;
					font-family: 'Montserrat';
					font-size:.15rem;
					color:#1a1a1a;
					text-align: center;
					border:1px solid #a1a1a1;
				}
				& > .active{
					border:1px solid #4976EF;
				}
			}
			.goodColor{
				width:100%;
				display:table;
				li{
					height:.39rem;
					display:table-cell;
					border:1px solid #a1a1a1;
					position:relative;
				}
				& > .active:after{
					content:'√';
					width:.2rem;
					height:.2rem;
					line-height:.2rem;
					display:inline-block;
					color:#fff;
					margin-top: -.1rem;
					margin-left: -.1rem;
					text-align:center;
					position:absolute;
					left:50%;
					top:50%;
				}
			}
			.goodNum{
				width:100%;
				padding:.05rem .2rem;
				display:inline-block;
				label{
					width:40%;
					display:inline-block;
					text-align: left;
					line-height:.35rem;
					font-family:'Montserrat';
					font-size:.17rem;
					color:#1a1a1a;
				}
				.numBox{
					min-width:45%;
					display:table;
					text-align: center;
					float:right;
					border:1px solid #D8D8D8;
					dd{
						display:table-cell;
						line-height:.35rem;
						font-family:'Montserrat';
						font-size:.17rem;
						color:#D8D8D8;
						border-right: 1px solid #D8D8D8;
						&:nth-child(2){
							font-family:'Montserrat';
							font-size:.13rem;
							color:#3A3B3D;
						}
						&:last-child{
							border-right:none;
						}
					}
				}
			}
		}
		.goodsFooter{
			width:100%;
			height:.68rem;
			padding:.12rem .1rem 0;
			background-color:#fff;
			border-top:1px solid #979797;
			position:absolute;
			left:0;
			bottom:0;
			z-index:20;
			.left{
				width:33%;
				display:inline-block;
				vertical-align: top;
				float:left;
				input{
					width:100%;
					height:.44rem;
					line-height:.44rem;
					text-align:center;
					display:inline-block;
					border:none;
					background-color:#1f1f1f;
					font-family:'Montserrat';
					font-size:.13rem;
					color:#fff;
				}
			}
			.center{
				width:30%;
				display:inline-block;
				vertical-align: top;
				text-align:center;
				float:left;
				.up{
					width: .22rem;
					line-height:.22rem;
					display:block;
					margin:auto;
					transform:rotate(90deg);
					-webkit-transform:rotate(90deg);
					font-size:.12rem;
					color:#1f1f1f;
				}
				.down{
					width: .22rem;
					line-height:.22rem;
					display:block;
					margin:auto;
					transform:rotate(-90deg);
					-webkit-transform:rotate(-90deg);
					font-size:.12rem;
					color:#1f1f1f;
				}
				label{
					width:100%;
					line-height:.22rem;
					display:block;
					font-family:'Montserrat';
					font-size:.12rem;
					color:#1f1f1f;
				}
			}
			.right{
				width:34%;
				display:inline-block;
				vertical-align: top;
				float:right;
				text-align: right;
				i{
					width:100%;
					line-height:.17rem;
					display:block;
					font-size:.11rem;
					font-style:normal;
					color:#a1a1a1;
				}
				label{
					width:100%;
					line-height:.27rem;
					display:block;
					font-size:.2rem;
					color:#1f1f1f;
				}
			}
		}
	}

	@import 'swiper/dist/css/swiper.min.css'
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'
	import dialog from '../components/dialog'
	import Swiper from 'swiper'

	export default{
		data(){
			return{
				navTitle:this.$route.params.title,
				logger:this.$route.params.user,
				isShow:false,
				isCollect:false,
				currSize:0,
				currColor:0,
				goods:'',
				sendVal:false,
				maskTitle:'',
				maskContent:'',
				selectGoods:{
					'title':'',
					'price':'',
					'color':'',
					'size':'',
					'img':'',
					'num':1
				}
			}
		},
		components:{
			"nav-header":navHeader,
			"dialog-bar":dialog
		},
		mounted(){
			this.$http.get('api/goods').then((data) => {
				const good = data.body.data;
				for(let i= 0; i < good.length; i++){
					if(good[i].title == this.navTitle){
						this.goods = good[i];	
					}
				}
				// console.log(this.goods);
			})

			var GoodSwiper = new Swiper('.swiper-container',{
				autoplay:{
					stopOnLastSlide:true,
					disableOnInteraction:false,
				},
				loop:true,
				pagination:{
					el:'.swiper-pagination',
					clickable:true
				}
			})
		},
		methods:{
			subBtn:function(){
				this.selectGoods.num --;
				if(this.selectGoods.num < 1){
					this.selectGoods.num = 1;
				}
			},
			addBtn:function(){
				this.selectGoods.num ++;
			},
			showDetails:function(){
				this.isShow = !this.isShow;
			},
			selectSize:function(index){
				this.currSize = index;
				// console.log('Size:' + this.currSize);
			},
			selectColor:function(indexs){
				this.currColor = indexs;
				// console.log('Color:' + this.currColor);
			},
			openMask:function(index){
				this.sendVal = true;
			},
			clickCancel:function(){
				console.log('点击了取消');
			},
			clickDanger:function(){
				console.log('点击了提示');
			},
			clickConfirm:function(){
				console.log('点击了确认');
				this.selectGoods.title = this.navTitle,
				this.selectGoods.price=this.goods.price,
				this.selectGoods.color=this.goods.color[this.currColor],
				this.selectGoods.size=this.goods.size[this.currSize],
				this.selectGoods.img = this.goods.img[0];
				console.log(this.selectGoods);
			},
			addCart:function(){
				this.maskTitle = 'Tip';
				this.maskContent = 'The item you selected has been successfully added to the cart';
				this.openMask('a');
			},
		}
	}

</script>