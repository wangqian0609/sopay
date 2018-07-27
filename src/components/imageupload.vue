<template>
	<div class="changeIcon">
		<div class="showIcon">
			<img :src="headIcon">
		</div>
		<dl class="iconList">
			<dd v-for="icon in iconlists" @click="select(icon.url)">
				<img :src="icon.url">
			</dd>
		</dl>
		<div class="btnLists">
			<input class="btn confirm" type="button" value="确定" @click="change">
			<input class="btn cancle" type="button" value="取消" @click="cancleImg">
		</div>
	</div>
</template>
<style lang="scss" type="text/css"> 
	.changeIcon{
		width: 100%;
		background-color: rgb(244,244,244);
		position: absolute;
		top: .88rem;
		bottom: 0;
		left: 0;
		.showIcon{
			width:100%;
			padding:1rem .24rem;
			background-color:orange;
			img{
				width:2rem;
				height:2rem;
				border:1px solid #fff;
				border-radius:50%;
				display:block;
				margin:auto;
			}
		}
		.iconList{
			width:100%;
			text-align:center;
			padding:.5rem;
			dd{
				width:30%;
				display:inline-block;
				min-height:1.5rem;
				img{
					width:1.5rem;
					height:1.5rem;
					display:block;
					margin:auto;
					border-radius:50%;
					border:1px solid #999;
				}
			}
		}
		.btnLists{
			width:100%;
			padding:.5rem .24rem;
			display: inline-block;
			text-align:center;
			& > .btn{
				width:40%;
				height: .9rem;
				// margin: .55rem auto 0;
			    display: inline-block;
			    vertical-align: top;
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
	var icons = [{id:'0',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/0.png'},{id:'1',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/1.png'},{id:'2',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/2.png'},{id:'3',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/3.png'},{id:'4',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/4.png'},{id:'5',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/5.png'},{id:'6',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/6.png'},{id:'7',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/7.png'},{id:'8',url:'https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/8.png'}];

	export default {
	  props:{
	  	headerImage:{
	  		type:String,
	  		default:''	
	  	}},
	  data () {
	    return {
	     	iconlists:icons,
	     	headIcon:this.headerImage,
	    }
	  },
	  mounted () {
	  },
	  watch:{
	  	iconChange(val){
	  		this.headIcon = val;
	  	},
	  	headIcon(val){
	  		this.$emit('on-icons',val);
	  	}
	  },
	  methods: {
	    postImg:function(){
	     	console.log('上传成功');
	    },
	    select:function(element){
	    	// console.log(element);
	    	this.headIcon = element;
	    },
	    cancleImg:function(){
	    	console.log(this.headerImage);
	    	this.headIcon = this.headerImage;
	    	this.$emit('showImage');
	    },
	    change:function(){
	    	this.$emit('showImage');
	    } 
	  }
	}
</script>