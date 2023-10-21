import { post, get } from '@/utils/request'

// 修改密码服务接口
export const ServeUpdatePassword = data => post('/api/v1/users/change/password', data)

// 修改手机号服务接口
export const ServeUpdateMobile = data => post('/api/v1/users/change/mobile', data)

// 修改手机号服务接口
export const ServeUpdateEmail = data => post('/api/v1/users/change/email', data)

// 修改个人信息服务接口
export const ServeUpdateUserDetail = data => post('/api/v1/users/change/detail', data)

// 查询用户信息服务接口
export const ServeGetUserDetail = () => get('/api/v1/users/detail')

// 获取用户相关设置信息
export const ServeGetUserSetting = () => get('/api/v1/users/setting')
