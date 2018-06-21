<template>
	<div class="RegInfo_content">
		<registerInfo-header></registerInfo-header>
		<div class="RegInfo_Details">
			<ul class="RegInfo_Ul">
				<li>
					<span>姓名:</span>
					<label>{{person.name}}</label>
				</li>
				<li>
					<span>年龄:</span>
					<label>{{person.age}}</label>
				</li>
				<li>
					<span>职务:</span>
					<label>{{person.job}}</label>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.RegInfo_content{
		width:100%;
		.RegInfo_Details{
			width:100%;
			padding:0 5%;
			.RegInfo_Ul{
				width:100%;
				li{
					width:100%;
					height:.8rem;
					border-bottom: 1px solid #aeaeae;
					span{
						width:20%;
						display:inline-block;
						vertical-align: top;
						line-height:.8rem;
						font-size:15px;
						color:#333;
					}
					label{
						width:80%;
						float:right;
						display:inline-block;
						line-height:.8rem;
						font-size:15px;
						color:#999;
					}
				}
			}
		}
	}
</style>
<script>
	import registerInfoHeader from '../components/RegInfoHeader'

	export default{
		data(){
			return{
				person:this.$route.params.user
			}
		},
		components:{
			registerInfoHeader,
		}
	}
</script>