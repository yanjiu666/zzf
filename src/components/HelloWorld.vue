<template>
	<div class="app">
		<item txt="首页" make=1 @change="getVal" :sel="selected" router="/">
			<img slot="img01" src="../assets/img/1.png"/>
			<img slot="img02" src="../assets/img/6.png"/>
		</item>
		<item txt="分类" make=2 @change="getVal" :sel="selected" router="audio">
			<img slot="img01" src="../assets/img/2.png"/>
			<img slot="img02" src="../assets/img/7.png"/>
		</item>
		<item txt="发现" make=3 @change="getVal" :sel="selected" router="broadcast">
			<img slot="img01" src="../assets/img/3.png"/>
			<img slot="img02" src="../assets/img/8.png"/>
		</item>
		<item txt="购物车" make=4 @change="getVal" :sel="selected" router="group">
			<img slot="img01" src="../assets/img/4.png"/>
			<img slot="img02" src="../assets/img/9.png"/>
		</item>
		<item txt="我的考拉" make=5 @change="getVal" :sel="selected" router="mine">
			<img slot="img01" src="../assets/img/5.png"/>
			<img slot="img02" src="../assets/img/10.png"/>
		</item>
	</div>
</template>

<script>
	import Item from "./item.vue"
	export default{
		components:{
		Item
		},
		data:function(){
			return{
				selected:1
			}
		},methods:{
			getVal:function(val){
				this.selected=val
			}
		}
	}
</script>

<style>
			.app{
				width: 100%;
				height: 110px;
				background: #eee;
				border: 1px solid #eee;
				position: fixed;
				left: 0;
				bottom: 0;
			}
			#child{
				width: 20%;
				float: left;
				/*text-align: center;*/
			}
			
</style>