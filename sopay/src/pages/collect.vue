<template>
	<div class="collectContent">
		<nav-header :title="navTitle"></nav-header>
		<div class="collectContent">
			<ul>
				<li v-for=""></li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	.collect{
		width:100%;
		height:100%;
		.collectContent{
			width:100%;
			overflow-x:hidden;
			overflow-y:scroll;
			-webkit-overflow-scrolling:touch;
			position:absolute;
			top:.44rem;
			bottom:0;
			background-color:#f8f8f8;
		}
	}
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'

	export default{
		data(){
			return{
				navTitle:'Offers',
				logger:this.$route.params.user,
				collectList:[]
			}
		},
		components:{
			'nav-header':navHeader
		},
		mounted(){
			this.$http.get('/api/users').then((data) =>{
				const userlist = data.body.data;
				for(let i = 0;i < userlist.length; i++){
					if(userlist[i].name == this.logger){
						this.collectList = userlist[i].collect;
					}
				}
				console.log(this.collectList);
			})
		}
	}
</script>