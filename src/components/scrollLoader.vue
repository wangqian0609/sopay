<template>
	<div id="scrollLoder-container" class="container-main">
		<div class="loading" v-if="topLoading">
			<div class="loder">加载中……</div>
		</div>

		<div :style="'min-height' + realMinHeight + 'px; overflow-x:hidden'" class="container-div">
			<slot></slot>
		</div>
		
		<!-- <div class="loading" v-if="bottonLoading">
			<div class="loader">加载中……</div>
		</div> -->
	</div>
</template>
<style lang="scss" scoped="scoped" type="text/css">
	.container-main{
		width:100%;
		height:100%;
		display:inline-block;
		margin:0 auto;
		overflow:auto;
		overflow-x:hidden;
		padding:0;
		.container-div{
			width: 100%;
		    height: 100%;
		    position: relative;
			display: inline-block;
		}
	}
	.loading{
		width:100%;
		height:40px;
		position:relative;
		overflow:hidden;
		text-align:center;
		margin:5px 0;
		color:#999;
		font-size:13px;
	}
	.loading-icon{
		color:#707070;
	}
	.loader{
		font-size:10px;
		margin:8px auto;
		text-indent:-9999em;
		width:24px;
		height:24px;
		border-radius:50%;
		background:#999;
		background: -moz-linear-gradient(left, #999 10%, rgba(255, 255, 255, 0) 42%);
        background: -webkit-linear-gradient(left, #999 10%, rgba(255, 255, 255, 0) 42%);
        background: -o-linear-gradient(left, #999 10%, rgba(255, 255, 255, 0) 42%);
        background: -ms-linear-gradient(left, #999 10%, rgba(255, 255, 255, 0) 42%);
        background: linear-gradient(to right, #999 10%, rgba(255, 255, 255, 0) 42%);
        position: relative;
        -webkit-animation: load3 1s infinite linear;
        animation: load3 1s infinite linear;
        &:before{
        	content:"";
        	width: 50%;
	        height: 50%;
	        background: #999;
	        border-radius: 100% 0 0 0;
	        position: absolute;
	        top: 0;
	        left: 0;
        }
        &:after{
        	content:"";
			background: #f5f5f5;
	        width: 72%;
	        height: 75%;
	        border-radius: 68%;
			background: #f5f5f5;
	        width: 72%;
	        height: 75%;
	        border-radius: 68%;
        }
	}
	@-webkit-keyframes load3 {
	    0% {
	        -webkit-transform: rotate(0deg);
	        transform: rotate(0deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	        transform: rotate(360deg);
	    }
    }
    @keyframes load3 {
	    0% {
	        -webkit-transform: rotate(0deg);
	        transform: rotate(0deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	        transform: rotate(360deg);
	    }
    }
</style>
<script>
	export default{
		name:"scroll-loader",
		props:{
			'minHeight':{
				type:Number,
				default:800
			},
		},
		created(){
		},
		computed:{
			realMinHeight(){
				return this.minHeight + 30
			}
		},
		data(){
			return{
				topLoading:false,
				// bottonLoading:false,

				stopTopLoading:false,
				// stopBottonLoading:false,
			}
		},
		mounted(){
			this.listenScroll();
		},
		methods:{
			listenScroll(){
				var me = this;
				var topDone = (stopTopLoading) => {
					me.topLoading = false;
					if(stopTopLoading) me.stopTopLoading = true; 

				};

				// var bottonDone = (stopBottonLoading) => {
				// 	me.bottonLoading = false;
				// 	if(stopBottonLoading) me.stopBottonLoading = true;
				// };

				setTimeout(function(){
					var scrollContainer = document.getElementById('scrollLoder-container');
					scrollContainer.onscroll = function(){
						if(scrollContainer.scrollTop <= 0 && !me.stopTopLoading){
							if(me.topLoading) return;
							me.topLoading = true;
							me.$emit('scroll-to-top',topDone);
							// if((scrollContainer.offsetHeight + scrollContainer.scrollTop + 1 >= scrollContainer.scrollHeight) && !me.stopBottonLoading){
							// 	if(me.bottonLoading) return;
							// 	me.bottonLoading = true;
							// 	scrollContainer.scrollTop += 40;
							// 	me.$emit('scroll-to-botton',bottonDone);
							// }
						}
					}
				},50)
			}
		}
	}
</script>