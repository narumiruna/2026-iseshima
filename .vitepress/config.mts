import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '伊勢志摩 2026 旅遊指南',
  description: '伊勢志摩 2026 美食研究與行程規劃網站',
  lang: 'zh-Hant',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '研究總覽', link: '/references/overview' },
      { text: '進度追蹤', link: '/PROGRESS' }
    ],
    sidebar: [
      {
        text: '快速導覽',
        items: [
          { text: '網站首頁', link: '/' },
          { text: 'README', link: '/README' },
          { text: 'PROGRESS', link: '/PROGRESS' }
        ]
      },
      {
        text: '伊勢市',
        items: [
          { text: 'Overview', link: '/gourmet/iseshi/overview' },
          { text: 'Top Places', link: '/gourmet/iseshi/top-places' },
          { text: 'Candidates', link: '/gourmet/iseshi/candidates' },
          { text: 'Notes', link: '/gourmet/iseshi/notes' },
          { text: 'Excluded', link: '/gourmet/iseshi/excluded' }
        ]
      },
      {
        text: '松阪市',
        items: [
          { text: 'Overview', link: '/gourmet/matsusakashi/overview' },
          { text: 'Top Places', link: '/gourmet/matsusakashi/top-places' },
          { text: 'Candidates', link: '/gourmet/matsusakashi/candidates' },
          { text: 'Notes', link: '/gourmet/matsusakashi/notes' },
          { text: 'Excluded', link: '/gourmet/matsusakashi/excluded' }
        ]
      },
      {
        text: '鳥羽市',
        items: [
          { text: 'Overview', link: '/gourmet/tobashi/overview' },
          { text: 'Top Places', link: '/gourmet/tobashi/top-places' },
          { text: 'Candidates', link: '/gourmet/tobashi/candidates' },
          { text: 'Notes', link: '/gourmet/tobashi/notes' },
          { text: 'Excluded', link: '/gourmet/tobashi/excluded' }
        ]
      },
      {
        text: '志摩市',
        items: [
          { text: 'Overview', link: '/gourmet/shimashi/overview' },
          { text: 'Top Places', link: '/gourmet/shimashi/top-places' },
          { text: 'Candidates', link: '/gourmet/shimashi/candidates' },
          { text: 'Notes', link: '/gourmet/shimashi/notes' },
          { text: 'Excluded', link: '/gourmet/shimashi/excluded' }
        ]
      },
      {
        text: '研究手冊（Manual）',
        items: [
          { text: 'Overview', link: '/references/overview' },
          { text: 'Repo Structure', link: '/references/repo-structure' },
          { text: 'Workflow', link: '/references/workflow' },
          { text: 'Evidence', link: '/references/evidence' },
          { text: 'Scoring & Decisions', link: '/references/scoring-and-decisions' },
          { text: 'Completion & Maintenance', link: '/references/completion-and-maintenance' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
