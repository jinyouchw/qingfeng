<template>
  <div class="home" flex ='dir:left main:justify'>
      <div class="plate" v-for="item in list" :key="item.name">
          {{item.name}}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Home',
  components: { },
  setup() {
      const list: any = [
          {name:"手机", key:"phone"},
          {name:"生鲜", key:"phone"},
          {name:"家居", key:"phone"},
          {name:"零食", key:"phone"},
          {name:"笔记本", key:"phone"},
      ]

      return {list}
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
