<template>
	<div class="sortContent">
		<nav-header :title="navTitle"></nav-header>
		<div class="listContent">
			<div>{{navTitle}}</div>
			<ul>
				<li v-for="item in lists">
					{{item.name}}
				</li>
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
				salesImg:'',
				lists:[]
			}
		},
		components:{
			'nav-header':navHeader
		},
		mounted(){
			this.$http.get('/api/commodities').then((data) =>{
				const goods = data.body.data;
				for(let i = 0; i< goods.length; i++){
					if(goods[i].type == this.navTitle){
						this.lists = goods[i].content;
						this.salesImg = goods[i].ad;
						console.log(this.lists);
						return this.lists;
					}
				} 
			})
		}
	}
</script>