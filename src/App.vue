<template>
  <div id="app">
    <Spin class="app-spin" :spinning="spinning">
			<router-view></router-view>
    </Spin>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { mapState } from 'vuex'
import { Spin } from 'ant-design-vue';

export default defineComponent({
  name: 'Home',
  computed: mapState(['spinning']),
  components:{Spin},
  setup() {
    return {  }
  }
});
</script>

<style lang="scss">
#app {
	min-width: 1440px;
	font-family: PingFangSC-Medium;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: normal;
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	overflow-y: auto;
	overflow-x: hidden;
  .ant-spin-nested-loading{
    height: 100%;
    .ant-spin-container{
     height: 100%;
  }
  }
}
</style>
