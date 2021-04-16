import { createI18n } from 'vue-i18n'
import messages from './message'


const i18n = createI18n({
    locale: 'cn', // 设置地区
    messages, // 设置地区信息
})

export default i18n