<template>
  <div id="app">
  	
  	<!--头部-->
		<mt-header fixed title="黑马程序员"></mt-header>
   
   
<!--   中间主体部分-->
    <transition>
    	<router-view/>
    </transition>
    
    
    
    <!--底部-->
    <taber></taber>
  </div>
</template>

<script>
	import taber from'@/pages/components/taber/Taber'
export default {
  name: 'App',
  components:{
  	taber
  }
}
</script>

<style scoped>

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
}
#app{
		overflow-x: hidden;
		padding-bottom: 50px;
	}

</style>
