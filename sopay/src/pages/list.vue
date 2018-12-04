<template>
	<div class="sortContent">
		<nav-header :title="navTitle"></nav-header>
		<div class="listContent">
			<div class="listTop" v-bind:style="{backgroundImage:'url(' + salesImg + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: '100% 100%'}">
				<div class="listBox">
					<h2>{{navTitle}}</h2>
					<label>GET UP TO 60% OFF</label>
				</div>
			</div>
			<ul class="listUl">
				<li v-for="item in lists">
					<label>{{item.name}}</label>
					<div class="item-right">
						<img :src="item.img">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.sortContent{
		width:100%;
		height:100%;
		.listContent{
			width:100%;
			padding-top:.44rem;
			.listTop{
				width:100%;
				height:1.67rem;
				text-align:center;
				background-color:#d8d8d8;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				.listBox{
					width:2.3rem;
					// height:1.01rem;
					display:inline-block;
					border:1px solid #fff;
					h2{
						width:100%;
						display:inline-block;
						font-size:.5rem;
						color:#fff;	
					}
					label{
						width:100%;
						display:inline-block;
						padding: .05rem 0;
						font-size:.14rem;
						color:#fff;
						border-top:1px solid #fff;
					}
				}
			}
			.listUl{
				width:100%;
				li{
					width:100%;
					height:1.11rem;
					padding:0 .22rem 0 .5rem;
					position:relative;
					label{
						line-height:1.11rem;
						display:inline-block;
						font-family:'Montserrat';
						font-size:.16rem;
						color:#767777;
					}
					.item-right{
						width:2rem;
						height:100%;
						display:-webkit-box;
						-webkit-box-align:center;
						-webkit-box-pack:center;
						overflow:hidden;
						position:absolute;
						right:.2rem;
						top:0;
						img{
							height:100%;
						}
					}
					&:nth-child(2n+1){
						background-color:#e6e6e6;
					}
					&:nth-child(2n){
						background-color:#D1C1AF;
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