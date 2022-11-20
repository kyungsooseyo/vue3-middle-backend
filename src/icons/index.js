//1. 导入所有的svg图标
//2. 完成svgIcon组件的注册
//3. 将svgIcon组件导出
import SvgIcon from "@/components/SvgIcon/index.vue";
const svgRequire = require.context('./svg', false, /\.svg$/)
// 返回了一个require函数，可以接受一个request参数
// 该函数提供了三个属性
console.log('svg',svgRequire.keys());
svgRequire.keys().forEach((item => {
  svgRequire(item)
}))
export default app => {
  app.component('svg-icon', SvgIcon)
}
