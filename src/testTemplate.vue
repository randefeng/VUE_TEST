<template>
<div>
	<div id="MainContent">
		<div class="page-content">
			<!--<h1>PhotoSwipe</h1>-->
		</div>
		<ul id="Gallery" class="gallery">
				<li><a href="/static/fenlei_1.png"><img src="/static/fenlei_1.png" alt="Image 001" /></a></li>
		</ul>
	</div>
</div>

</template>

<script>


export default {

  mounted (){
    var options = {	};
			var myPhotoSwipe = $("#Gallery a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });  
  }
}
</script>

<style scoped>

</style>