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
          action: 'clickCenter',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text*="领取成功"]',
        },
        {
          quickFind: true,
          action: 'clickCenter',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="领取奖励"]',
        },
        {
          quickFind: true,
          action: 'clickCenter',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text$="dd0s"]',
        },
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text~="立即解锁.*畅听"]',
        },
        {
          quickFind: true,
          action: 'clickCenter',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text~=".*解锁.*畅听"]',
        },
        {
          action: 'clickCenter',
          activityIds: 'com.luna.biz.main.main.MainActivity',
          matches: '[text~=".*解锁.*畅听"]',
        },
      ],
    },
  ],
});
