import { useMemberStore } from '@/stores'

/**
 * 添加拦截器
 * 拦截request、uploadFile请求
 *
 * TODO：
 * 非http开头需拼接地址
 * 请求超时
 * 添加小程序端请求头标识
 * 添加token请求头
 */
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 非http开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时
    options.timeout = 10000
    // 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token请求头
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @returns Promise
 * 1. 返回promise对象
 * 2. 请求成功
 *   提取核心数据res.data
 *   添加类型，支持泛型
 * 3. 请求失败
 *   网络错误，提示换网络
 *   401，清理用户信息，跳转登录页
 *   其他错误，根据后端错误信息提示
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
            icon: 'none',
          })
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}
