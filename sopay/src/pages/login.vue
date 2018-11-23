<template>
	<div class="login">
		<div class="logo">SOPAY</div>
		<form class="sign">
			<ul>
				<li>
					<div class="icon">
						<i class="iconfont">&#xe653;</i>
					</div>
					<input type="text"  placeholder="UserName" v-model="login.name">
				</li>
				<li>
					<div class="icon">
						<i class="iconfont">&#xe652;</i>
					</div>
					<input type="password" placeholder="PassWord" v-model="login.passwd">
				</li>
			</ul>
			<input class="btn_login" type="button" value="Get Start">
			<i class="alink_regist">Not a Member? SIGN UP</i>
		</form>
		<dialog-bar v-model="sendVal" type="cancel" :title="maskTitle"  :content="maskContent"  v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Cancel"></dialog-bar>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';
	@import '../common/icon/iconfont.css';

	.login{
		width:100%;
		height:100%;
		padding:0 .2rem;
		background: url('https://a.icons8.com/gbxLsbSR/hM3gFu/group_2_objects.png') no-repeat;
		background-size: cover;
		background-position: center center;
		.logo{
			width: 100%;
			height: 2.3rem;
			line-height: .7rem;
			padding:1.6rem 0 0;
			text-align:center;
			color: #fff;
			font-family: Montserrat;
			font-size: .7rem;
			font-weight: 400;
		}
		.sign{
			width:100%;
			padding:0 .2rem;
			ul{
				width:100%;
				li{
					width:100%;
					height:.4rem;
					position:relative;
					padding-left:20%;
					margin-top:.4rem;
					border-bottom:1px solid #a1a2a5;
					.icon{
						position: absolute;
						left: 5%;
						bottom:0;
						.iconfont{
							line-height:.4rem;
							font-size: .17rem;
							color:#f8f8f8;
						}
					}
					input{
						width:100%;
						height:.4rem;
						line-height: .4rem;
						border:none;
						background-color: transparent;
						font-size:.17rem;
						color:#fff;
						&::-webkit-input-placeholder{
							color:#eee;
						}
					}
				}
			}
			.btn_login{
				width:100%;
				height: .55rem;
				line-height: .55rem;
				background-color: #4BC2FF;
				border: none;
				border-radius: .3rem;
				display:inline-block;
				text-align:center;
				font-size: .17rem;
				font-family: 'Montserrat';
				font-weight: 700;
				color:#fff;
				margin-top: .9rem;
			}
			.alink_regist{
				width:100%;
				margin-top:.24rem;
				display:inline-block;
				text-align:center;
				font-size: .16rem;
				font-style: normal;
				color:#fff;
			}
		}
	}
</style>
<script>
	import dialog from '../components/dialog'

	export default{
		data(){
			return{
				login:{
					name:'',
					passwd:''
				},
				sendVal:false,
				maskTitle:'',
				maskContent:'',
			}
		},
		components:{
			'dialog-bar':dialog
		},
		methods:{
			openMask(index){
				this.sendVal = true;
			},
			clickCancel(){
				console.log('点击了取消');
				this.login.name = '';
				this.login.passwd = '';
			},
			clickDanger(){
				console.log('这里是danger回调');
			},
			clickConfirm(){
				console.log('点击了确认');
			},
			login:function(){
				if( !this.login.name || !this.login.passwd){
					this.maskTitle = 'Erro';
					this.maskContent = 'Please follow the prompts to enter your account information！';
					this.openMask();
				}
				else{
					this.$router.push({name:'Home',params:{user:this.login.name}});
				}
			},
			goRegist:function(){
				this.$router.push({path:'/Regist'})
			}
		}
	}
</script>