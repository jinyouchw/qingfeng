<template>
  <div class="home" flex ='dir:left '>
      <div class="plate" v-for="item in list" :key="item.key">
        {{item.name}}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getMoudleList } from './service'
  /* eslint-disable */
export default defineComponent({
  name: 'Home',
  components: { },
  setup() {
    const list = ref<Array<any>>([]);
    const getModleListInfo = async () => {
    await  getMoudleList({},{}).then( (res:any) => {
        list.value = res.data.moudleList
      })
    }
    onMounted(() => {
      getModleListInfo()
    })
    return { list }
  }
});

</script>
<style lang="scss" scoped>
.home{
    width: 100%;
    height: calc(100% - 48px);
    flex-wrap: wrap;
    .plate{
      position: relative;
      width: 373px;
      height: 232px;
      font-size: 18px;
      text-align: center;
      line-height: 232px;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      margin: 40px 0 0 40px;
      transition: all 0.3s ease-out;
      &:hover{
        font-size: 20px;
	      transform: scale(1.01);
        box-shadow: 0 12px 24px rgba(0,0,0,.08);
      }
    }
}
</style>
·