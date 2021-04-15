<template>
  <div class="nav" flex ='dir:top'>
     <div class="nav-content"></div>
     <router-view style="flex:1"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'nav',
  components: { },
});
</script>
<style scoped lang='scss'>
$nav-height: 48px;
.nav{
  .nav-content{
      height: $nav-height;
      //box-shadow:0px 15px 10px -16px #999999;
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);
  }
}
</style>
