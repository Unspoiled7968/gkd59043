import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdcloud.mt.smartrouter',
  name: '京东云无限宝',
  groups: [
    {
      key: 5,
      name: '激励广告领金豆',
      desc: '多',
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
            '.newapp.activity.MainActivity',
            'com.qq.e.ads.PortraitADActivity',
          ],
          matches: '[text="点击广告拿奖励"]',

        },
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
            'com.qq.e.ads.PortraitADActivity',
            '.newapp.activity.MainActivity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
          matches: 'ImageView[vid="iv_bean"] +4 [text="继续赚京豆"]',

        },
      ],
    },
  ],
});
