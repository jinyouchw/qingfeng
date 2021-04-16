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

</style>
