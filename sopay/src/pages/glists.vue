<template>
	<div class="GoodList">
		<nav-header :title="navTitle"></nav-header>
		<div class="GoodConetnt">
			<div class="noGoods" v-show="showNull">
				<div class="noSign">
					<label>I am very sorry that there is no relevant product at present</label>
				</div>
			</div>
			<div class="goodslist">
				<ul class="goodsUl">
					<li v-for="item in list" @click="goDetails(item.title)">
						<div class="goodsImg">
							<img :src="item.img[0]">
						</div>
						<div class="goodsInfo">
							<h3>{{item.title}}</h3>
							<label>{{item.price}}</label>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.GoodList{
		width:100%;
		height:100%;
		.GoodConetnt{
			width:100%;
			background-color:#f8f8f8;
			overflow-y:scroll;
			-webkit-overflow-scrolling:touch;
			position:absolute;
			top:.44rem;
			bottom:0;
			left:0;
			.noGoods{
				width:100%;
				height:100%;
				display:-webkit-box;
				-webkit-box-pack:center;
				-webkit-box-align:center;
				padding:.1rem .2rem;
				.noSign{
					width:2.5rem;
					label{
						width:100%;
						text-align:center;
						font-family:'Montserrat';
						font-size:.16rem;
						color:#A1A1A1;
					}
				}
			}
			.goodslist{
				width:100%;
				padding:.1rem .2rem;
				li{
					width:47%;
					display:inline-block;
					vertical-align:top;
					.goodsImg{
						width:100%;
						height:2.08rem;
						display: -webkit-box;
						-webkit-box-align: center;
						-webkit-box-pack: center;
						img{
							height:100%;
						}
					}
					.goodsInfo{
						width:100%;
						h3{
							width:100%;
							display:inline-block;
							text-align:center;
							font-size:.1rem;
							font-family:'Montserrat';
							color:#2F1825;
						}
						label{
							font-family:"Montserrat";
							font-size:.1rem;
							color:#3A3B3D;
						}
					}
					&:nth-child(2n+1){
						margin-right:2%;
					}
					&:nth-child(n+3){
						margin-top:.05rem;
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
				name:this.$route.params.name,
				logger:this.$route.params.user,
				showNull:false,
				list:[],
			}
		},
		components:{
			'nav-header':navHeader
		},
		methods:{
			goDetails:function(target){
				this.$router.push({name:'goodsDetail',params:{title:target,user:this.logger}})
			}
		},
		mounted(){
			this.$http.get('/api/goods').then((data) =>{
				const goodlist = data.body.data;
				for(let i = 0; i < goodlist.length; i++){
					if(goodlist[i].type == this.navTitle && goodlist[i].name == this.name){
						this.list.push(goodlist[i]);
					}
				}
				console.log(this.list);
				if (this.list.length == 0) {
					this.showNull = true;
				}
			})
		}
	}
</script>