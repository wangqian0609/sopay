<template>
	<div class="shopPage">
		<nav-header :title="navTitle"></nav-header>
		<div class="ShopBg">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in shopList">
						<img :src="item.img">
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<div class="shopPart">
				<h1>SALE</h1>
				<h3>GET UP TO 60% OFF</h3>
				<input type="button" value="Shop Now" @click="goContent('Shop')">
			</div>
		</div>
		<dl class="ShopBtn">
			<dd @click="goContent('Male')">Male</dd>
			<dd @click="goContent('Female')">Female</dd>
			<dd @click="goContent('Kids')">Kids</dd>
		</dl>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.shopPage{
		width:100%;
		height:100%;
		position:relative;
		.ShopBg{
			width:100%;
			height:100%;
			position:relative;
			.swiper-container{
				.swiper-pagination{
					bottom:1.73rem;
					.swiper-pagination-bullet{
						border:1px solid #fff;
						background-color:transparent;
						opacity:1;
					}
					.swiper-pagination-bullet-active{
						background-color:#fff;
					}
				}
			}
			.shopPart{
				width:100%;
				padding:0 .68rem;
				text-align:center;
				position:absolute;
				bottom:2.04rem;
				left:0;
				z-index:1;
				h1{
					line-height:1;
					color:#fff;
					font-size:.76rem;
					font-family:'Montserrat';
					font-weight:bold;
				}
				h3{
					line-height:1;
					color:#fff;
					font-size:.15rem;
					font-family:'Montserrat';
					font-weight:normal;
				}
				input{
					width:1.44rem;
					height:.31rem;
					line-height:.31rem;
					display:inline-block;
					margin-top:.16rem;
					background-color:transparent;
					text-align:center;
					font-size:.15rem;
					font-family:'Montserrat';
					color:#fff;
					border:1px solid #fff;
				}
			}
		}
		.ShopBtn{
			width:100%;
			height:1.57rem;
			display:inline-block;
			position:absolute;
			bottom:0;
			left:0;
			z-index:2;
			dd{
				width:33.3%;
				height:1.57rem;
				display:inline-block;
				position:relative;
				float:left;
				color:transparent;
				&:nth-child(1){
					background:url("../assset/men's.png") no-repeat;
					background-size:cover;
					background-position:center;
					&:after{
						content:'Male';
						width:100%;
						height:.31rem;
						line-height:.31rem;
						text-align:center;
						display:inline-block;
						background-color:rgba(231,85,90,.85);
						font-family:'Montserrat';
						font-size:.13rem;
						color:#fff;
						position:absolute;
						bottom:0;
						left:0;
					}
				}
				&:nth-child(2){
					background:url("../assset/women's.png")  no-repeat;
					background-size:cover;
					background-position:center;
					&:after{
						content:'Female';
						width:100%;
						height:.31rem;
						line-height:.31rem;
						text-align:center;
						display:inline-block;
						background-color:rgba(59,214,248,.85);
						font-family:'Montserrat';
						font-size:.13rem;
						color:#fff;
						position:absolute;
						bottom:0;
						left:0;
					}
				}
				&:nth-child(3){
					background:url("../assset/kids's.png") no-repeat;
					background-size:cover;
					background-position:center;
					&:after{
						content:'Kids';
						width:100%;
						height:.31rem;
						line-height:.31rem;
						text-align:center;
						display:inline-block;
						background-color:rgba(172,130,226,.85);
						font-family:'Montserrat';
						font-size:.13rem;
						color:#fff;
						position:absolute;
						bottom:0;
						left:0;
					}
				}
			}
		}
	}

	@import 'swiper/dist/css/swiper.min.css'
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'
	import Swiper from 'swiper'

	export	default{
		data(){
			return{
				shopList:[{img:'https://a.icons8.com/pidjqWdg/XwTVZm/bitmap.png'},{img:'https://a.icons8.com/pidjqWdg/EdQAdi/bitmap.png'},{img:'https://a.icons8.com/pidjqWdg/O2GEmA/bitmap.png'}],
				logger:this.$route.params.user,
				navTitle:'SHOP'
			}
		},
		components:{
			'nav-header':navHeader
		},
		mounted(){
			var ShopSwiper = new Swiper('.swiper-container',{
				autoplay:{
					stopOnLastSlide:true,
					disableOnInteraction:false,
				},
				loop: true,
				pagination:{
					el:'.swiper-pagination',
					clickable:true
				}
			})
		},
		methods:{
			goContent:function(target){
				// console.log(this.logger)
				this.$router.push({name:'List',params:{type:target,user:this.logger}})
			}
		}
	} 
</script>