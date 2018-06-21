<template>
	<li class="sec_li">
		<router-link :to="{name:'detail',params:{num:num}}" :num="num" class="lp_li_a">
			<div class="lp_li_imgWrap">
				<img v-bind:src="imgUrl">
			</div>
			<p class="lp_li_name">{{ title }}</p>
			<p class="lp_li_price">{{ price }}元</p>
		</router-link>
	</li>
</template>
<style lang="scss" scoped="" type="text/css">
	.sec_li{
		float:left;
		width:50%;
		margin-bottom:.1rem;
		.lp_li_a{
			display:block;
			padding:.3rem 0;
			margin:0 .05rem;
			text-align:center;
			background:#fff;
			.lp_li_imgWrap{
				padding:.24rem 0;
				& > img{
					width:auto;
					height:2.3rem;
				}
			}
			.lp_li_name{
				height:.5rem;
				line-height:.5rem;
				font-size:16px;
				color:#333;
			}
			.lp_li_price{
				height:.5rem;
				line-height:.5rem;
				font-size:16px;
				color:#fb2b2b;
			}
		}
	}
</style>
<script>
	export default{
		props:['num','price','title','imgUrl'],
	}
</script>