import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 1,
      name: '汽水音乐看广告领取vip',
      desc: '多',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="领取成功，关闭，按钮"]',
        },
        {
          quickFind: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="领取奖励"]',
        },
        {
          quickFind: true,        
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text~="立即解锁 第.*天畅听"]',
        },
      ],
    },
  ],
});
