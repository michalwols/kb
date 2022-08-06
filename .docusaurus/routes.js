import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4fb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '9ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd00'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '357'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b14'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '933'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '9ab'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'bf3'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '457'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'd77'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'a99'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '34b'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '074'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b84'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '118'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '5e2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e36'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e88'),
    routes: [
      {
        path: '/docs/category/self-supervision',
        component: ComponentCreator('/docs/category/self-supervision', '87a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/vision-transformers',
        component: ComponentCreator('/docs/category/vision-transformers', '3b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/self-supervision/maes',
        component: ComponentCreator('/docs/self-supervision/maes', '2fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/temp/tutorial-basics/congratulations', '9c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/temp/tutorial-basics/create-a-blog-post', '075'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/temp/tutorial-basics/create-a-document', 'c34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/temp/tutorial-basics/create-a-page', 'b36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/temp/tutorial-basics/deploy-your-site', '4a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/temp/tutorial-basics/markdown-features', '810'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/temp/tutorial-extras/manage-docs-versions', '85f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/temp/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/temp/tutorial-extras/translate-your-site', '1c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vision-transformers',
        component: ComponentCreator('/docs/vision-transformers', 'ee8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vision-transformers/maes',
        component: ComponentCreator('/docs/vision-transformers/maes', '570'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dd7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
