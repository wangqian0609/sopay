<template>
	<div class="pane" v-show="show">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			name:{
				type:String
			},
			label:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				show:false
			}
		},
		methods:{
			updateNav:function(){
            //$parent 父链，通知父组件（tabs）进行更新。
            //说明：在业务中尽可能不要使用$parent来操作父组件，$parent适合标签页这样的独立组件
	            this.$parent.updateNav();
	        }
		},
		watch:{
			label(){
	            this.updateNav();
	        }
		},
		mounted(){
			this.updateNav();
		}
	}
</script>