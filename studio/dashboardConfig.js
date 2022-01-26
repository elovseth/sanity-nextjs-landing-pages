export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f13e9293c413a6050e59a0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xcc6vwps',
                  apiId: 'a74d1dc6-f60b-4ca9-92d5-3cd6c4b4cd28'
                },
                {
                  buildHookId: '61f13e933241b5982c894a4f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z3362sgq',
                  apiId: '70e52f7c-49dc-465a-b4a4-e326b87d1f9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elovseth/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z3362sgq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
