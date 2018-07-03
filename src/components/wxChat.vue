<template>
	<div class="wxchat-container" :style="{backgroundColor:wrapBg}">
		<div class="window" id="window-view-container">
			<!--data is empty-->
			<div class="loading" v-if="dataArray && dataArray.length == 0">
				<div style="margin-top:300px;text-align:center;font-size:16px;">
					<span>未查找到聊天记录</span>
				</div>
			</div>
			<!--loading-->
			<div class="loading" v-if="dataArray.length == 0">
				<div style="margin-top:300px">
					<div>加载中……</div>
				</div>
			</div>

			<div class="title" v-if="dataArray && dataArray.length > 0">
				<p v-text="contactNickname"></p>
			</div>
			<!--main-->
			<!-- @scroll-to-bottom="infinite" -->
			<ScrollLoader :minHeight="minHeight" @scroll-to-top="refresh" class="container-main" v-if="dataArray && dataArray.length> 0 " :style="{maxHeight:maxHeight - 100+'px'}">
				 <div class="message" id="messageList">
                    <ul>
                        <li v-for="(message, index) in dataArray" :key="message.id" :class="message.direction==2?'an-move-right':'an-move-left'">
                            <p class="time"> <span v-text="message.ctime"></span> </p>
                            <p class="time system" v-if="message.type==10000"> <span v-html="message.content"></span> </p>
                            <div :class="'main' + (message.direction==2?' self':'')" v-else>
                                <img class="avatar" :src="message.direction==2? ownerAvatarUrl: contactAvatarUrl">
                                <!-- 文本 -->
                                <div class="text" v-emotion="message.content" v-if="message.type==1"></div>

                                <!-- 图片 -->
                                <div class="text" v-else-if="message.type==2">
                                    <img :src="message.content" class="image" alt="聊天图片">
                                </div>

                                <!-- 其他 -->
                                <div class="text" v-else-if="message.type!=10000" v-text="'[暂未支持的消息类型:'+ message.type +']\n\r' + message.content">
                                   
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
			</ScrollLoader>
			<div class="sendBox">
				<input type="text" class="input_word" v-model="NewMessageText">
                <button class="emotion_Btn">
                    <img src="../assets/emotion.svg">
                </button>
                <button class="sendMessageBtn" @click="sendMessage">发送</button>
			</div>
		</div>
	</div>
