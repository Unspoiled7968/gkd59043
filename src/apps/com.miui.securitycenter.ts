import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: 'hyperos手机管家',
  groups: [
    {
      key: 5,
      name: '手机管家拒绝京东云无限宝跳转',
      desc: '拒绝京东云无限宝跳转',
      rules: [
        {
          action: 'clickCenter',
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
          matches:
            '@* < LinearLayout - ScrollView >5 [text~="(?is)京东云无线宝 想要打开.*"]',
        },
      ],
    },
  ],
});
