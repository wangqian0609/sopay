<template>
	<div class="sortContent">
		<nav-header :title="navTitle"></nav-header>
	</div>
</template>
<style type="text/css" lang="scss" scoped="">
	.navPart{
		background-color:#fff;
		.nav-left .iconfont , .nav-right .iconfont{
			color:#000 !important;
		}
		.nav-label label{
			color:#000 !important;
		}
	}
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'

	export default{
		data(){
			return{
				navTitle:this.$route.params.type,
			}
		},
		components:{
			'nav-header':navHeader
		}
	}
</script>