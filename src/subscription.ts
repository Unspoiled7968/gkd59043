import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 59043,
  name: 'gkd59043-Subscription',
  version: 1.0,
  author: 'Unspoiled7968',
  checkUpdateUrl: './gkd59043.version.json5',
  supportUri: 'https://github.com/Unspoiled7968/gkd59043',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
