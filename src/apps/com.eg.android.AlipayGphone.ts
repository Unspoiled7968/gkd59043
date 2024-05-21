import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]规则名称-2024-05-21 12:49:27',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '@View + [text="你名下其他账号的花呗暂时无法使用，完成确认可恢复使用"]',
        },
      ],
    },
  ],
});
