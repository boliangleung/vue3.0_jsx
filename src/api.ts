import request from '@yy/xh-request'

const actId = 'xxxx'

// 获取活动配置
export const getActConfig = () => {
  return request.get('/activities/activity/findById', {
    params: {
      activityId: actId
    }
  })
}
