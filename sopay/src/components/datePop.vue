<template>
	<div id="MdatePlugin"></div>
</template>
<style type="text/css">
	html, body{
		padding: 0; 
		margin: 0; 
		border: 0; 
		vertical-align: baseline; 
		font-size: 15px; 
		color: #333; 
	}
	*,*:before,*:after{
		padding: 0;
		margin: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		font-family: "Microsoft Yahei", "Helvetica Neue", Arial, Helvetica, sans-serif;
		word-break: break-all;
	}
	*:focus { outline: none; }
	.fl{ float: left; }
	.fr{ float: right; }


	/*选择日期*/
	.getDateBg{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.7);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		transition: opacity 0.4s;
		opacity: 0;
	}
	.getDateBox{
		width: 100%;
		position: fixed;
		left: 0;
		background-color: #fff;
		box-shadow: -5px 0 5px rgba(0,0,0,0.3);
		z-index: 101;
		transition: bottom 0.4s;
		bottom: -270px;
	}
	.slideIn{
		display: block !important;
	}
	.slideIn .getDateBox{
		animation: slideIn 0.4s;
		-webkit-animation: slideIn 0.4s;
		bottom: 0;
	}
	.slideOut .getDateBox{
		animation: slideOut 0.4s;
		-webkit-animation: slideOut 0.4s;
		bottom: -400px;
	}

	.slideIn .getDateBg{
		opacity: 1;
	}
	.slideOut .getDateBg{
		opacity: 0;
	}

	.getDateBox .choiceDateTitle{
		height: .44rem;
		background-color: #f2f2f2;
	}
	.getDateBox .choiceDateTitle button{
		height: 100%;
		padding: 0 .2rem;
		color: #00c599;
		font-size: .14rem;
		background: none;
		border: 0;
		-webkit-tap-highlight-color: rgba(0,0,0,0.2)
	}
	.getDateBox .dateContent{
		width: 100%;
		margin: .42rem 0;
		height: 120px;
		overflow: hidden;
		position: relative;
	}

	.getDateBox .dateContent:before{
		content: "";
		width: 100%;
		height: 40px;
		background: -webkit-linear-gradient(top, rgba(255,255,255,1), rgba(255,255,255,0));
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		pointer-events: none;
	}
	.getDateBox .dateContent:after{
		content: "";
		width: 100%;
		height: 40px;
		background: -webkit-linear-gradient(bottom, rgba(255,255,255,1), rgba(255,255,255,0));
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 10;
		pointer-events: none;
	}
	.getDateBox .dateContent .checkeDate{
		width: 100%;
		height: 40px;
		position: absolute;
		left: 0;
		top: 40px;
	}
	.getDateBox .dateContent .checkeDate:before,.getDateBox .dateContent .checkeDate:after{
		content: "";
		width: 100%;
		height: 1px;
		background-color: #ccc;
		position: absolute;
		left: 0;
		top: 0;
		transform: scaleY(0.5);
		-webkit-transform: scaleY(0.5);
	}
	.getDateBox .dateContent .checkeDate:after{
		top: auto;
		bottom: 0;
	}

	#yearwrapper,#monthwrapper,#daywrapper{
		width: 33.3%;
		height: 100%;
		position: absolute;
		top: 0;
	}
	#yearwrapper{
		left: 0;
	}
	#daywrapper{
		right: 0;
	}
	#monthwrapper{
		left: 33.3%;
	}
	#yearwrapper ul{
		margin-left: 40%;
	}
	#daywrapper ul{
		margin-right: 40%;
	}
	#yearwrapper ul li,#monthwrapper ul li,#daywrapper ul li{
		height: 40px;
		line-height: 40px;
		font-size: .13rem;
		text-align: center;
		list-style: none;
	}

	@keyframes slideIn{
		0%{bottom: -270px;}
		100%{bottom: 0;}
	}
	@-webkit-keyframes slideIn{
		0%{bottom: -270px;}
		100%{bottom: 0;}
	}

	@keyframes slideOut{
		0%{bottom: 0;}
		100%{bottom: -270px;}
	}
	@-webkit-keyframes slideOut{
		0%{bottom: 0;}
		100%{bottom: -270px;}
	}
