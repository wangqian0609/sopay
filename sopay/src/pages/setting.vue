<template>
	<div class="setting">
		<nav-header :title="navTitle"></nav-header>
		<div class="setConetnt">
			<ul>
				<li v-for="item in sets" @click="goAlink(item.link)">
					<label>{{item.name}}</label>
				</li>
			</ul>
			<div class="signOut">
				<input type="button" value="SIGN OUT" @click="goLogin">
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';
	
	.setting{
		width:100%;
		height:100%;
		.setConetnt{
			width:100%;
			overflow:hidden;
			background-color:#f8f8f8;
			position:absolute;
			top:.44rem;
			bottom:0;
			ul{
				width:100%;
				border-top:1px solid #f8f8f8;
				background-color:#fff;
				padding:.1rem .2rem;
				li{
					width:100%;
					padding:.1rem 0;
					line-height:.2rem;
					border-bottom:1px solid #eaeaea;
					position:relative;
					label{
						font-family:'Montserrat';
						font-size:.14rem;
						color:#666;
					}
					&:after{
						content: "\e64f";
						font-family:"iconfonts" !important;
						font-size:.14rem;
						font-style:normal;
						color:#666;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
						transform: rotate(180deg);
					    display: inline-block;
					    float: right;
					}
					&:last-child{
						border-bottom:none;
					}
				}
			}
			.signOut{
				width:100%;
				padding:0 .2rem;
				margin-top: .4rem;
				input{
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
				navTitle:'Setting',
				logger:this.$route.params.user,
				sets:[
					{
						'name':'UserInformation',
						'link':'EditUserInfo',
					},
					{
						'name':'AddressManage',
						'link':'EditAddress',
					},
					{
						'name':'UserAgreement',
						'link':'',
					},
					{
						'name':'AboutUs',
						'link':'',
					}
				]
			}
		},
		components:{
			'nav-header':navHeader
		},
		methods:{
			goLogin:function(){
				this.$router.push({name:'Login'})
			},
			goAlink:function(target){
				this.$router.push({name:target,params:{user:this.logger}})
			}
		}
	}
</script>