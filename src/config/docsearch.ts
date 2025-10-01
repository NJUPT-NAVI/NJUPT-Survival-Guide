import type { DocSearchClientOptions } from '@astrojs/starlight-docsearch';

export default {
  appId: 'INP420CW5B',
  apiKey: 'c4632fb71dffedfe2c86bb4692e9f80e',
  indexName: '南邮手册vercal',
  getMissingResultsUrl({ query }) {
    return `https://github.com/algolia/docsearch/issues/new?title=${query}`;
  },
  // maxResultsPerGroup: 5
  // disableUserPersonalization: false
  // insights: false
} satisfies DocSearchClientOptions;