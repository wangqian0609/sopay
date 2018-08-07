<template>
	<div class="welContant">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="pic in lists">
					<!-- <img :src = 'pic.img'> -->
					<img :src='pic.img' v-bind:data-src='pic.img' v-bind:data-srcset='pic.img' class="swiper-lazy">
					<div class="swiper-lazy-preloader"></div>
				</div>
				<div class="swiper-slide">
					<input class="startBtn" type="button" value="立即开始" @click='goHome'>
					<img src="https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/w1.jpg">
				</div>
			</div>
			<!--导航-->
			<div class="swiper-pagination"></div>
			<!-- 滚动条 -->
			<div class="swiper-scrollbar"></div>
			<!-- 虚拟 -->
			<!-- <div class="swiper-wrapper"></div> -->
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	@import url("swiper/dist/css/swiper.min.css");

	.welContant{
		width:100%;
		position:absolute;
		left:0;
		top:0;
		bottom:0;
		.startBtn{
			position: absolute;
		    bottom: 10%;
		    left: 27.5%;
		    z-index: 2;
		    width: 45%;
		    height: .8rem;
		    border: 1px solid #fff;
		    border-radius: 5px;
		    background: transparent;
		    color: #fff;
		    font-size: 18px;
		    outline:none;
		}
		img{
			width:100%;
			height:100%;
		}
	}
</style>
<script>
	//Swiper
	import Swiper from '../../static/swiper.min.js'

	var picList = [{img:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/w1.jpg'},{img:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/w1.jpg'},{img:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/w1.jpg'},{img:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/w1.jpg'},{img:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/w1.jpg'},{img:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/w1.jpg'}];

	export default{
		data(){
			return{
				lists:picList,
				useTag:'anoymous'
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
				autoplay:{
					stopOnLastSlide: true,
					disableOnInteraction: false,
				},
				loop:false,
				observer:true,
				observerParents:true,
				watchOverflow:true,
				effect : 'cube',
				// effect : 'coverflow',
				// slidesPerView: 3,
				// centeredSlides: true,
				// pagination: {
				//       el: '.swiper-pagination',
				//       type: 'progressbar',
				//       progressbarOpposite: true,
			 //    },
			    scrollbar:{
			    	el:'.swiper-scrollbar',
			    	hide:true,
			    	draggable:true
			    },
			    keyboard:{
			    	enabled:true,
			    },
			    lazy:{
			    	loadPrevNext:true,
			    },
			    zoom:{
			    	maxRatio: 5,
			    	toggle:false,
			    },
			    // virtual:{
			    // 	slides:['slide 1','slide 2','slide 3','slide 4','slide 5']
			    // }
			})
		},
		methods:{
			goHome:function(){
				this.$router.push({name:'Home',params:{
					user:this.useTag}})
			}
		}
	}
</script>