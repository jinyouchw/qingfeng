<template>
  <div class="nav" flex ='dir:top'>
     <div class="nav-content" flex ='dir:left main:justify cross:center'>
        <div class="content-des"><span>{{ $t("message.appName") }}</span>{{ $t("message.slogan") }}</div>
        <a-space  flex ='dir:left'>
          <UserOutlined v-if="User.userInfo.name" />
          <span v-if="User.userInfo.name">{{User.userInfo.name}}</span>
          <Language />
          <span v-if="User.userInfo.name"  class="loginout" @click="loginOut">退出</span>
        </a-space>
     </div>
     <router-view style="flex:1"></router-view> 
  </div>
</template>

<script lang="ts">
import { defineComponent, createVNode, computed } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import  Language from './component/language.vue'
import { useStore } from "vuex";
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'nav',
  components: { UserOutlined, Language },
  setup() {
    const store = useStore()
    const router = useRouter()
    const User  = computed(() => {return store.state.User})
    const loginOut = () => {
      Modal.confirm({
        title: '是否确认退出',
        icon: createVNode(ExclamationCircleOutlined),
        content: '',
        okText:"确定",
        cancelText:"取消",
        onOk() {
          store.dispatch('getUserInfo', {name:"",auth:''})
          console.log('store',store)
          router.push('/login')
        },
      });
      
    }
    return{ loginOut, User }
  }
});
</script>
<style scoped lang='scss'>
$nav-height: 48px;
.nav{
    width: 100%;
    height: 100%;
  .nav-content{
    height: $nav-height;
    padding: 0 20px 0 10px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);
    .content-des{
        font-size: 18px;
        &>span:first-child{
            margin-right: 10px;
        }
    }
    .loginout{
      cursor: pointer;
    }
  }
}
</style>
