<template>
	<div class="orderContent">
		<nav-header :title="navTitle"></nav-header>
		<div class="content" v-cloak>
			<tabs v-model='value'>
				<pane label="标签一" name="0">
					标签一的内容
				</pane>
				<pane label="标签二" name="1">
					标签二的内容
				</pane>
				<pane label="标签三" name="2">
					标签三的内容
				</pane>
			</tabs>
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	@import '../common/fonts/font.css';
	.orderContent{
		width:100%;
		height:100%;
		position:relative;
		.content{
			width:100%;
			position:absolute;
			top:.44rem;
			left:0;
			bottom:0;
		}
	}
	[v-cloak]{
		display:none;
	}
	.tabs{
		font-size:.16rem;
		color:#1a1a1a;
		.tabs-bar{
			position:relative;
			&:after{
				content:'';
				display:block;
				width:100%;
				height:1px;
				background-color:#a1a1a1;
				// position:absolute;
				// left:0;
				// bottom:0;
			}
		}
		.tabs-tab{
			display:inline-block;
			padding:.04rem .2rem;
			margin-right:.06rem;
			background-color:#fff;
			border:1px solid #a1a1a1;
			cursor:pointer;
			position:relative;
		}
		.tabs-tab-active{
			color:#4BC2FF;
			border-top:1px solid #4BC2FF;
			border-bottom:1px solid #4BC2FF;
			&:before{
				content:'';
				display:block;
				height:1px solid #4BC2FF;
				position:absolute;
				top:0;
				left:0;
				right:0;
			}
		}
		.tabs-content{
			padding:.08rem 0;
		}
	}
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'
	import tab from '../components/Tabtabs'
	import tabpane from '../components/Tabpane'

	export default{
		data(){
			return{
				navTitle:'Order',
				value:'0'
			}
		},
		components:{
			'nav-header':navHeader,
			'tabs':tab,
			'pane':tabpane
		}
	} 
</script>
