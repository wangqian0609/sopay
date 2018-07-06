<template>
	<div class="personData-content">
		<pDataHeader></pDataHeader>
		<div>
			<ul>
				<li>
					<span>头像</span>
					<label></label>
				</li>
				<li>
					<span>用户名：</span>
					<label></label>
				</li>
				<li>
					<span>性别：</span>
					<label></label>
				</li>
				<li>
					<span>年龄：</span>
					<label></label>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" scoped="scoped" type="text/css">
	
</style>
<script type="text/javascript">
	import pDataHeader from '../components/pDataHeader'

	export default{
		data(){
			return{
				ownerInfo:{}
			}
		},
		components:{
			pDataHeader
		}
	}
</script>