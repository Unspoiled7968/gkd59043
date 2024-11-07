import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdcloud.mt.smartrouter',
  name: '京东云无限宝',
  groups: [
    {
      key: 1,
      name: '激励广告领金豆',
      desc: '切换到wait页自动观看广告',
      rules: [
        {
          action: 'clickCenter',
          activityIds: [
            '.newapp.activity.MainActivity',
            'com.qq.e.ads.PortraitADActivity',
          ],
          matches: '[text="点击广告拿奖励"]',
        },
      ]
    },
    {
      key: 2,
      name: '激励广告领金豆',
      desc: '观看广告过程等待结束自动点击关闭',
      rules: [

        {
          action: 'clickCenter',
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
            '.newapp.activity.MainActivity',
          ],
          matches: '@ImageView <<(3) FrameLayout >(3) [text="恭喜获得奖励"]',
        },
        {
          action: 'clickCenter',
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
            '.newapp.activity.MainActivity',
          ],
          matches: '@FrameLayout - LinearLayout >2 [text="恭喜获得奖励"]',
        },
        {
          action: 'clickCenter',
          activityIds: [
            '.newapp.activity.MainActivity',
            'com.qq.e.ads.PortraitADActivity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
          matches: '@ImageView <<3 ViewGroup >2 [text="我要免看本次广告"]',

        },
        {
          action: 'clickCenter',
          activityIds: [
            '.newapp.activity.MainActivity',
            'com.qq.e.ads.PortraitADActivity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
          matches: '@ImageView <<3 ViewGroup[name="android.view.ViewGroup"] - ViewGroup >2 [text="免费获取"]',

        },
      ],
    },
    {
      key: 4,
      name: '激励广告领金豆',
      desc: '观看单个广告结束是否点击继续',
      rules: [
        {
          action: 'clickCenter',
          activityIds: [
            '.newapp.activity.MainActivity',
            'com.qq.e.ads.PortraitADActivity',
          ],
          matches: '[text="继续赚京豆"]',
        },
        {
          action: 'clickCenter',
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
            '.newapp.activity.MainActivity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
          matches: 'ImageView[vid="iv_bean"] +4 [text="继续赚京豆"]',
        },
      ]
    },
    {
      key: 5,
      name: '激励广告领金豆',
      desc: '全部观看结束 点击继续赚',
      rules: [
        {
          action: 'clickCenter',
          activityIds: [
            '.newapp.activity.MainActivity',
            'com.qq.e.ads.PortraitADActivity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
          matches: '@Button[text="明天继续赚呀！"] -2 TextView[text="今日观看奖励次数已用完"]',

        },
      ],
    },
  ],
});
