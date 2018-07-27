<template>
	<div class="person">
		<div class="headerNav">
			<div class="menu" @click="showMenu">
				<!-- <img src="https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/person.svg"> -->
				<img src="../assets/person.svg">
			</div>
		</div>
		<!--菜单列表-->
		<div class="blankBg" v-show="isShow" @click="showMenu"></div>
		<div class="operaList" v-show="isShow">
			<div class="ownerInfo">
				<div class="icon">
					<img  :src="ownerUrl">
				</div>
				<label class="name">{{person.username}}</label>
			</div>
			<dl class="Lists">
				<dd @click="goData">个人资料</dd>
				<dd>设置</dd>
				<dd @click = "getout">退出</dd>
			</dl>
		</div>
		<div class="friends">
			<ul>
				<li v-for="friend in friends" :name = "friend.friendsname"  @click = "goComment($event)">
					{{friend.friendsname}}
				</li>
			</ul>
		</div>
		<HomeFooter></HomeFooter>
	</div>
</template>
<style lang="scss" type="text/css">
	.person{
		width:100%;
		.headerNav{
			width:100%;
			height:1rem;
			padding: .1rem 5%;
			background-color:rgba(128,204,214,.8);
			.menu{
				width:.6rem;
				height:.6rem;
				text-align:center;
				margin-top: .1rem;
				float:right;
				img{
					width:100%;
					height:100%;
					display: inline-block;
					vertical-align: top;
				}
			}
		}
		.operaList{
			width: 70%;
			display:inline-block;
		    position: absolute;
		    right: 0;
		    top: 0;
		    bottom:0;
		    z-index:2;
		    background-color:#fff;
		    border-left:1px solid rgba(128,204,214,.8);
		    .ownerInfo{
		    	width:100%;
		    	padding:.2rem 4%;
		    	text-align:center;
		    	background-color: rgb(128,204,214);
		    	& > .icon{
		    		width:1rem;
		    		height:1rem;
		    		border-radius:50%;
		    		overflow:hidden;
		    		display:-webkit-box;
		    		display:flex;
		    		justify-content:center;
		    		align-items:center;
		    		margin:auto;
		    		img{
		    			width:100%;
		    			height:100%;
		    			display:inline-block;
		    		}
		    	}
		    	& > .name{
		    		width:100%;
		    		padding:1% 0;
		    		line-height:.8rem;
		    		display:block;
		    		font-size:18px;
		    		color:#333;
		    	}
		    }
		    .Lists{
		    	width:100%;
		    	padding:0 10%;
		    	dd{
		    		width:100%;
		    		height:.8rem;
		    		line-height:.8rem;
		    		display:block;
		    		font-size:13px;
		    		color:#666;
		    		border-bottom:1px solid #ddd;
		    	}
		    }
		}
		.friends{
			width:100%;
			position:absolute;
			top:1rem;
			bottom:1rem;
			left:0;
			background-color:#fff;
			overflow-y:scroll;
			ul{
				width:100%;
				li{
					width:100%;
					padding:0 5%;
					height:.9rem;
					position:relative;
					line-height:.9rem;
					border-bottom:1px solid #dedede;
					font-size:15px;
					&:after{
						content:'>';
						color:#666;
						font-family: monospace;
						position:absolute;
						top:0;
						right:5%;
					}
				}
			}
		}
	}
	.blankBg{
		width:100%;
		// background-color:red;
		z-index:1;
		position:absolute;
		top:0;
		bottom:0;
		left:0;
	}
</style>
<script>
	import HomeFooter from '../components/HomeFooter.vue'
	var owner = {
		ownerIcon:'',
		friends:[],
	}
	// var	demo = { username:'sa',userpass:'111111'};
	export default{
		data(){
			return{
				person:this.$route.params.user,
				// person:demo,
				friends:owner.friends,
				ownerUrl:owner.ownerIcon,
				isShow:false,
			}
		},
		components:{
			HomeFooter
		},
		created(){
			this.$http.get('/api/users').then((data) => {
				const userList = data.body.data;
				for(var i = 0 ; i < userList.length ; i++){
					if(userList[i].name == this.person.name){
						owner.ownerIcon = userList[i].userUrl;
						owner.friends = userList[i].lists;
						return owner;
					}
				}
				if(owner == undefined){
					alert('暂无数据');
				}
			})
		},
		methods:{
			getout:function(){
				this.$router.push({path:'/login'})
			},
			goComment:function(e){
				console.log(e.currentTarget.innerText);
				const id = e.currentTarget.innerText;
				this.$router.push({name:'comment',params:{user:this.person.username,friends:id}})
			},
			showMenu:function(){
				this.isShow =! this.isShow;
			},
			goData:function(){
				this.$router.push({name:'personData',params:{user:this.person.name}})
			}
		}
	}
</script>