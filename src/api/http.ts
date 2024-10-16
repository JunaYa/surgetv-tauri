import type { AxiosInstance, RawAxiosRequestHeaders } from 'axios'
import axios from 'axios'
import { getToken, removeToken } from '~/utils/auth'

const instance: AxiosInstance = axios.create({ 
  baseURL: '/api',
  timeout: 600000, // request timeout
  withCredentials: true,
})

instance.interceptors.request.use(
  (config: any) => {
    const customHeader: { [key: string]: string } = {}
    // if (config.headers)
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // customHeader = handleCustomHeaders(config.headers)

    const headers: RawAxiosRequestHeaders = {}
    const tokenInfo = getToken()
    if (tokenInfo && tokenInfo.token) {
      headers.Authorization = `Bearer ${tokenInfo.token}`
    }

    return {
      ...config,
      headers: {
        ...headers,
        ...customHeader,
      },
    }
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  v => {
    if (v.status === 403) return v.data
    if (v.status >= 200 && v.status < 300) return v.data

    return Promise.reject(v)
  },
  err => {
    if (err.response.status === 401) {
      removeToken()
      return null
    }
    if (err.response.status === 403) {
      return err.response.data
    }
    return err.response.data
  },
)

export default instance
