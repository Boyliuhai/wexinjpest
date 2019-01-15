<template>
	<div>
		<!-- tabcontainer -->  
		<mt-tab-container class="page-tabbar-container" v-model="selected">  
			<mt-tab-container-item id="首页">  
					<div class="logo">
						<img src="../../assets/mint-ui-logo3.png" alt="">
					</div>
					<div class="scrollmessage">
						<div class="marquee_box">
							<ul class="marquee_list" :class="{marquee_top:animate}" style="padding-left:5em;text-align:center; text-decoration: none;">
								<li v-for="(item, index) in marqueeList" style=" text-align:center;font-size: 16px; text-decoration: none;">
								<span>{{item.name}}</span>
								<span class="red"> {{item.city}}</span>
								<span class="red"> {{item.amount}}</span>
								</li>
							</ul>
						</div>
					</div>
				<div  class="all">
					<div class="one">
						<p class="menuclass">项目管理</p>
					</div>
					<div  class="two">
						<p class="menuclass">作业管理</p>
					</div>
					
				</div>
				<div class="middle">
				</div>
				<div  class="all">					
					<div  class="three">
						<p class="menuclass">违章管理</p>
					</div>
					<div  class="four">
						<p class="menuclass">质量控制</p>
					</div>
				</div>
				<div class="middle">
				</div>
				<div class="all1">
					<div class="aa">
					<img src="../../assets/7.png" alt="">
						<p class="menuclass1">项目管理</p>
					</div>
					<div class="aa1">
					</div>
					<div class="bb">
							<img src="../../assets/7.png" alt="">
						<p class="menuclass1">项目管理</p>
					</div>
					<div class="aa1">
					</div>
					<div class="cc">
							<img src="../../assets/7.png" alt="">
						<p class="menuclass1">项目管理</p>
					</div>
				</div>
				&nbsp;
				<pre></pre>
					&nbsp;
				<pre></pre>
					<div class="all2">
						<div class="aaa">
								<img src="../../assets/7.png" alt="">
							<p class="menuclass1">项目管理</p>
						</div>
							<div class="aa1">
						</div>
						<div class="bbb">
								<img src="../../assets/7.png" alt="">
							<p class="menuclass1">项目管理</p>
						</div>
							<div class="aa1">
						</div>
						<div class="ccc">
								<img src="../../assets/7.png" alt="">
							<p class="menuclass1">项目管理</p>
						</div>
				</div>
		 	</mt-tab-container-item>  
			<mt-tab-container-item id="我的">  
				<div class="logo1">
					<img src="../../assets/userlogo1.png" alt="">
					<p class="mint-ui-title">个人主页</p>
				</div>
				<div class="page-indexlist-wrapper">
					&nbsp;
						<mt-cell class="mt-cell" label="用户名："><p class="p">刘海栋</p>
						</mt-cell>
					&nbsp;
						<mt-cell class="mt-cell" label="所属单位："><p class="p">中国地质大学</p>
						</mt-cell>
					&nbsp;
						<mt-cell class="mt-cell" label="使用指南：">暂时未开发
						</mt-cell>
					&nbsp;
						<mt-cell class="mt-cell" label="客户联系方式">13545623546
						</mt-cell>
					&nbsp;
						<mt-button type="danger" size="large">退出</mt-button>  
						</div>
		
			</mt-tab-container-item>  
		</mt-tab-container>   
		<mt-tabbar v-model="selected" fixed>  
			<mt-tab-item id="首页">  
				<img slot="icon" src="../../assets/tabbardefault.png">  
				首页  
			</mt-tab-item>  
			<mt-tab-item id="我的">  
				<img slot="icon" src="../../assets/tabbardefault.png"> 
				我的  
			</mt-tab-item>  
    	</mt-tabbar>  
	</div>
</template>

<script>
import Vue from 'vue';
import { Button, Select } from 'element-ui';
export default {
	name: 'Tabbar',
	name: 'IndexList',
	data(){
    return {
      selected: '首页',
	  examplename: 'Tabbar',
		examplename: 'IndexList',
		 animate: false,
            marqueeList: [
                {
                    name: '维尚',
                    city: '智能',
                    amount: '欢迎您'
                },
                {
                    name: '今天',
                    city: '天气',
                    amount: '不错'
                },
            ]

    }
  },
  methods:{
	  showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            },500)},

  },
  created:function(){
 setInterval(this.showMarquee, 2000)

  },
}

</script>
<style scoped>

  .scrollmessage{
		background-color:mintcream;
		 height: 3em;
	}
  .mint-tabbar.is-fixed {
    height: 55px;
  }
  .logo{
	  background-color:#ECF6FB;
	  text-align: center;
	  height:10.5em;
  }
  .logo1{
	  background-color:#ECF6FB;
	  text-align: center;
	  height:9em;
  }
  .page-tabbar-container {
    margin-bottom: 55px;
  }
  .mint-ui-title{
	font-weight:bold;
	font-size:1em;
	font-family:"Hiragino Sans GB";
  }

.marquee {
	width: 100%;
	height: 50px;
	align-items: center;
	color: #3A3A3A;
	background-color: #b3effe;
	display: flex;
	box-sizing: border-box;
}
 
.marquee_title {
	padding: 0 20px;
	height: 30px;
	font-size: 14px;
	border-right: 1px solid #d8d8d8;
	align-items: center;
}
 
.marquee_box {
	display: block;
	position: relative;
	height: 40px;
	 text-align: center;
	overflow: hidden;
}
 
.marquee_list {
	display: block;
	position: absolute;
	top: 0;
	
}
.marquee_top {
	transition: all 0.5s;
	margin-top: -30px
}
 
.marquee_list li {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding-left: 20px;
}
 
.marquee_list li span {
	padding: 0 2px;
}
 
.red {
	color: #FF0101;
}
.one{

	float: left;
width: 7em;
height: 4em;
background-color: #FF0101;
}
.two{

	float:right;
	width: 7em;
height: 4em;
background-color:coral;
}
.three{

	float: left;
	width: 7em;
height: 4em;
background-color:deepskyblue;
}
.four{
	
	float:right;
	width: 7em;
height: 4em;
background-color:royalblue;
}
.all{
	width: 16em;
	 text-align: center;
	 margin:0 auto;
}
.middle{
	height: 5em;
}
.menuclass{
	text-align: center;
	font-weight:bold;
  font-size:1.2em;
  font-family:"Hiragino Sans GB";
}
.menuclass1{
	text-align: center;
  font-size:1em;
}
.all1{
		width: 20em;
	 text-align: center;
	 margin:0 auto;
	 
}
.all2{
		width: 20em;
	 text-align: center;
	 margin:0 auto;
}
.aa{
	background-color: beige;
	width: 6em;
height: 4.4em;
	float: left;
}
.bb{
		float: left;
		background-color: beige;
			width: 6em;
height:  4.4em;

}
.cc{
		float: left;
		width: 6em;
height:  4.4em;
		background-color: beige;
	
}
.aaa{
		background-color: beige;
	width: 6em;
height:  4.4em;
	float: left;
}
.bbb{
		background-color: beige;
	width: 6em;
height:  4.4em;
	float: left;
}
.ccc{
		background-color: beige;
	width: 6em;
	float: left;
height:  4.4em;
}
.aa1{
	width:1em;
	height:  4.4em;
		float: left;
}
</style>