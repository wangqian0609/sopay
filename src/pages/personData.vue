<template>
	<div class="personData-content">
		<pDataHeader></pDataHeader>
		<div class="personData">
			<ul>
				<li>
					<span>头像：</span>
					<img v-show="!isShow" id="personIcon" :src="ownerInfo.userUrl">
					<img v-show="isShow" id="personIcon" :src="ownerInfo.userUrl" @click="ShowImage">
				</li>
				<li>
					<span>用户名：</span>
					<label v-show="!isShow">{{ownerInfo.name}}</label>
					<input type="text" :placeholder="ownerInfo.name" v-show="isShow" v-model="ownerInfo.name">
				</li>
				<li>
					<span>性别：</span>
					<label v-show="!isShow">{{ownerInfo.sex}}</label>
					<form class="sex" v-show="isShow">
						<label><input type="radio" v-model="ownerInfo.sex" value="male">Male</label>
						<label><input type="radio" v-model="ownerInfo.sex" value="female">Female</label>
					</form>
				</li>
				<li>
					<span>年龄：</span>
					<label v-show="!isShow">{{ownerInfo.age}}</label>
					<input type="number" :placeholder="ownerInfo.age" v-show="isShow" v-model="ownerInfo.age">
				</li>
			</ul>
			<input class="changeData" type="button" v-bind:value="change" @click="changeDatas()">
		</div>
		<imgUpload v-show="imageShow" :headerImage="ownerInfo.userUrl" :showUpload="imageShow" @getHeaderImage="newHeaderImage"></imgUpload>
	</div>
</template>
<style lang="scss" scoped="scoped" type="text/css">
	.personData-content{
		width:100%;
		.personData{
			width:100%;
			padding-bottom:.45rem;
			background-color:#fff;
			& > ul{
				width:100%;
				display:block;
				padding:0 10%;
				li{
					width:100%;
					padding:0 .2rem;
					height:1rem;
					line-height:1rem;
					border-bottom:1px solid #ddd;
					& > span{
						width:30%;
						font-size:15px;
						color:#333;
						display:block;
						float:left;
					}
					& > label{
						width:70%;
						font-size:15px;
						color:#666;
						display:block;
						text-align:right;
						float:right;
					}
					& > img{
						width:.9rem;
						height:.9rem;
						margin-top: .05rem;
						border-radius:50%;
						overflow:hidden;
						display:inline-block;
						float:right;
					}
					& > input{
						width:70%;
						height:.9rem;
						border-radius: 5px;
						border: 1px solid #ddd;
					    margin-top: .03rem;
					    padding:0 .2rem;
						font-size:15px;
						color:#666;
						display:block;
						text-align:right;
						float:right;
						outline:none;
						&::-webkit-input-placeholder{
							color:#999;
						}
					}
					& > .sex{
						width:70%;
						font-size:15px;
						color:#666;
						display:block;
						text-align:right;
						float:right;
					}
				}
			}
			.changeData{
				width:80%;
				height: .9rem;
				margin: .55rem auto 0;
			    display: block;
			    border-radius: 8px;
			    background-color: #80ccd6;
			    border: none;
			    outline:none;
			    color: #fff;
			    font-size: 15px;
			}
		}   
	}
</style>
<script type="text/javascript">
	import pDataHeader from '../components/pDataHeader'
	import imgUpload from '../components/imageupload'

	var users = {},user = {name:'sa',userUrl:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/avatar1.png',age:'23',sex:'male'};
	export default{
		data(){
			return{
				ownerInfo:user,
				isShow:false,
				imageShow:false,
				change:"修改"
			}
		},
		created(){
			this.$http.get('/api/users').then((data)=>{
				users = data.body.data;
				// console.log(this);
			})
		},
		components:{
			pDataHeader,
			imgUpload
		},
		methods:{
			changeDatas:function(){
				this.isShow = !this.isShow;
				if(this.change == "修改"){
					this.change = "完成";
				}
				else{
					this.change = "修改";
				}
			},
			newHeaderImage:function(newImg){
				this.headerImage = newImg;
			},
			ShowImage:function(){
				this.imageShow = !this.imageShow;
			}
		}
	}
</script>