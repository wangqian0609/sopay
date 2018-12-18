<template>
	<div class="console" v-show="showMask">
		<div class="CloseBtn">
			<i class="iconfont close" @click="closeMask()">&#xe602;</i>
		</div>
		<div class="Content">
			<i class="iconfont">&#xe746;</i>
			<label>{{title}}</label>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	.console{
		width:3rem;
		padding:.3rem .15rem;
		border-radius:.1rem;
		background-color:#fff;
		position:absolute;
		top: 25%;
	    left: 50%;
	    margin-left: -1.5rem;
		z-index:999;
		.CloseBtn{
			width:100%;
			text-align: right;
			.iconfont{
				font-size:.25rem;
				color:#666;
			}
		}
		.Content{
			width:100%;
			line-height:.45rem;
			display:inline-block;
			text-align: center;
			.iconfont{
				font-size:.45rem;
				color:#6cfb76;
				margin:auto;
			}
			label{
				width:100%;
				color:#333;
				font-size:.17rem;
				font-family:'Montserrat';
				display:inline-block;
				word-break:break-all;
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			value:{},
			title:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				showMask:false
			}
		},
		mounted(){
			this.showMask = this.value;
		},
		methods:{
			closeMask(){
				this.$emit('close');
				this.showMask = false;
			}
		},
		watch:{
			value(newVal,oldVal){
				this.showMask = newVal;
			},
			// showMask(val){
			// 	this.$emit('cancel',val);
			// }
		}
	}
</script>