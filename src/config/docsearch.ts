import type { DocSearchClientOptions } from '@astrojs/starlight-docsearch';

export default {
  appId: 'A52L3ZTDEC',
  apiKey: '3d30e0821df3f2e8a35dc8d3f7ec965e',
  indexName: '南京邮电大学生存手册',
  getMissingResultsUrl({ query }) {
    return `https://github.com/algolia/docsearch/issues/new?title=${query}`;
  },
  // maxResultsPerGroup: 5
  // disableUserPersonalization: false
  // insights: false
} satisfies DocSearchClientOptions;