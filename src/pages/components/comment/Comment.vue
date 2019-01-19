<template>
	<div class="comment">
		
		
		 <h2>发表评论</h2>
		 <hr />
		 
		 <textarea placeholder="最多输入120个字！" maxlength="120"></textarea>
		  <mt-button type="primary " size="large" >加载更多</mt-button>
		  <ul>
		  	<li v-for="(item,i) in commentlist" :key="item.add_time">
		  		<p class="p1">第{{i+1}}楼     &nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;
		  			 发表时间：{{item.add_time | dateFormat}}</p>
		  		<p>{{item.content}}</p>
		  	</li>
		  </ul>
		  <mt-button type="danger" size="large" plain>加载更多</mt-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pageindex:1,
				commentlist:[]
			}
		},
		props:['id'],
		created(){
			this.getcomment()
		},
		methods:{
			getcomment(){
				this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(res=>{
					console.log(res)
					if(res.status===200){
						this.commentlist=res.body.message
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		padding: 0;
		margin: 0;
	}
	.comment ul{
		list-style: none;
	}
	.comment .p1{
		background: lightskyblue;
	}
	.comment p{
		color: black;
	}
</style>