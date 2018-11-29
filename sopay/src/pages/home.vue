<template>
	<div class="shopPage">
		<home-nav></home-nav>
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
				<input type="button" value="Shop NoW" @click="goContent('shop')">
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
				float:left;
				color:transparent;
				&:nth-child(1){
					background:url("https://a.icons8.com/pidjqWdg/3WQMOG/men's.png") no-repeat;
					background-size:cover;
					background-position:center;
				}
				&:nth-child(2){
					background:url("https://a.icons8.com/pidjqWdg/88Cwno/women's.png")  no-repeat;
					background-size:cover;
					background-position:center;
				}
				&:nth-child(3){
					background:url("https://a.icons8.com/pidjqWdg/FeUV5K/kids's.png") no-repeat;
					background-size:cover;
					background-position:center;
				}
			}
		}
	}

	@import 'swiper/dist/css/swiper.css'
</style>
<script type="text/javascript">
	import homeNav from '../components/Hheader'
	import Swiper from 'swiper'

	export	default{
		data(){
			return{
				shopList:[{img:'https://a.icons8.com/pidjqWdg/XwTVZm/bitmap.png'},{img:'https://a.icons8.com/pidjqWdg/EdQAdi/bitmap.png'},{img:'https://a.icons8.com/pidjqWdg/O2GEmA/bitmap.png'}],
				logger:this.$route.params.user
			}
		},
		components:{
			'home-nav':homeNav
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