<template>
	<div id="child" @click="fn1">
		<span v-show="bol" v-bind:class="{Acolor:!bol}"><slot name="img01"></slot><p>{{txt}}</p></span>
		<span v-show="!bol" v-bind:class="{Acolor:!bol}"><slot name="img02"></slot><p>{{txt}}</p></span><br/>
	</div>
</template>
<script>
	export default{
		props:["txt","make",'sel','router'],
		computed:{
			bol:function(){
				if(this.make==this.sel){
					this.$router.push(this.router);
					return false;
				}else{
					return true;
				}
			}
		},methods:{
			fn1:function(){
				this.$emit("change",this.make);
			}
		}
	}
</script>
<style>
	.Acolor{
		color:red
	}
</style>
