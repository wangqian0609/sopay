 <!-- :getUnderData="getUnderData" -->
 <template>
	<wxChat :data = "wxChatData" :showShade="false" :contactNickname="Nickname" :getUpperData="getUpperData"  :ownerAvatarUrl="ownerAvatarUrl" :contactAvatarUrl="contactAvatarUrl" :width="420"></wxChat>
</template> 
<style lang="scss" scoped="scoped" type="text/css">
	*{
		margin:0;
		padding:0;
	}
	#app{
		font-family:'Avenir',Helvetica,Arial,sans-serif;
		-webkit-font-smoothing:antialiased;
		-moz-osx-font-smoothing:grayscale;
		text-align:center;
		color:#2c3e50;
		margin-top:60px;
	}
	h1,h2{
		font-weight:normal;
	}
	ul{
		list-style-type:none;
		padding:0;
	}
	li{
		display:inline-block;
	}
</style>
<script>
	import wxChat from '../components/wxChat.vue'
	var friendDatas = {},userDatas = {};
	export default{
		data(){
			return{
				upperTimes: 0,
				underTimes: 0,
				upperId: 0,
				underId: 6,
				ownerAvatarUrl:userDatas.userUrl,
				contactAvatarUrl:friendDatas.friendsUrl,
				Nickname:this.$route.params.friends,
				wxChatData:friendDatas.content
			}
		},
		components:{
			wxChat
		},
		created(){
			this.$http.get('/api/users').then((data) => {
				// console.log(data.body.data);
				var dataList = data.body.data,
					user = this.$route.params.user,
					friend = this.$route.params.friends;
				for(var i = 0; i < dataList.length;i++){
					if(dataList[i].name == user.username){
						userDatas = dataList[i];
						for(var j = 0 ; j < dataList[i].lists.length; j++){
							if(dataList[i].lists[j].friendsname == friend){
								friendDatas = dataList[i].lists[j];
								console.log(friendDatas);
								return friendDatas,userDatas;
							}
							else{
								console.log('没有该好友');
							}
						}
					}
					else{
						console.log('没有该用户');
					}
				}
			})
		},
		methods:{
			getUpperData(){
				var me = this;
				//这里为模拟异步加载数据，实际上可能要这样写
				// return axios.get('xxx').then(function(result){
				// 	return result;
				// })
				return new Promise(function(resolve){
					setTimeout(function(){
						if(me.upperTimes > 3){
							return result([]);
						}

						resolve([{
							direction:2,
							id:me.upperId -1,
							type:1,
							content:'向上滚动加载第' + me.upperTimes + '条！',
							ctime:new Date().toLocaleString()
						},
						{
							direction:1,
							id:me.upperId - 2,
							type:1,
							content:'向上滚动加载第' + me.upperTimes + '条',
							ctime:new Date().toLocaleString()
						}]
						)
					},1000);
					// console.log(me.upperId)
					me.upperId = me.upperId + 2;
					me.upperTimes ++;
				})
			},
			// getUnderData(){
			// 	var me = this;
			// 	return new Promise(function(resolve){
			// 		setTimeout(function(){
			// 			if(me.underTimes > 3){
			// 				return resolve([]);
			// 			}
			// 			resolve(
			// 				[{
			// 					direction:1,
			// 					id:me.underId + 1,
			// 					type:1,
			// 					content:'向下滚动加载第' + me.underTimes + '条',
			// 					ctime:new Date().toLocaleString()
			// 				},
			// 				{
			// 					direction:2,
			// 					id:me.underId + 2,
			// 					type:1,
			// 					content:'向下滚动加载第' + me.underTimes + '条',
			// 					ctime:new Date().toLocaleString()
			// 				}]
			// 			)
			// 		},1000);
			// 		me.underId = me.underId + 2 ;
			// 		me.underTimes ++;
			// 	})
			// },
		}
	}
</script>