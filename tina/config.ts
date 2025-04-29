import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.GIT_BRANCH || 'main',
  clientId: '', // Get this from https://app.tina.io if using Tina Cloud
  token: '',    // Get this from https://app.tina.io if using Tina Cloud
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog',
        path: 'src/content/blog',
        fields: [
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'datetime', name: 'date', label: 'Date' },
          { type: 'boolean', name: 'draft', label: 'Draft' },
          { type: 'rich-text', name: 'body', label: 'Body' },
        ],
      },
      {
        name: 'pages',
        label: 'Pages',
        path: 'src/content/pages',
        match: {
          include: 'about',
        },
        fields: [
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'rich-text', name: 'body', label: 'Body' },
        ],
      },
      {
        name: 'nav',
        label: 'Navigation',
        path: 'src/content/nav.yaml',
        format: 'yaml',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Navigation Links',
            list: true,
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'url', label: 'URL' },
            ],
          },
        ],
      },
    ],
  },
});
