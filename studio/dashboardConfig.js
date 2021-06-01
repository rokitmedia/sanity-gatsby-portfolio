export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60b5f7b42c611617ad0fb038',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cwc77u4y',
                  apiId: '85b18da4-c497-433e-b5ac-dc611fee52cf'
                },
                {
                  buildHookId: '60b5f7b34b24ef36d42cfb57',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pv7f5dgk',
                  apiId: 'dfb624e8-5100-4151-83ec-bb6b4af8d0f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rokitmedia/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pv7f5dgk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
