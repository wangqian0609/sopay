<template>
	<div>
		<nav-header :title="navTitle"></nav-header>
	</div>
</template>
<style type="text/css" lang="scss"></style>
<script type="text/javascript">
	import  navHeader from '../components/Hheader'

	export default{
		data(){
			return{
				navTitle:'Cart'
			}
		},
		components:{
			"nav-header":navHeader
		}
	}
</script>