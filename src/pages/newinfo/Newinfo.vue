<template>
	<div class="newinfo">
		
		<h3>{{newlist.title}}</h3>
		<p>
			<span>发表时间：{{newlist.add_time | dateFormat}}</span>
			<span>点击：{{newlist.click}}次</span>
		</p>
		<hr />
		<div class="container" v-html="newlist.content">
			
		</div>
		
		<comment :id="id"></comment>
	</div>
</template>

<script>
	import comment from'@/pages/components/comment/Comment'
	export default{
		data(){
			return{
				id:this.$route.params.id,
				newlist:[]
			}
		},
		created(){
			this.getnewinfo()
		},
		methods:{
			getnewinfo(){
				this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(res=>{
//					console.log(res)
					if(res.status===200){
						this.newlist=res.body.message[0]
					}
				})
			}
		},
		components:{
			comment
		}
	}
</script>

<style scoped="scoped">
	
	.newinfo{
		padding-top: 40px;
	}
	.newinfo h3{
		text-align: center;
	}
	.newinfo p{
		display: flex;
		justify-content: space-between;
	}
</style>