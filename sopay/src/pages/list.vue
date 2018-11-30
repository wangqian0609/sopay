<template>
	<div class="sortContent">
		<nav-header :title="navTitle"></nav-header>
		<div class="listContent">
			<ul>
				<li v-for=""></li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped="">
	
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'

	export default{
		data(){
			return{
				navTitle:this.$route.params.type,
				lists:[]
			}
		},
		components:{
			'nav-header':navHeader
		}
	}
</script>