<template>
	<div class="container">
		<home-header></home-header>
		<div class="content">
			<ul class="cont_ul">
				<list v-for="item in items" :price="item.price" :title="item.title" :imgUrl="item.imgUrl"  :num="item.num"></list>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.container{
		max-width:768px;
		margin:0 auto;
		overflow-x:hidden;
		.cont_ul{
			padding-top:.05rem;
			margin:0 -.12rem;
			&:after{
				content:'';
				display:block;
				width:0;
				height:0;
				clear:both;
			}
		}
	}
</style>
<script>
	import HomeHeader from '../components/HomeHeader'
	import List from '../components/List'

	export default{
		data(){
			return{
				items:[]
			}
		},
		components:{
			HomeHeader,
			List
		},
		//在组件创建完成时，执行的钩子函数
		created(){
			//在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到get方法
			this.$http.get('/api/books').then((data) => {
				//由于请求成功返回的是Promise对象，我们要从data.body.data拿到books数组
				this.items = data.body.data;
			})
		}
	}
</script>