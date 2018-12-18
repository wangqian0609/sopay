<template>
	<div class="editAddress">
		<nav-header :title="navTitle"></nav-header>
		<div class="AddressContent">
			<ul>
				<li>
					<span>Name:</span>
					<input type="text" v-model="address.addrNam">
				</li>
				<li>
					<span>Telphone:</span>
					<input type="text" v-model="address.addrTel">
				</li>
				<li>
					<span>Address:</span>
					<textarea v-model="address.address"></textarea> 
				</li>
				<div class="clear"></div>
			</ul>
			<div class="changeBtn">
				<input type="button" value="ChangeAddress" @click="changeAdd">
			</div>
		</div>
		<show-pop :title="sendTitie" v-model="isShow" v-on:close="clickClose()"></show-pop>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../common/fonts/font.css';

	.editAddress{
		width:100%;
		height:100%;
		.AddressContent{
			width:100%;
			background-color:#f8f8f8;
			overflow:hidden;
			position:absolute;
			top:.4rem;
			bottom:0;
			& > ul{
				width:100%;
				padding:0 .2rem;
				background-color:#fff;
				border-top:.05rem solid #f8f8f8;
				li{
					width:100%;
					padding:.1rem 0;
					border-bottom:1px solid #f8f8f8;
					span{
						width:25%;
						line-height:.2rem;
						display:inline-block;
						vertical-align:top;
						font-size:.15rem;
						font-family:'Montserrat';
						color:#333;
					}
					input{
						width:73%;
						line-height:.2rem;
						display:inline-block;
						vertical-align:top;
						text-align: left;
						border:none;
						background-color:transparent;
						// float:right;
						font-size:.14rem;
						font-family:'Montserrat';
						color:#666;
					}
					textarea{
						width:73%;
						line-height:.2rem;
						display:inline-block;
						vertical-align:top;
						text-align: left;
						border:none;
						outline:none;
						resize:none;
						background-color:transparent;
						// float:right;
						font-size:.14rem;
						font-family:'Montserrat';
						color:#666;
					}
				}
			}
			.changeBtn{
				width:100%;
				padding:0 .2rem;
				margin-top:.4rem;
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
		.clear{
			clear:both;
			height:0;
		}
	}
</style>
<script type="text/javascript">
	import navHeader from '../components/Hheader'
	import showPop from '../components/showpop'

	export default{
		data(){
			return{
				navTitle:'Edit Address',
				logger:this.$route.params.user,
				address:{},
				sendTitie:'',
				isShow:false,
			}
		},
		components:{
			'nav-header':navHeader,
			'show-pop':showPop
		},
		mounted(){
			this.$http.get('/api/users').then((data) =>{
				const users = data.body.data;
				for(let i = 0; i < users.length; i++){
					if(users[i].name == this.logger){
						this.address = users[i].addr;
					}
				}
				if(this.address.addrNam == ''){
					this.address.addrNam = "Please input your name";
				}
				if(this.address.addrTel == ''){
					this.address.addrTel = "Please input your Telphone Number";
				}
				if(this.address.address == ''){
					this.address.address = "Please input your email's address"
				}
			})
		},
		methods:{
			changeAdd:function(){
				this.sendTitie = "Edit your address successfully!";
				this.isShow = true;
			},
			clickClose:function(){
				console.log('点击了取消');
				this.isShow = false;
			}
		}
	}

</script>