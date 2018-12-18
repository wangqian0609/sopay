<template>
	<div class="collect">
		<nav-header :title="navTitle"></nav-header>
		<div class="collectContent">
			<ul class="List">
				<li v-for="item in collectList" @click="goDetails(item.title)">
					<div class="imgs">
						<img :src="item.img">
					</div>
					<div class="info">
						<h2>{{item.title}}</h2>
						<i>${{item.price}}</i>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';
	
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
			.List{
				width:100%;
				padding:0 .2rem;
				li{
					width:100%;
					min-height:1rem;
					padding:.1rem .1rem .1rem 1rem;
					margin-top:.05rem;
					background-color:#fff;
					border-radius:.03rem;
					position:relative;
					.imgs{
						width:.8rem;
						height:.8rem;
						display:flex;
						justify-content:center;
						align-items:center;
						overflow:hidden;
						position:absolute;
						top:.1rem;
						left:.1rem;
						border-radius:.03rem;
						img{
							width:100%;
						}
					}
					.info{
						width:100%;
						h2{
							width:100%;
							line-height:.2rem;
							height:.4rem;
							display:-webkit-box;
							overflow:hidden;
							white-space:normal;
							text-overflow:ellipsis;
							word-wrap:break-word;
							-webkit-line-clamp:2;
							-webkit-box-orient:vertical;
							font-size:.17rem;
							color:#333;
							font-family:'Montserrat';
						}
						i{
							width:100%;
							font-size:.17rem;
							font-style:normal;
							color:#de0007;
							font-family:'Montserrat';
						}
					}
				}
			}
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
		},
		methods:{
			goDetails:function(target){
				this.$router.push({name:'goodsDetail',params:{title:target,user:this.logger}})
			}
		}
	}
</script>