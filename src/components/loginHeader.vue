<template>
	<div class="loginHeader">
		<header class="header_inner">
			<div class="header_cont">登录</div>
		</header>
	</div>
</template>
<style lang="scss" type="text/css">
	.loginHeader{
		height:.88rem;
		.header_inner{
			position:fixed;
			top:0;
			left:0;
			right:0;
			z-index:99;
			max-width:768px;
			height:.88rem;
			margin:0 auto;
			padding:0 .24rem;
			border-bottom:.02rem solid #80ccd6;
			background-color:#fff;
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
	}
</style>