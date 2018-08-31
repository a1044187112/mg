<template>
	<div id="customize">
		<conditon-cus></conditon-cus>
		<footers></footers>
	</div>
</template>
<script>
	import conditonCus from './conditionCus'
	import footers from './footer.vue'
	export default{
		name:"customize",
		components:{conditonCus,footers}
	}
</script>
