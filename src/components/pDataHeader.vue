<template>
	<header class="header">
		<div class="header_inner flexWrap">
			<div id="header_btn_nav" class="header_btn header_btn_back" v-on:click="goBack">返回</div>
			<div class="header_cont flex">个人资料</div>
			<div class="header_btn header_btn_cart"></div>
		</div>
	</header>
</template>
<style lang="scss" type="text/css">
	.flexWrap{
		display:-webkit-flex;
		display:flex;
		.flex{
			flex:1;
		}
	}
	.header{
		height:0.88rem;
		.header_inner{
			position:fixed;
			top:0;
			left:0;
			right:0;
			z-index:99;
			max-width:768px;
			height:0.88rem;
			margin:0 auto;
			padding:0 .24rem;
			border-bottom:.02rem solid #80ccd6;
			background-color:#fff;
		}
		.header_btn{
			width:1rem;
			height:100%;
			background-repeat:no-repeat;
			font-size:15px;
		}
		.header_btn_back{
			line-height:0.86rem;
		}
		.header_cont{
			text-align:center;
			padding:0 .4rem;
			line-height:.86rem;
			font-size:15px;
			overflow:hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
		}
	}
</style>
<script>
	export default{
		props:{
			gBdata:{
				type:Object,
				default:''
			}
		},
		data(){
			return{
				personInfo:this.gBdata,
			}
		},
		methods:{
			goBack(){
				this.$router.push({name:'person',params:{user:this.personInfo}})
				// window.history.back();
			}
		}
	}
</script>