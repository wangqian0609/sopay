<template>
	<div class="userInfo">
		<nav-header :title="navtitle"></nav-header>
		<div class="content">
			<form>
				<ul>
					<li>
						<div class="icon">
							<div class="iconfont">&#xe65d;</div>
						</div>
						<input type="text" v-model="info.name">
					</li>
					<li>
						<div class="icon">
							<div class="iconfont">&#xe65f;</div>
						</div>
						<img :src= "info.imgs">
						<input type="file" name="">
					</li>
					<li>
						<div class="icon">
							<div class="iconfont">&#xe653;</div>
						</div>
						<input type="text" v-model="info.email">
					</li>
					<li>
						<div class="icon">
							<div class="iconfont">&#xe639;</div>
						</div>
						<input id="birthdate" type="text" v-model="info.birth">
					</li>
					<li>
						<div class="icon">
							<div class="iconfont">&#xe646;</div>
						</div>
						<dl class="radioList">
							<dd v-for="item in gender" @click="select(item)">
								<input class="genderR" type="radio" name="gender" :value="item" >
								<i class="box"></i><label>{{item}}</label>
							</dd>
						</dl>
					</li>
				</ul>
			</form>
			<div class="changeBtn">
				<input type="button" value="Change">
			</div>
		</div>
		<date-pop :el = "popId"></date-pop>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.userInfo{
		width:100%;
		height:100%;
		.content{
			width:100%;
			background-color:#f8f8f8;
			position:absolute;
			top:.44rem;
			bottom:0;
			& > form{
				width:100%;
				background-color:#fff;
				border-top:.05rem solid #f8f8f8;
				ul{
					width:100%;
					padding:.1rem .2rem;
					li{
						width:100%;
						height:.4rem;
						position:relative;
						padding-left:.6rem;
						margin-top:.2rem;
						border-bottom:1px solid #a1a2a5;
						.icon{
							position: absolute;
							left: .1rem;
							bottom:0;
							.iconfont{
								line-height:.4rem;
								font-size: .2rem;
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
		}
	}
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'
	import datePop from '../components/datePop'

	export default{
		data(){
			return{
				navtitle:'User Information',
				logger:this.$route.params.user,
				info:{
					'name':'',
					'imgs':'',
					'email':'',
					'gender':'',
					'birth':''
				},
				gender:['male','female'],
				popId:'birthdate'
			}
		},
		components:{
			'nav-header':navHeader,
			'date-pop':datePop
		},
		mounted(){
			this.$http.get('/api/users').then((data) =>{
				const users = data.body.data;
				for(let i = 0; i < users.length; i++){
					if(users[i].name == this.logger){
						this.info.name = users[i].name;
						this.info.imgs = users[i].headImg;
						this.info.email = users[i].email;
						this.info.gender = users[i].gender;
						this.info.birth = users[i].birth; 
					}
				}
				const genderList = document.getElementsByClassName('genderR');
				for(let j = 0; j < genderList.length; j++){
					if(genderList[j].value == this.info.gender){
						genderList[j].checked = 'checked';
					}
				}
			});
		},
		methods:{
			select:function(item){
				this.info.gender = item;
			},
			selectDate:function(id){
				// this.popId = id;
			}
		}
	}
</script>