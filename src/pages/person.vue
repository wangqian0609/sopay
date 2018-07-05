<template>
	<div class="person">
		<div class="person_icon">
			<div class="icon" @click = "getout">
				<img src="http://www.shiyi910.com/UploadFiles/2014-01/170/2014011322414554305.jpg">
			</div>
			<label>{{person.username}}</label>
		</div>
		<div class="friends">
			<ul>
				<li v-for="friend in friends" :name = "friend.friendsname"  @click = "goComment($event)">
					{{friend.friendsname}}
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.person{
		width:100%;
		.person_icon{
			width:100%;
			height:4.5rem;
			padding: .5rem 10%;
			background-color:rgba(128,204,214,.8);
			.icon{
				width:2.5rem;
				height:2.5rem;
				border-radius:50%;
				display: flex;
			    overflow: hidden;
			    justify-content: center;
			    align-items: center;
			    margin: auto;
				img{
					width:100%;
				}
			}
			label{
				width:100%;
				line-height:.9rem;
				display:inline-block;
				text-align:center;
				font-size:20px;
				color:#333;
				vertical-align: top;
			}
		}
		.friends{
			width:100%;
			position:absolute;
			top:4.5rem;
			bottom:0;
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
</style>
<script>
	var friends = [];
	// var	demo = { username:'sa',userpass:'111111'};
	export default{
		data(){
			return{
				person:this.$route.params.user,
				// person:demo,
				friends:friends
			}
		},
		created(){
			this.$http.get('/api/users').then((data) => {
				const userList = data.body.data;
				for(var i = 0 ; i < userList.length ; i++){
					if(userList[i].name == this.person.username){
						this.friends = userList[i].lists;
						console.log(this.friends);
						return this.friends;
					}
					else{
						// alert('暂无数据');
					}
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
				this.$router.push({name:'comment',params:{user:this.person,friends:id}})
			}
		}
	}
</script>