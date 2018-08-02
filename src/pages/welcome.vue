<template>
	<div class="welContant">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="pic in lists">
					<img :src = 'pic.img'>
				</div>
				<div class="swiper-slide">
					<input class="startBtn" type="button" value="立即开始" @click='goHome'>
					<img src="../../src/assets/w1.jpg">
				</div>
			</div>
			<!--导航-->
			<div class="swiper-pagination"></div>
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

	var picList = [{img:'../../src/assets/w1.jpg'},{img:'../../src/assets/w1.jpg'},{img:'../../src/assets/w1.jpg'},{img:'../../src/assets/w1.jpg'},{img:'../../src/assets/w1.jpg'},{img:'../../src/assets/w1.jpg'}],user = '';

	export default{
		data(){
			return{
				lists:picList
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
				autoplay:true,
				loop:true,
				observer:true,
				observerParents:true,
				pagination: {
				      el: '.swiper-pagination',
			    },
			})
		},
		methods:{
			goHome:function(){
				this.$router.push({name:'Home',params:{
					user:user
				}})
			}
		}
	}
</script>