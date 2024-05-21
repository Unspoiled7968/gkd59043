import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '名下其他账号花呗恢复使用X',
      desc: '点击X',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches: '@View + [text="你名下其他账号的花呗暂时无法使用，完成确认可恢复使用"]',
        },
      ],
    },
  ],
});


