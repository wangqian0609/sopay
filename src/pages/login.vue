<template>
	<div class="Login">
		<login-header></login-header>
		<div class="login_con">
			<form>
				<ul class="login_ul">
					<li>
						<span>用户名:</span>
						<input type="text" placeholder="请输入用户名" v-model="loginer.username">
					</li>
					<li>
						<span>密码:</span>
						<input type="password" placeholder="请输入密码" v-model="loginer.userpass">
					</li>
				</ul>
				<input type="button" class="login_btn" value="登录" @click="loginUser">
				<input type="button" class="login_btn" value="注册" @click="registUser">
			</form>
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.login_con{
		width:100%;
		padding:0 5%;
		.login_ul{
			width:100%;
			padding:5% 0;
			li{
				width:100%;
				height:.95rem;
				span{
				    width: 20%;
				    height: .9rem;
				    line-height: .9rem;
				    display: inline-block;
				    font-size: 15px;
				    vertical-align: top;
				}
				input{
					width: 80%;
					padding:0 5%;
				    float: right;
				    display: inline-block;
				    height: .88rem;
				    line-height: .88rem;
				    font-size: 15px;
				    border: 1px solid #999;
				    border-radius: 3px;
				    outline:none;
				}
			}
		}
		.login_btn{
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
</style>
<script>
	import loginHeader from '../components/loginHeader'

	var user,users = [];
	export default{
		data(){
			return{
				loginer:{
					username:'',
					userpass:''
				}
			}
		},
		components:{
			loginHeader
		},
		methods:{
			loginUser:function(){
				user = this.loginer;
				if(user.username == "" || user.username == "undefined"){
					alert("请输入用户名和密码!");
				}
				else if(user.userpass =="" || user.userpass ==""){
					alert("请输入用户名和密码!");
				}
				else{
					this.$http.get('/api/users').then((data) =>{
						this.users = data.body.data;
						var flat = false;
						for(var i = 0 ;i < this.users.length; i++){
							if(this.users[i].name == user.username && this.users[i].passwd == user.userpass){
								flat = true;
								alert("登录成功！");
								this.$router.push({name:'person',params:{user:user}});
								return flat;
							}
						}
						if(flat == false){
							alert("输入的账号或密码不正确！");
						}
					})
				}
			},
			registUser:function(){
				this.$router.push({path:'/regist'})
			}
		}
	}
</script>