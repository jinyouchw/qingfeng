<template>
  <div class="nav" flex ='dir:top'>
     <div class="nav-content" flex ='dir:left main:justify cross:center'>
        <div class="content-des"><span>{{ $t("message.appName") }}</span>{{ $t("message.slogan") }}</div>
        <a-space  flex ='dir:left'>
          <UserOutlined />
          <span>{{User.userInfo.name}}</span>
          <Language />
        </a-space>
     </div>
     <router-view style="flex:1"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import { mapState, mapActions  } from 'vuex'
import  Language from './component/language.vue'

export default defineComponent({
  name: 'nav',
  computed: mapState([ 'User']),
  components: { UserOutlined, Language },
  methods:{
      ...mapActions(['getUserInfo'])
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
  }
}
</style>
