<template>
  <div class="home" flex ='dir:left main:justify'>
      <div class="plate" v-for="item in moudleList" :key="item.name">
          {{item.name}}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getMoudleList } from './service'
 
export default defineComponent({
  name: 'Home',
  components: { },
  setup() {
    const moudleList: any =  getMoudleList({},{})
    console.log('res',moudleList)
    return {moudleList }
  }
});

</script>
<style lang="scss" scoped>
.home{
    width: 100%;
    height: calc(100% - 48px);
    .plate{
      position: relative;
      width: 373px;
      height: 232px;
      background: rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      margin: 40px 0 0 40px;
      transition: all 0.3s ease-out;
    }
}
</style>
