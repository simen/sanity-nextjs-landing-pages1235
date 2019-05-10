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
                  buildHookId: '5cd584f56c059c85bc7d4828',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages1235-studio',
                  apiId: 'ed914695-d850-4a8d-9242-ee225ff0ec7c'
                },
                {
                  buildHookId: '5cd584f5374bf595b1df2f6f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages1235',
                  apiId: 'dc7ce819-a485-4183-bfa3-1ee8b170ae29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pages1235',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages1235.netlify.com', category: 'apps'}
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
