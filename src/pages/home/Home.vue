<template>
	<div class="home">
		
		
		
		<!--轮播图-->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in lunbotulist" :key="item.id">
				<img :src="item.img" alt="" />
			</mt-swipe-item>
			

		</mt-swipe>
		
		<!--六宫格-->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/Home/newlist">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">图片分享</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon-extra mui-icon-extra-cart"></span>
					<div class="mui-media-body">商品购买</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon-extra mui-icon-extra-prech"></span>
					<div class="mui-media-body">留言反馈</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon-extra mui-icon-extra-computer"></span>
					<div class="mui-media-body">视频专区</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-list"></span>
					<div class="mui-media-body">留言反馈</div>
				</a>
			</li>

		</ul>

		
	</div>
</template>

<script>
	

	export default {
		name: 'home',
		data() {
			return {
				lunbotulist: []
				
			};
		},
		created() {
			this.getlunbotu();
		},
		methods: {
//			'https://www.apiopen.top/satinApi', {
//					type:1,page: 1
//				}
			getlunbotu() {
				this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res => {
//					 console.log(res)
					if(res.status === 200) {
						this.lunbotulist=res.body.message;
//						 console.log(this.lunbotulist)
						
					}
					
					
				})
			}
		}
	
	}
</script>

<style scoped>
	.home{
		padding-top: 40px;
	}
	.mint-swipe {
		height: 200px;
	}
	
	.mint-swipe img {
		width: 100%;
		height: 100%;
	}
	
	.mui-grid-view.mui-grid-9 {
		background: white;
		border-top: none;
		border-left: none;
	}
	
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border-right: none;
		border-bottom: none;
	}
	.mui-icon-extra{
		font-size: 40px;
	}
</style>