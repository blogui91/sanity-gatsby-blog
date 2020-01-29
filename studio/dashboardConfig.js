export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e31a79ea5c45a452ae3b207',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1fcq4s4k',
                  apiId: '8db6b4b4-c6a8-44ab-a724-9ffff6c0954f'
                },
                {
                  buildHookId: '5e31a79e15989a25fdc18d05',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nuq4cuv1',
                  apiId: '8838ea09-0675-4c30-9c1f-4ea469e5b08c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blogui91/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nuq4cuv1.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
