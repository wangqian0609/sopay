<template>
	<div v-show="showMask" class="dialog">
		<div class="dialog-title">
			<h3>{{title}}</h3>
		</div>
		<div class="dialog-content" v-html="content"></div>
		<div class="dialog-btns">
			<input v-if="type != 'confirm'" class="cancel" type="button" :value="cancelText" @click="cancelBtn">
			<input v-if="type != 'danger'" class="danger" type="button" :value="dangerText" @click="dangerBtn">
			<input v-if="type != 'confirm'" class="confirm" type="button" :value="confirmText" @click="confirmBtn">
		</div>
	</div>
</template>
<style lang="scss" type="text/css" scoped="">
	@import '../common/fonts/font.css';

	.dialog{
		width:3rem;
		padding:.3rem .15rem;
		border-radius:.1rem;
		background-color:#fff;
		position:absolute;
		top: 25%;
	    left: 50%;
	    margin-left: -1.5rem;
		z-index:999;
		.dialog-title{
			width:100%;
			line-height:.6rem;
			display:inline-block;
			text-align:center;
			h3{
				color:#333;
				font-family:'Montserrat';
			}
		}
		.dialog-content{
			width:100%;
			line-height:.45rem;
			display:inline-block;
			text-align:left;
			label{
				width:100%;
				display:inline-block;
				word-break:break-all;
			}
		}
		.dialog-btns{
			width:100%;
			display:inline-block;
			padding-top:.3rem;
			text-align: center;
			.cancle{
				background-color:#eee;
				color:#333;
			}
			.danger{
				background-color:#de0006;
				color:#fff;
			}
			.confirm{
				background-color:#4BC2FF;
				color:#fff;
			}
			input{
				display: inline-block;
			    height: .4rem;
			    width: 48%;
			    border: none;
			    border-radius: .05rem;
			    font-family:'Montserrat';
			    font-size: .14rem;
			    &:nth-child(2){
			    	margin-left:2%;
			    }
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			value:{},
			type:{
				type:String,
				default:'default'    //default 默认,danger 危险，confirm 确认
			},
			content:{
				type:String,
				default:''
			},
			title:{
				type:String,
				default:''
			},
			cancelText:{
				type:String,
				default:'Cancel'
			},
			dangerText:{
				type:String,
				default:'Danger'
			},
			confirmText:{
				type:String,
				default:'Confirm'
			}
		},
		data(){
			return{
				showMask:false,
			}
		},
		methods:{
			closeMask(){
				this.showMask = false;
			},
			cancelBtn(){
				this.$emit('cancel');
				this.closeMask();
			},
			dangerBtn(){
				this.$emit('danger');
				this.closeMask();
			},
			confirmBtn(){
				this.$emit('confirm');
				this.closeMask();
			}
		},
		mounted(){
			this.showMask = this.value;
		},
		watch:{
			value(newVal,oldVal){
				this.showMask = newVal;
			},
			showMask(val){
				this.$emit('input',val);
			}
		}
	}
</script>