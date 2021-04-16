<template>
    <a-dropdown>
      <span class="ant-dropdown-link" @click.prevent>
        {{lang}}
        <DownOutlined />
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="item in langList" :key="item.key" @click="changLang(item.name)">
            <span>{{item.name}}</span>
          </a-menu-item>
        </a-menu>
        </template>
    </a-dropdown>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import {  DownOutlined } from '@ant-design/icons-vue';
/* eslint-disable */ 

export default defineComponent({
  name:"language",
  components: {  DownOutlined },
  setup() {
		let lang = ref("中文")
    const langList = reactive([
      {name:"中文", key:"cn"},
      {name:"日文", key:"ja"},
    ]) 
		const changLang = (item:any) => {
      lang = item
		  console.log('item', item, lang)
		}
    return { langList, lang, changLang}
  }
})
</script>
