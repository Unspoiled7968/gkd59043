import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '名下其他账号花呗恢复使用X',
      rules: {
        matches:
          '* + [text="你名下其他账号的花呗暂时法使用，完成确认可恢复使用"]',
      },
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      ],
      matchDelay: 500,
      matchTime: 5000,
    },
  ],
});
