<template>
	<div class="Register">
		<register-header></register-header>
		<form class="RegisterForm">
			<ul class="Register_Ul">
				<li>
					<span>姓名：</span>
					<input type="text" v-model="person.name" placeholder="请输入姓名">
				</li>
				<li>
					<span>年龄:</span>
					<input type="number" v-model="person.age" placeholder="请输入年龄">
				</li>
				<li>
					<span>职务:</span>
					<input type="text" v-model="person.job" placeholder="请输入职务">
				</li>
			</ul>
			<input type="button" @click="getData" value="确定" class="registerBtn">
		</form>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.RegisterForm{
		width:100%;
		padding:0 5%;
		.Register_Ul{
			width:100%;
			li{
				width:100%;
				height:1rem;
				display:inline-block;
				border-bottom:1px solid #80ccd6;
				span{
					width:20%;
					line-height:.8rem;
					display:inline-block;
					vertical-align: top;
					font-size:15px;
					color:#333;
				}
				input{
					width:80%;
					padding:0 5%;
					line-height:.8rem;
					display:inline-block;
					float:right;
					color:#999;
					outline:none;
					border:1px solid #999;
				}
			}
		}
		.registerBtn{
			width: 100%;
		    height: .9rem;
		    border-radius: 8px;
		    margin-top:1rem;
		    outline: none;
		    border: none;
		    background-color: #80ccd6;
		    color: #fff;
		    font-size: 15px;
		}
	}
</style>
<script>
	import registerHeader from '../components/RegisterHeader'

	var userInfo = {
		name:'',
		age:'',
		job:''
	}
	export default{
		data(){
			return{
				person:{
					name:'',
					age:'',
					job:''
				}
			}
		},
		components:{
			registerHeader
		},
		methods:{
			getData:function(){
				userInfo = this.person;
				if(userInfo.name == "" || userInfo.name == "undefined"){
					alert("请输入姓名");
				}
				else if(userInfo.age == "" || userInfo.age == "undefined" ){
					alert("请输入年龄");
				}
				else if(userInfo.job == "" || userInfo.job == "undefined"){
					alert("请输入职务");
				}
				else{
					this.$router.push({name:'registerInfo',params:{user:userInfo}});
				}
			}
		}
	}
</script>