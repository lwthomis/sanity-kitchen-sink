export default {
  widgets: [
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
                  buildHookId: '630cc744f80c1f3cec1406c6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-83gpka2k',
                  apiId: '0b986ab4-32ab-4a74-912e-2aa843272e66'
                },
                {
                  buildHookId: '630cc7442de66e4049e74fd6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wn8due3w',
                  apiId: '566448b8-e283-4c9c-bbdc-38735954ee89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lwthomis/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wn8due3w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
