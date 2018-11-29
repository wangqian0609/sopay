<template>
	<div class="welContent">
		<div class="welSwiper">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div v-for="item in piclists" class="swiper-slide">
						<img :src='item.img' v-bind:date-src='item.img'>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<div class="swiper-tip">Find out about new cool places that value your feedback by using</div>
		</div>
		<div class="WelBtn">
			<label @click="goStart">Get Start</label>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.welContent{
		width: 100%;
		height: 100%;
		position: relative;
		background: linear-gradient(#6077E7,#3599DE);
		background: -webkit-linear-gradient(#6077E7,#3599DE);
		.welSwiper{
			width:100%;
			overflow-x: hidden;
			text-align: center;
			padding-top:.84rem;
			.swiper-container{
				width:100%;
				// height:384px;
				display: block;
				margin: 0 auto;
				.swiper-wrapper{
					width:100%;
					.swiper-slide{
						// transform: scale(1);
						// -webkit-transform: scale(1);
						img{
							width: 100%;
						    height: 100%;
						    opacity:.2;
						    transform:scale(0.8);
						    -webkit-transform:scale(0.8);
						}
					}
					.swiper-slide-active{
						img{
							opacity:1;
							transform:scale(1);
							-webkit-transform:scale(1);
						}
						&:before{
							display:none;
						}
					}
				}
				.swiper-pagination{}
			}
			.swiper-tip{
				width:100%;
				padding:.48rem .3rem .7rem;
				display:inline-block;
				text-align:center;
				font-family:'Montserrat';
				font-size:.17rem;
				color:#fff;
				// word-break:break-all;
			}
		}
		.WelBtn{
			width:100%;
			text-align:center;
			label{
				font-family:'Montserrat';
				font-size:.125rem;
				color:#fff;
			}
		}
	}

	@import 'swiper/dist/css/swiper.css'
</style>
<script>
	import Swiper from 'swiper'

	export default{
		data(){
			return{
				piclists:[{img:'https://a.icons8.com/XJWYZYvn/HbhYU1/bitmap.png'},{img:'https://a.icons8.com/XJWYZYvn/HbhYU1/bitmap.png'},{img:'https://a.icons8.com/XJWYZYvn/HbhYU1/bitmap.png'}],
			}
		},
		methods:{
			goStart:function(){
				this.$router.push({path:'/Login'});
			}
		},
		mounted(){
			var welSwiper = new Swiper('.swiper-container',{
				autoplay:{
					stopOnLastSlide:true,
					disableOnInteraction:false,
				},
				// width: 630,
				loop: true,
				slidesPerView: 2,
				spaceBetween: 15,
				initialSlide:2,
				centeredSlides: true,
				pagination:{
					el:'.swiper-pagination',
					clickable:true,
				}
			})
		}
	}
</script>