<template>
	<div class="comment">
		<header class="header">
			<div class="header_inner flexWrap">
				<div id="header_btn_nav" class="header_btn header_btn_back" v-on:click="goBack">返回</div>
				<div class="header_cont flex">{{friend.friendsname}}</div>
				<div class="header_btn header_btn_cart"></div>
			</div>
		</header>
		<div class="comment_cont">
			<div class="comment_chat">
				<ul>
					<li>
						<span>{{user.username}}</span>
						<label>你好~</label>
					</li>
					<li>
						<label>你好~</label>
						<span>{{friend.friendsname}}</span>
					</li>
				</ul>
			</div>
			<div class="comment_input">
				<textarea rows="1"></textarea>
				<input type="button" value="评论">
			</div>
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.flexWrap{
		display:-webkit-flex;
		display:flex;
		.flex{
			flex:1;
		}
	}
	.header{
		height:0.88rem;
		.header_inner{
			position:fixed;
			top:0;
			left:0;
			right:0;
			z-index:99;
			max-width:768px;
			height:0.88rem;
			margin:0 auto;
			padding:0 .24rem;
			border-bottom:.02rem solid #80ccd6;
			background-color:#fff;
		}
		.header_btn{
			width:1rem;
			height:100%;
			background-repeat:no-repeat;
			font-size:15px;
		}
		.header_btn_back{
			line-height:0.86rem;
		}
		.header_cont{
			text-align:center;
			padding:0 .4rem;
			line-height:.86rem;
			font-size:15px;
			overflow:hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
		}
	}
	.comment{
		width:100%;
		height:100%;
		.comment_cont{
			width:100%;
			position:absolute;
			top:0;
			bottom:0;
			.comment_chat{
				width:100%;
				overflow-y:scroll;
				position:absolute;
				top:.88rem;
				bottom:1.5rem;
				left:0;
				ul{
					width:100%;
					padding:2% 5%;
					li{
						width:100%;
						line-height:.44rem;
						margin-bottom:2%;
						span{
							width:10%;
							display:inline-block;
							line-height:.44rem;
							padding:2% 0;
							font-size:15px;
							color:#333;
							vertical-align: top;
						}
						label{
							max-width:70%;
							min-width:40%;
							display:inline-block;
							position:relative;
							line-height:.44rem;
							padding: 2%;
						    word-break: break-all;
							font-size:15px;
							color:#999;
							background-color:#fff;
							border-radius:5px;
							vertical-align: top;
						}
						&:nth-child(2n+1){
							float:left;
							text-align:left;
							label{
								background-color:#fff;
								&:before{
									content:'';
									width:0;
									height:0;
									display:inline-block;
									position:absolute;
									left:-5px;
									top:50%;
									border-left:5px solid transparent;
									border-right:5px solid transparent;
									border-bottom:10px solid #fff;
									margin-top:-5px;

								}
							}
						}
						&:nth-child(2n){
							float:right;
							text-align:right;
							label{
								background-color:#9fe658;
							}
						}
					}
					&:after{
						content:'';
						clear:both;
						height:0;
					}
				}
			}
			.comment_input{
				width:100%;
				height:1rem;
				position:absolute;
				bottom:0;
				left:0;
				background-color:#fff;
				overflow:hidden;
				textarea{
					width: 73%;
				    height: 100%;
				    resize: none;
				    display: inline-block;
				    vertical-align: top;
				    font-size: 15px;
				    padding: 1% 2%;
				    color:#666;
				    outline:none;
				    // border:none;
				}
				input{
					width:20%;
					height:70%;
					float:right;
					margin-top:2.5%;
					margin-right:3%;
					display:inline-block;
					background-color: #80ccd6;
					outline:none;
				    border: none;
				    border-radius: 5px;
				    color:#fff;
				    font-size:15px;
				}
			}
		}
	}
</style>
<script>
	const demo = {username:'sa',userpass:'111'},
	demo2 = {
		friendsname:'sss',
		content:[{
				"ctype":1,
				"cchat":"你好！！",
				"ctime":"2018-05-15 09:34:00"
			},{
				"ctype":2,
				"cchat":"不好~",
				"ctime":"2018-05-15 09:34:30"
			}]
		};
	export default{
		data(){
			return{
				user:demo,
				friend:demo2
				// user:this.$route.params.user,
				// friend:this.$route.params.friends
			}
		},
		created(){
			
		},
		methods:{
			goBack(){
				window.history.back()
			}
		}
	}
</script>