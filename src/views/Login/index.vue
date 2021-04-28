<template>
 <div class="login">
  <a-form
    ref="formRef"
    class="login-content"
    :model="formState"
    @finish="handleFinish"
     :rules="rules"
    @finishFailed="handleFinishFailed"
  >
   <p class="content-des">欢迎登录</p>
    <a-form-item name="user">
      <a-input v-model:value="formState.user" placeholder="手机号" >
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item name="password">
      <a-input v-model:value="formState.password" type="password" placeholder="密码">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item >
      <a-button type="primary" style="width:100%" @click="onSubmit"> 登录 </a-button>
    </a-form-item>
  </a-form>
 </div>
  
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const rules = {
      user: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
      ],
    };
    const store = useStore()
    const router = useRouter()
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(async() => {
          console.log('values', formState, store);
         await store.dispatch('getUserInfo', {name:"小黄",auth:'all'})
          router.push({name:'home'}) 
        })
        .catch((error: ValidateErrorEntity<FormState>) => {
          console.log('error', error);
        });
    };
    return {
      formRef,
      formState,
      rules,
      onSubmit,
    };
  },
});
</script>
<style scoped lang="scss">
.login{
   background-color: #f5f5f5;
   .login-content{
       width: 420px;
       padding: 80px 40px 100px 40px;
       margin: auto;
       margin-top: 120px;
       background: #ffffff;
       box-shadow: 0 12px 24px 0 #999999;
       border-radius: 10px;
       .content-des{
           font-size: 20px;
           font-weight: 700;
       }
   }
}
</style>