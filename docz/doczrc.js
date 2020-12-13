export default {
  title: 'Parts.js Documents',
  base: '/partsjs-docs/',
  menu: [
    'Parts.js Documents',
    'Introduction',
    {
      name: 'Functions',
      menu: [
        {
          name: 'common namespace',
          menu: [
            'functionA',
            'functionB',
          ],
        },
        {
          name: 'platform namespace',
          menu: [
            'functionC',
            'functionD',
          ],
        },
        {
          name: 'type namespace',
          menu: [
            'functionE',
            'functionF',
          ],
        },
        {
          name: 'test namespace',
          menu: [
            'functionG',
            'functionH',
          ],
        }
      ]
    }
  ],
  files: '**/source/**/*.{md,markdown,mdx}'
}
