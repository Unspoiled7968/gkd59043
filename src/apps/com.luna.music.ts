import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 1,
      name: '汽水音乐看30s广告结束自动点击',
      desc: '多',
      rules: [
        {
          quickFind: true,
          action: 'clickCenter',
          excludeActivityIds: [],
          forcedTime: 35000,
          activityIds: [
            'com.luna.biz.main.main.MainActivity',
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
            'com.luna.biz.ad.AdActivity',
          ],
          matches: '[text*="领取成功"]',
        },
        {
          quickFind: true,
          action: 'clickCenter',
          activityIds: [
            'com.luna.biz.main.main.MainActivity',
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
            'com.luna.biz.ad.AdActivity',
          ],
          matches: '[text="领取奖励"]',
        },
        {
          action: 'clickCenter',
          activityIds: [
            'com.luna.biz.main.main.MainActivity',
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
            'com.luna.biz.ad.AdActivity',
          ],
          matches: '[text~=".*解锁.*畅听"]',
        },
      ],
    },
    {
      key: 5,
      name: '汽水音乐视频广告界面静音',
      desc: '多',
      rules: [
        {
          quickFind: true,
          action: 'clickCenter',
          activityIds: [
            'com.luna.biz.main.main.MainActivity',
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
            'com.luna.biz.ad.AdActivity',
          ],
          matches: '[text="开启声音"]',
        },
      ],
    },
  ],
});
