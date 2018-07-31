<template>
	<footer class="homefooter">
		<dl>
			<dd @click="goHome">
				<div class="icon">
					<img src="../assets/home.svg" title="首页">
					<!-- <img src="https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/home.svg"> -->
				</div>
			</dd>
			<dd @click="goChat">
				<div class="icon">
					<img src="../assets/chat.svg" title="聊天">
					<!-- <img src="https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/chat.svg"> -->
				</div>
			</dd>
		</dl>
	</footer>
</template>
<style lang="scss" type="text/css">
	.homefooter{
		width:100%;
		height:1rem;
		border-top:1px solid rgba(128, 204, 214, 0.8);
		background-color:#fff;
		overflow:hidden;
		position:absolute;
		bottom:0;
		left:0;
		z-index:1;
		& > dl{
			width:100%;
			display:-webkit-box;
			dd{
				width:auto;
				height:100%;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				-webkit-box-flex: 1;
				border-right:1px solid #ddd;
				.icon{
					width:.6rem;
					height:.6rem;
					margin-top:.2rem;
					img{
						width:100%;
						display:inline-block;
						vertical-align:top;
					}
				}
				&:last-child{
					border-right:none;
				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			Index:{
				type:Object,
				default:''
			}
		},
		data(){
			return{
				userTag:this.Index
			}
		},
		methods:{
			goHome(){
				if(this.userTag == undefined || this.userTag == ''){
					this.userTag = 'anoymous';
					console.log(this.userTag);
				}
				this.$router.push({name:'Home',params:{user:this.userTag}});
			},
			goChat(){
				var userInfo = {};
				if(this.userTag == undefined || this.userTag == 'anoymous' || this.userTag == ''){
					this.$router.push({path:'/login'});
				}
				else{
					this.$http.get('/api/users').then((data) => {
						const userList = data.body.data;
						for(var i = 0 ; i < userList.length; i++){
							if(userList[i].name == this.userTag){
								userInfo = userList[i];
								return userInfo;
							}
						}
					});
					this.$router.push({name:'person',params:{user:userInfo}});
				}
			}
		}
	} 
</script>