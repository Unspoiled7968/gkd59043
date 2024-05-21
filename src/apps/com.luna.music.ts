import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 1,
      name: '汽水音乐看广告结束自动关闭',
      desc: '点击领取成功',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="领取成功，关闭，按钮"]',
        },
      ],
    },
    {
      key: 2,
      name: '汽水音乐看广告结束自动关闭领取奖励',
      desc: '点击领取奖励',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="领取奖励"]',
        },
      ],
    },
    {
      key: 3,
      name: '汽水音乐解锁第N天 畅听',
      desc: '点击立即解锁',
      rules: [
        {
          quickFind: true,        
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text~="立即解锁 第.*天畅听"]',
        },
      ],
    },
  ],
});
