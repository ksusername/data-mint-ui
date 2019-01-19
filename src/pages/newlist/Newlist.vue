<template>
	<div class="newlist">
		
		
		
		
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" >
					<router-link :to="'/Home/Newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" 
						    :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
								<span>发表时间：{{item.add_time | dateFormat}}</span>
								<span>点击：{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
			

			</ul>
		
		
	</div>
</template>

<script>
	
	
	
	export default{
		name:'newlist',
		data(){
			return{
				newlist:[]
			};
		},
		created(){
			this.getnewlist();
		},
		methods:{
			getnewlist(){
			//'https://www.apiopen.top/satinApi',{type:1,page:1}
				this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(res=>{
//					console.log(res)
					if(res.status===200){
						this.newlist=res.body.message;
					
					}
				})
			}
		}
		
	}
	
</script>

<style scoped="scoped">
	.newlist{
		padding-top: 40px;
	}
	
	.mui-ellipsis span{
		color:#6497ff;
	}
	.mui-ellipsis{
		display: flex;
		justify-content: space-between;
	}
	
</style>