</template>
<style scoped="scoped" type="text/css">
	.wxchat-container{ width: 100%; height: 100%;z-index: 100; position: fixed; left:0; top: 0; overflow: hidden;}
    .shadow{ position: absolute; top:0; left: 0; z-index: 100; width: 100%; height: 100%; background: #000; opacity: .2; }
    .window { width:100%; background: #f1f1f1; margin: 0 auto; overflow: hidden; padding: 0; height: 100%;position: relative;z-index: 101;}
    button{border:0; background:none; border-radius: 0;text-align: center;}
    button{outline:none;}
    .w100{width: 100%;}
    .mt5{margin-top: 5px;}
    .mt10{margin-top: 10px;}
    .mt20{margin-top: 20px;}
    .mb10{margin-bottom: 10px;}
    .mb20{margin-bottom: 20px;}
    .fs0{font-size: 0}
    .title{
        background: #fff; 
        text-align: center; 
        width: 100%;
        height: 50px; 
        line-height: 50px; 
        margin:0 auto;
        padding:0 .24rem;
        font-size: 15px;
        border-bottom: .02rem solid #80ccd6;
     }
     .title p{
        text-align:center;
        padding: 0 .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
     }
    .loading,.no-more{text-align: center; color: #b0b0b0; line-height: 100px;}
    .no-more{line-height: 60px;}
    .pull-right{float: right;}
    .link-line{text-decoration: underline;}
    .message{
        width:100%;
        /*height: 100%;*/
        padding: 10px 15px;
        /*overflow-y: scroll;*/
        background-color: #f1f1f1;
        display: inline-block;
        position: absolute;
    }
    .message li {
        margin-bottom: 15px;
        left:0;
        position: relative;
        display: block;
    }
    .message .time {
        margin: 10px 0;
        text-align: center;
    }
    .message .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: calc(100% - 75px);
        min-height: 35px;
        line-height: 2.1;
        font-size: 15px;
        padding: 6px 10px;
        text-align: left;
        word-break: break-all;
        background-color: #fff;
        color: #000;
        border-radius: 4px;
        box-shadow: 0px 1px 7px -5px #000;
        vertical-align: top;
    }
    .message .avatar {
    	width: 45px;
    	height: 45px;
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
        background: #fff;
        display: flex;
    }
    .message .time>span {
        display: inline-block;
        padding: 0 5px;
        font-size: 12px;
        color: #fff;
        border-radius: 2px;
        background-color: #dadada;
    }
    .message .system>span{
        padding: 4px 9px;
        text-align: left;
    }
    .message .text:before {
        content: " ";
        position: absolute;
        top: 9px;
        right: 100%;
        border: 6px solid transparent;
        border-right-color: #fff;
    }
    .message .self {
        text-align: right;
    }
    .message .self .avatar {
        float: right;
        margin: 0 0 0 10px;
    }
    .message .self .text {
        background-color: #9eea6a;
    }
    .message .self .text:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #9eea6a;
    }
    .message .image{
        max-width: 200px;
    }
    img.static-emotion-gif, img.static-emotion {
        vertical-align: top !important;
    }
    .an-move-left{
        left: 0;
        animation: moveLeft .7s ease;
        -webkit-animation:moveLeft .7s ease; 
        text-align:left;
    }
    .an-move-left .text{
    	margin-left: 10px;
    }
    .an-move-right{
        right: 0;
        animation: moveRight .7s ease;
        -webkit-animation:moveRight .7s ease;
        text-align:right; 
    }
    .an-move-right .text{
    	margin-right: 10px;
    }
    .bgnone{
        background: none;
    }
    .sendBox{
    	width:100%;
    	height: 50px;
    	background-color:#f9f9f9;
        border-top:1px solid #ddd;
        padding: 7.5px .24rem;
    	position: absolute;
    	bottom: 0;
    	left:0;
    }
    .sendBox .input_word{
        width: 65%;
        padding: 0 3%;
        display: inline-block;
        vertical-align: top;
        height: 35px;
        line-height: 35px;
        font-size: 15px;
        outline: none;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .sendBox .emotion_Btn{
        width: 35px;
        height: 35px;
        display: inline-block;
        vertical-align: top;
        /*float: right;*/
    }
    .sendBox .emotion_Btn img{
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .sendBox .sendMessageBtn{
        width: 20%;
        height: 35px;
        line-height: 35px;
        display: inline-block;
        float: right;
        background-color: #3dc312;
        color: #fff;
        border-radius: 5px;
        letter-spacing: 3px;
        font-size: 15px;
        text-align: center;
    }
    @keyframes moveRight{
        0%{left:-20px; opacity: 0};
        100%{left:0; opacity: 1}
    }
    @-webkit-keyframes moveRight
    {
        0%{left:-20px; opacity: 0};
        100%{left:0px; opacity: 1}
    }
    @keyframes moveLeft{
        0%{left:20px; opacity: 0};
        100%{left:0px; opacity: 1}
    }
    @-webkit-keyframes moveLeft
    {
        0%{left:20px; opacity: 0};
        100%{left:0px; opacity: 1}
    }
    @media (max-width: 367px){
        .fzDInfo{width:82%;}
    }
</style>
<script>
	import ScrollLoader from './scrollLoader.vue'

	export default{
		name:"wxChat",
		components:{
			ScrollLoader
		},
		props:{
			contactNickname:{
				type:String,
				default:'Mystic Faces'
			},
			data:{
				type:Array,
				required:true
			},
			width:{
				type:Number,
				// default:100%
			},
			wrapBg:{
				type:String,
				default:'#f1f1f1'
			},
			// maxHeight:{
			// 	type:Number,
			// 	// default:100
			// },
			contactAvatarUrl:{
				type:String
			},
			ownerAvatarUrl:{
				type:String
			},
			getUpperData:{
				type:Function,
				required:true
			},
			// getUnderData:{
			// 	type:Function,
			// 	required:true
			// }
		},
		data(){
			return{
				isUpperLoading:false,
				// isUnderLoading:false,

				isRefreshedAll:false,
				isLoadedAll:false,

				minHeight:700,
				maxHeight:700,
				dataArray:[],
                nextMessageId:12,
                NewMessageText:''
			}
		},
		created(){
			this.initData();
		},
		mounted(){
			this.minHeight = document.getElementById('window-view-container').offsetHeight;
			this.maxHeight = document.getElementById('window-view-container').offsetHeight;
            this.scrollPosition();
		},
		methods:{
			initData(){
				this.dataArray = this.dataArray.concat(this.data);
			},
			refresh(done){
				var me = this;
				if(me.isUpperLoading){
					return;
				}
				if(me.isRefreshedAll){
					done(true);
					me.isUpperLoading = false;
					return;
				}
				try{
					this.getUpperData().then(function(data){
						if(data.length == 0){
							me.isRefreshedAll = true;
							done(true);
						}
						else{
							me.dataArray = data.reverse().concat(me.dataArray);
							done();
						}
					})
				}
				catch(error){
					console.error('wxChat:props "getUpperData" must return a promise object!')
				}
				me.isUpperLoading = false;
			},
			//向下拉加载
			// infinite(done){
			// 	var me = this;
			// 	if(me.isUnderLoading){
			// 		return;
			// 	}
			// 	if(me.isLoadedAll){
			// 		done(true);
			// 		me.isUnderLoading = false;
			// 		return;
			// 	}
			// 	try{
			// 		this.getUnderData().then(function(data){
			// 			if(data == 0){
			// 				me.isLoadedAll = true;
			// 				done(true);
			// 			}else{
			// 				done();
			// 				me.dataArray = me.dataArray.concat(data);
			// 			}
			// 		})
			// 	}
			// 	catch(error){
			// 		console.error('wxChat: props "getUnderData" must return a promise object')
			// 	}
			// 	me.isUnderLoading = false;
			// }
            sendMessage(){
                this.dataArray.push({
                    direction: 2,
                    id: this.nextMessageId++,
                    type: 1,
                    content: this.NewMessageText,
                    ctime: new Date().toLocaleString()
                })
                this.scrollBottom();
                this.NewMessageText = ''
            },
            scrollBottom(){
                var Content = document.getElementById('messageList');
                var scrollNumber = Content.clientHeight -this.minHeight + 254;
                Content.style.transform = "translateY(-" + scrollNumber + "px)";
            },
            scrollPosition(){
                var Content = document.getElementById('messageList');
                var Number = Content.clientHeight - this.minHeight + 142;
                Content.style.transform = "translateY(-" + Number + "px)";
            }
		}
	}
</script>