//, 存储数据
export const setItem = (key, value) => {
  //~ 1. 基本数据类型
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
//, 获取数据
export const getItem = (key) => {
  const value = localStorage.getItem(key)
  // = 无法判断这个是不是json格式的字符串，就直接转化 转不了就直接return
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}
//, 删除指定数据
export const removeItem = (key) => {
  localStorage.removeItem(key)
}
//, 删除所有数据
export const removeAllItem = () => {
  localStorage.clear()
}
