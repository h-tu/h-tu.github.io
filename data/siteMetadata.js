/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Hongyu Tu',
  author: 'Hongyu Tu',
  headerTitle: 'Hongyu Tu',
  description:
    'Personal website of Hongyu Tu, Machine Learning Engineer and incoming Ph.D. student at Purdue University.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://h-tu.github.io',
  siteRepo: 'https://github.com/h-tu/h-tu.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.svg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'tu141@purdue.edu',
  github: 'https://github.com/h-tu',
  linkedin: 'https://www.linkedin.com/in/h-tu',
  instagram: 'https://www.instagram.com/lesssojupls.arw',
  scholar: 'https://scholar.google.com/citations?user=h1hRFa4AAAAJ',
  // 下面这些你目前没有提供或者不需要的社交链接我都注释/清空了，避免在网页上显示无用的图标
  // x: 'https://twitter.com/x',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  // threads: 'https://www.threads.net',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  // mastodon: 'https://mastodon.social/@mastodonuser',

  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,

  analytics: {
    // 默认帮你关闭了数据分析。如果以后需要用 Google Analytics 或 Umami，可以在这里配置
  },

  newsletter: {
    // 默认关闭了邮件订阅弹窗
    // provider: 'buttondown',
  },

  comments: {
    // 默认关闭了评论系统（你之前的配置中也没有启用 Disqus 短链接）
    // provider: 'giscus',
  },

  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
  //   },
  // },
}

module.exports = siteMetadata
