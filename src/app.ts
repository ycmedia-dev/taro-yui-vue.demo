import Taro, { getCurrentInstance } from '@tarojs/taro'
import { createApp, nextTick } from 'vue'
import './app.scss'
import { uploadKey } from 'taro-yui-vue/src/components/upload/token'
const app = createApp({
  onShow() { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
app.directive('reSize', {
  mounted(el) {
    if(Taro.getEnv() !== Taro.ENV_TYPE.WEB){
      return
    }
    setTimeout(() => {
      nextTick(() => {
        console.log()
        window.parent.postMessage(JSON.stringify({
          path:(getCurrentInstance().router?.onShow||'').replace('.onShow',''),
          height: el.offsetHeight
        }), "*")
      })
    }, 1000)
  }
})
app.provide(uploadKey,{
  getSignatureUrl: "https://yy.bcadx.com/upload/get_signature",
  bucket: 'yyres-bcadx-com',
  operator: 'lmm2019',
  domain:'yyres.bcadx.com'
})
export default app