</style>
<script type="text/javascript">
	import iScroll from 'iscroll'

	export default{
		props:{
			el:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				dateopts:{
					beginYear:1900,
					beginMonth:1,
					beginDay:1,
					endYear:new Date().getFullYear(),
					endMonth:new Date().getMonth() + 1,
					endDay:new Date().getDate(),
					format:"YMD"
				},
				MdSelectId:'',
				MdAcceptId:'',
				dateContentBox:'',
				datePlugs:'',
				yearTag:'',
				monthTag:'',
				dayTag:'',
				indexY:1,
				indexM:1,
				indexD:1,
				initM: null,
				indexD: null,
				yearScroll:null,
				monthScroll:null,
				dayScroll:null,
				MdatePlugin:'',
				mdate:{
					selectorId:'',
					acceptId:'',
					beginYear:0,
					beginMonth:0,
					beginDay:0,
					endYear:0,
					endMonth:0,
					endDay:0,
					format:''
				}
			}
		},
		mounted(){
			var mdetes = this.Mdate();
		},
		methods:{
			Mdate:function(){
				this.mdate.selectorId = document.getElementById(this.el);
				this.mdate.acceptId = document.getElementById(this.el);
				this.mdate.beginYear = this.dateopts.beginYear;
				this.mdate.beginMonth = this.dateopts.beginMonth;
				this.mdate.beginDay = this.dateopts.beginDay;
				this.mdate.endYear = this.dateopts.endYear;
				this.mdate.endMonth = this.dateopts.endMonth;
				this.mdate.endDay = this.dateopts.endDay;
				this.mdate.format = this.dateopts.format;
				this.dateBoxShow();
			},
			dateBoxShow:function(){
				var _this = this;
				_this.mdate.selectorId.onclick = function(){
					_this.createDateBox();
					_this.dateSure();
				}
			},
			createDateBox:function(){
				this.MdatePlugin = document.getElementById('MdatePlugin');
				MdatePlugin.setAttribute("class","slideIn");
				this.createDateUi();
				var yearUl = document.getElementById('yearUl');
				var monthUl = document.getElementById("monthUl");
		        var dayUl = document.getElementById("dayUl");
		        yearUl.innerHTML = this.createDateYMD("year");
		        monthUl.innerHTML = this.createDateYMD("month");
		        dayUl.innerHTML = this.createDateYMD("day");
		        this.initScroll();
		        this.refreshScroll()
			},
			createDateUi:function(){
				var str = "" + '<section class="getDateBg"></section>' + '<section class="getDateBox" id="getDateBox">' + '<div class="choiceDateTitle">' + '<button id="dateCancel" @click="dateCancel">取消</button>' + '<button id="dateSure" class="fr" @click="dateSure">确定</button>' + "</div>" + '<div class="dateContent">' + '<div class="checkeDate"></div>' + '<div id="yearwrapper">' + '<ul id="yearUl"></ul>' + "</div>" + '<div id="monthwrapper">' + '<ul id="monthUl"></ul>' + "</div>" + '<div id="daywrapper">' + '<ul id="dayUl"></ul>' + "</div>" + "</div>" + "</section>";
		        MdatePlugin.innerHTML = str;
			},
		    createDateYMD: function(type) {
		        var str = "<li>&nbsp;</li>";
		        var beginNum = null,
		        endNum = null,
		        unitName = "年",
		        dataStyle = "data-year";
		        if (type == "year") {
		            beginNum = this.dateopts.beginYear;
		            endNum = this.dateopts.endYear
		        }
		        if (type == "month") {
		            unitName = "月";
		            dataStyle = "data-month";
		            beginNum = this.dateopts.beginMonth;
		            endNum = 12;
		            if (this.yearTag != this.dateopts.beginYear) {
		                beginNum = 1
		            }
		            if (this.yearTag == this.dateopts.endYear) {
		                endNum = this.dateopts.endMonth
		            }
		        }
		        if (type == "day") {
		            unitName = "日";
		            dataStyle = "data-day";
		            beginNum = 1;
		            endNum = new Date(this.yearTag, this.monthTag, 0).getDate();
		            if (this.yearTag == this.dateopts.beginYear && this.monthTag == this.dateopts.beginMonth) {
		                beginNum = this.dateopts.beginDay
		            }
		            if (this.yearTag == this.dateopts.endYear && this.monthTag == this.dateopts.endMonth) {
		                endNum = this.dateopts.endDay
		            }
		        }
		        for (var i = beginNum; i <= endNum; i++) {
		            str += "<li " + dataStyle + "=" + i + ">" + this.dateForTen(i) + unitName + "</li>"
		        }
		        return str + "<li>&nbsp;</li>"
		    },
		    initScroll: function() {
		    	var _this = this;
		        _this.yearScroll = new iScroll("#yearwrapper", {
		            snap: "li",
		            vScrollbar: false,
					onScrollEnd:function(){
						_this.indexY = Math.ceil(this.y / 40 * -1 +1);
						_this.yearTag = yearUl.getElementByTagName('li')[_this.indexY].getAttribute('data-year');
						_this.monthScroll.refresh();
						try {
		                    _this.monthTag = monthUl.getElementsByTagName("li")[_this.indexM].getAttribute("data-month")
		                } catch(err) {
		                    return true
		                }
		                dayUl.innerHTML = _this.createDateYMD("day");
		                _this.dayScroll.refresh();
		                try {
		                    _this.dayTag = dayUl.getElementsByTagName("li")[_this.indexD].getAttribute("data-day")
		                } catch(err) {
		                    return true
		                }
					}
		        });
		        _this.monthScroll = new iScroll("#monthwrapper", {
		            snap: "li",
		            vScrollbar: false,
		            onScrollEnd: function() {
		                _this.indexM = Math.ceil(this.y / 40 * -1 + 1);
		                if(_this.indexM == 1 && _this.yearTag != _this.dateopts.beginYear){
		                	_this.monthTag = 1;
		                }
		                else{
		                	_this.monthTag = monthUl.getElementByTagName('li')[_this.indexM].getAttribute('data-month');
		                }
		                _this.dayUl.innerHTML = _this.createDateYMD('day');
		                _this.dayScroll.refresh();
		                try{
		                	_this.dayTag = dayUl.getElementByTagName('li')[_this.indexD].getAttribute('data-day');
		                }
		                catch(err){
		                	return true;
		                }
		            }
		        });
		        _this.dayScroll = new iScroll("#daywrapper", {
		            snap: "li",
		            vScrollbar: false,
		            onScrollEnd: function() {
		                _this.indexD = Math.ceil(this.y / 40 * -1 + 1);
		                if(_this.indexD == 1 && _this.monthTag != _this.dateopts.beginMonth){
		                	_this.dayTag = 1;
		                }
		                else{
		                	_this.dayTag = dayUl.getElementByTagName("li")[_this.indexD].getAttribute('data-day');
		                }
		            }
		        })
		    },
		    refreshScroll: function() {
		        var inputYear = this.mdate.acceptId.getElementById("data-year");
		        var inputMonth = this.mdate.acceptId.getElementById("data-month");
		        var inputDay = this.mdate.acceptId.getElementById("data-day");
		        inputYear = inputYear || this.dateopts.beginYear;
		        inputMonth = inputMonth || this.dateopts.beginMonth;
		        inputDay = inputDay || this.dateopts.beginDay;
		        this.initM = this.dateopts.beginMonth;
		        this.initD = this.dateopts.beginDay;
		        if (inputYear != this.dateopts.beginYear && this.initM != 1) {
		            this.initM = 1
		        }
		        if (inputMonth != this.dateopts.beginMonth && this.initD != 1) {
		            this.initD = 1
		        }
		        inputYear -= this.dateopts.beginYear;
		        inputMonth -= this.initM;
		        inputDay -= this.initD;
		        this.yearScroll.refresh();
		        this.yearScroll.scrollTo(0, inputYear * 40, 300, true);
		        this.monthScroll.scrollTo(0, inputMonth * 40, 300, true);
		        this.dayScroll.scrollTo(0, inputDay * 40, 300, true)
		    },
		    dateSure: function() {
	            if (_this.dateopts.format == "YMD") {
	                _this.mdate.acceptId.value = _this.yearTag + "年" + _this.monthTag + "月" + _this.dayTag + "日"
	            } else {
	                _this.mdate.acceptId.value = _this.yearTag + _this.dateopts.format + _this.dateForTen(_this.monthTag) + _this.dateopts.format + _this.dateForTen(_this.dayTag)
	            }
	            _this.acceptId.setAttribute("data-year", _this.yearTag);
	            _this.acceptId.setAttribute("data-month", _this.monthTag);
	            _this.acceptId.setAttribute("data-day", _this.dayTag);
	            _this.dateCancel()
		    },
		    dateForTen: function(n) {
		        if (n < 10) {
		            return "0" + n
		        } else {
		            return n
		        }
		    },
		    dateCancel: function() {
		        this.MdatePlugin.setAttribute("class", "slideOut");
		        setTimeout(function() {
		            this.MdatePlugin.innerHTML = ""
		        },
		        400)
		    }
		}

	}
</script>