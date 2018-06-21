<template>
	<div class="detail">
		<detail-header></detail-header>
		<img v-bind:src="object.imgUrl">
		<p>{{ object.detail }}</p>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.detail{
		padding:.24rem;
		font-size:12px;
		img{
			display:block;
			width:80%;
			margin:0 auto .2rem;
		}
		p{
			font-size:14px;
			line-height:.5rem;
			text-align:justify;
			padding-bottom:.24rem;
		}
	}
</style>
<script>
	import DetailHeader from '../components/DetailHeader'

	export default{
		data(){
			return{
				// num:'',
				object:{
					num:'',
					imgUrl:'',
					detail:''
				}
			}
		},
		components:{
			DetailHeader
		},
		created(){
			this.fetchDate();
		},
		methods:{
			fetchDate(){
				this.loading = true;
				var id = this.$route.params.num;
				this.$http.get('/api/books').then(response => {
					for(let i = 0;i < response.data.data.length; i++){
						if(response.data.data[i].num == id){
							this.object = response.data.data[i];
						}
					}
				},error => {
					console.log(error);
				})
			}
		}
	}
</script>