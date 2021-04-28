<template>
    <a-dropdown>
      <span class="ant-dropdown-link" @click.prevent>
        {{lang==='cn'?'中文':'日本語'}}
        <DownOutlined />
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="item in langList" :key="item.key" @click="changLang(item.key)">
            <span>{{item.name}}</span>
          </a-menu-item>
        </a-menu>
        </template>
    </a-dropdown>
</template>
<script lang='ts'>
import { defineComponent, reactive, computed, getCurrentInstance  } from 'vue'
import {  DownOutlined } from '@ant-design/icons-vue';
import { useStore } from "vuex";
/* eslint-disable */ 
   
export default defineComponent({
  name:"language",
  components: {  DownOutlined },
  setup() { 
    const langList = reactive<Array<any>>([
      {name:"中文", key:"cn"},
      {name:"日本語", key:"ja"},
    ]) 
		const store = useStore()
		const lang = computed(() => {return store.state.language})
		const internalInstance:any  = getCurrentInstance() 
		const changLang = (item:string) => {
      store.commit('setLanguage', item)
			internalInstance.ctx.$i18n.locale = item
		}
    return { langList, changLang, lang }
  }
})
</script>
