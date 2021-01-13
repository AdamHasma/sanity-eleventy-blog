export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fff2f222430bb0cbffd4eb0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-i8qko1v8',
                  apiId: '807c8d51-7354-41d4-865d-2a63dcb811f8'
                },
                {
                  buildHookId: '5fff2f22a9903f0c6ea386c4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1ki74dr4',
                  apiId: '76618f71-4f96-4f03-95ff-7eae7cdbaa62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AdamHasma/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1ki74dr4.netlify.app', category: 'apps'}
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
