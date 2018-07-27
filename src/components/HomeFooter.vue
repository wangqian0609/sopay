<template>
	<footer class="homefooter">
		<dl>
			<dd>
				<div class="icon">
					<img src="../assets/home.svg" title="首页">
					<!-- <img src="https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/home.svg"> -->
				</div>
			</dd>
			<dd>
				<div class="icon">
					<img src="../assets/chat.svg" title="聊天">
					<!-- <img src="https://raw.githubusercontent.com/wangqian0609/sopay/master/src/assets/chat.svg"> -->
				</div>
			</dd>
		</dl>
	</footer>
</template>
<script type="text/javascript"></script>
<style lang="scss" type="text/css">
	.homefooter{
		width:100%;
		height:1rem;
		border-top:1px solid rgba(128, 204, 214, 0.8);
		background-color:#fff;
		overflow:hidden;
		position:absolute;
		bottom:0;
		left:0;
		z-index:1;
		& > dl{
			width:100%;
			display:-webkit-box;
			dd{
				width:auto;
				height:100%;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				-webkit-box-flex: 1;
				border-right:1px solid #ddd;
				.icon{
					width:.8rem;
					height:.8rem;
					margin-top:.1rem;
					img{
						width:100%;
						display:inline-block;
						vertical-align:top;
					}
				}
				&:last-child{
					border-right:none;
				}
			}
		}
	}
</style>