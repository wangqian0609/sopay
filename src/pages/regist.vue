

<template>
	<div class="regist">
		<regist-Header></regist-Header>
		<div class="regist_con">
			<form class="regist_form">
				<ul class="regist_ul">
					<li>
						<span>用户名:</span>
						<input type="text" placeholder="请输入用户名" v-model="regist.name">
					</li>
					<li>
						<span>输入密码:</span>
						<input type="password" placeholder="请输入密码" v-model="regist.passwd">
					</li>
					<li>
						<span>确认密码:</span>
						<input type="password" placeholder="请重新输入密码" v-model="regist.confirm">
					</li>
				</ul>
				<input type="button" value="注册" class="regist_btn" @click="registUser">
			</form>
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.regist{
		width:100%;
		.regist_con{
			width:100%;
			.regist_form{
				width:100%;
				padding:0 5%;
				.regist_ul{
					width:100%;
					padding:5% 0;
					li{
						width:100%;
						height:1rem;
						line-height:.9rem;
						span{
							width:25%;
							display:inline-block;
							font-size:15px;
							color:#333;
							vertical-align: top;
						}
						input{
							width:75%;
							display:inline-block;
							float:right;
							font-size:15px;
							color:#999;
							border:1px solid #999;
							outline:none;
							border-radius: 5px;
						    line-height: .86rem;
						    padding: 0 5%;
						}
					}
				}
				.regist_btn{
					width: 100%;
				    height: .9rem;
				    border-radius: 8px;
				    // margin-top:1rem;
				    background-color: #80ccd6;
				    border: none;
				    outline:none;
				    color: #fff;
				    font-size: 15px;
				}
			}
		}
	}
</style>
<script>
	import registHeader from '../components/registHeader'

	var register,users = [];
	export default{
		data(){
			return{
				regist:{
					name:'',
					passwd:'',
					confirm:''
				}
			}
		},
		components:{
			registHeader
		},
		methods:{
			registUser:function(){
				register = this.regist;
				if(register.name == "" || register.passwd == "" || register.confirm == ""){
					alert("用户名和密码不能为空！");
				}
				else if(register.passwd != register.confirm){
					alert("两次密码输入不一致");
					register.passwd = "";
					register.confirm = "";
				}
				else{
					this.$http.get('/api/users').then((data) => {
						this.users = data.body.data;
						for(var i = 0 ; i < this.users.length; i++){
							if(register.name == this.users[i].name){
								alert("该用户名已经注册了");
							}
						}
						alert('注册成功');
						this.$router.push({name:'comment',params:{regist:register}})
					})
				}
			}
		}
	}
</script>