import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant/index';
import { getItem, setItem } from '@/utils/storage';
// =获取时间戳
export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}
// =设置时间戳
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now())
}
// =是否超时
export const isTimeout = () => {
  //当前时间
  const currentTime = Date.now()
  // 缓存时间
  const timeStamp = getTimeStamp()
  // 如果当前时间-缓存时间>过期时间
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
