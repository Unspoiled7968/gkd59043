import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.esun.ui',
  name: '500彩票',
  groups: [
    {
      key: 1,
      name: '500彩票关闭广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.esun.mainact.home.main.HomeMainActivityV413',
          matches: {
            '[text="关闭"]',
            '[id="com.esun.ui:id/dialog_close_view"]',
          },
        },
      ],
    },
  ],
});
