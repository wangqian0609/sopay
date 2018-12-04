<template>
	<div class="regist">
		<div class="logo">SOPAY</div>
		<form class="info">
			<div class="addIcon">
				<i class="iconfont">&#xe7ae;</i>
			</div>
			<ul>
				<li>
					<div class="icon">
						<i class="iconfont">&#xe65d;</i>
					</div>
					<input type="text" placeholder="Name" v-model="register.name">
				</li>
				<li>
					<div class="icon">
						<i class="iconfont">&#xe652;</i>
					</div>
					<input type="password" placeholder="PassWord" v-model="register.passwd">
				</li>
				<li>
					<div class="icon">
						<i class="iconfont">&#xe653;</i>
					</div>
					<input type="text" placeholder="Email" v-model="register.email">
				</li>
				<li>
					<div class="icon">
						<i class="iconfont" style="font-weight: bold;">&#xe646;</i>
					</div>
					<dl class="radioList">
						<dd v-for="item in gender" @click="select(item)">
							<input type="radio" name="gender" :value="item" >
							<i class="box"></i><label>{{item}}</label>
						</dd>
					</dl>
				</li>
			</ul>
			<input type="button" class="registBtn" value="SIGN UP" @click="goLogin">
		</form>
		<dialog-bar v-model="sendVal" type="danger" :title="maskTitle"  :content="maskContent"  v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Cancel"></dialog-bar>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';
	@import '../common/icon/iconfont.css';

	.regist{
		width:100%;
		height:100%;
		.logo{
			width:100%;
			min-height:2.24rem;
			display: inline-block;
			padding:1.4rem .2rem 0;
			text-align: center;
			font-family: 'Montserrat';
			font-size: .7rem;
			color:#fff;
			background:url('../assset/top.png') no-repeat;
			background-size: cover;
			background-position: center center;
			position: relative;
		}
		.info{
			width:100%;
			padding:.2rem .2rem 0;
			.addIcon{
				width:.64rem;
				height:.64rem;
				line-height:.64rem;
				display:block;
				text-align:center;
				margin:auto;
				background-color:#8D8D8D;
				border-radius:50%;
				.iconfont{
					font-size:.24rem;
					color:#fff;
				}
			}
			ul{
				width:100%;
				margin-top:.2rem;
				li{
					width:100%;
					height:.4rem;
					position:relative;
					padding-left:20%;
					margin-top:.2rem;
					border-bottom:1px solid #a1a2a5;
					.icon{
						position: absolute;
						left: 5%;
						bottom:0;
						.iconfont{
							line-height:.4rem;
							font-size: .17rem;
							color:#A1A2A5;
						}
					}
					& > input{
						width:100%;
						height:.4rem;
						line-height: .4rem;
						border:none;
						background-color: transparent;
						font-size:.17rem;
						color:#A1A2A5;
						&::-webkit-input-placeholder{
							color:#ddd;
						}
					}
					.radioList{
						width:100%;
						height:.4rem;
						display:table;
						dd{
							width:50%;
							height:.4rem;
							line-height:.4rem;
							display:table-cell;
							position:relative;
							label{
								display:inline-block;
								margin-left:.1rem;
								font-size:.17rem;
								color:#A1A2A5;
							}
							input[type='radio']{
								width:100%;
								height:100%;
								position:absolute;
								left:0;
								top:0;
							}
							input[type='radio'] + .box{
								width:.22rem;
								height:.22rem;
								display:inline-block;
								vertical-align: middle;
								border-radius:50%;
								border:1px solid #A1A2A5;
								position:relative;
							}
							input[type='radio']:checked + .box{
								border:1px solid #4BC2FF;
								&:before{
									content:'';
									width:.1rem;
									height:.1rem;
									display:inline-block;
									border-radius:50%;
									background-color:#4BC2FF;
									box-shadow:inset 0 0 5px #fff;
									position:absolute;
									left:.05rem;
									top:.05rem;
								}
							}
						}	
					}
				}
			}
		}
		.registBtn{
			width:100%;
			height: .44rem;
			line-height: .44rem;
			background-color: #4BC2FF;
			border: none;
			border-radius: .22rem;
			display:inline-block;
			text-align:center;
			font-size: .17rem;
			font-family: 'Montserrat';
			font-weight: 700;
			color:#fff;
			margin-top: .4rem;
		}
	}
</style>
<script type="text/javascript">
	import dialog from '../components/dialog'

	export default{
		data(){
			return{
				register:{
					name:'',
					passwd:'',
					email:'',
					gender:''
				},
				gender:['male','female'],
				reg:{
					email:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
				},
				sendVal:false,
				maskTitle:'',
				maskContent:''
			}
		},
		components:{
			'dialog-bar':dialog
		},
		methods:{
			select:function(item){
				// console.log(item);
				this.register.gender = item;
			},
			openMask(index){
				this.sendVal = true;
			},
			clickCancel(){
				console.log('点击了取消');
				this.register.name = '';
				this.register.passwd = '';
				this.register.email = '';
				this.register.gender = '';
			},
			clickConfirm(){
				console.log('点击了确认');
			},
			goLogin:function(){
				if( !this.register.name || !this.register.passwd || !this.register.email || !this.register.gender){
					this.maskTitle = 'Erro';
					this.maskContent = 'Please follow the prompts to enter your account information！';
					this.openMask();
				}
				else if(!this.reg.email.test(this.register.email)){
					this.maskTitle = 'Erro';
					this.maskContent = 'The mailbox format is incorrect!';
					this.openMask();
				}
				else{
					console.log(this.register);
					this.$router.push({name:'Login'});
				}
			}
		}
	}
</script>