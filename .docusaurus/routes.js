import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kb/__docusaurus/debug',
    component: ComponentCreator('/kb/__docusaurus/debug', '71a'),
    exact: true
  },
  {
    path: '/kb/__docusaurus/debug/config',
    component: ComponentCreator('/kb/__docusaurus/debug/config', 'bda'),
    exact: true
  },
  {
    path: '/kb/__docusaurus/debug/content',
    component: ComponentCreator('/kb/__docusaurus/debug/content', 'a64'),
    exact: true
  },
  {
    path: '/kb/__docusaurus/debug/globalData',
    component: ComponentCreator('/kb/__docusaurus/debug/globalData', '5dc'),
    exact: true
  },
  {
    path: '/kb/__docusaurus/debug/metadata',
    component: ComponentCreator('/kb/__docusaurus/debug/metadata', '368'),
    exact: true
  },
  {
    path: '/kb/__docusaurus/debug/registry',
    component: ComponentCreator('/kb/__docusaurus/debug/registry', 'a76'),
    exact: true
  },
  {
    path: '/kb/__docusaurus/debug/routes',
    component: ComponentCreator('/kb/__docusaurus/debug/routes', '626'),
    exact: true
  },
  {
    path: '/kb/blog',
    component: ComponentCreator('/kb/blog', '266'),
    exact: true
  },
  {
    path: '/kb/blog/archive',
    component: ComponentCreator('/kb/blog/archive', '97b'),
    exact: true
  },
  {
    path: '/kb/blog/first-blog-post',
    component: ComponentCreator('/kb/blog/first-blog-post', '8f9'),
    exact: true
  },
  {
    path: '/kb/blog/long-blog-post',
    component: ComponentCreator('/kb/blog/long-blog-post', 'd64'),
    exact: true
  },
  {
    path: '/kb/blog/mdx-blog-post',
    component: ComponentCreator('/kb/blog/mdx-blog-post', '885'),
    exact: true
  },
  {
    path: '/kb/blog/tags',
    component: ComponentCreator('/kb/blog/tags', '1fe'),
    exact: true
  },
  {
    path: '/kb/blog/tags/docusaurus',
    component: ComponentCreator('/kb/blog/tags/docusaurus', 'f50'),
    exact: true
  },
  {
    path: '/kb/blog/tags/facebook',
    component: ComponentCreator('/kb/blog/tags/facebook', '291'),
    exact: true
  },
  {
    path: '/kb/blog/tags/hello',
    component: ComponentCreator('/kb/blog/tags/hello', '574'),
    exact: true
  },
  {
    path: '/kb/blog/tags/hola',
    component: ComponentCreator('/kb/blog/tags/hola', '24c'),
    exact: true
  },
  {
    path: '/kb/blog/welcome',
    component: ComponentCreator('/kb/blog/welcome', '00c'),
    exact: true
  },
  {
    path: '/kb/markdown-page',
    component: ComponentCreator('/kb/markdown-page', 'fba'),
    exact: true
  },
  {
    path: '/kb/docs',
    component: ComponentCreator('/kb/docs', '305'),
    routes: [
      {
        path: '/kb/docs/category/self-supervision',
        component: ComponentCreator('/kb/docs/category/self-supervision', 'c7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/category/tutorial---basics',
        component: ComponentCreator('/kb/docs/category/tutorial---basics', '24c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/category/tutorial---extras',
        component: ComponentCreator('/kb/docs/category/tutorial---extras', '1b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/category/vision-transformers',
        component: ComponentCreator('/kb/docs/category/vision-transformers', '96f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/intro',
        component: ComponentCreator('/kb/docs/intro', 'f5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/self-supervision/maes',
        component: ComponentCreator('/kb/docs/self-supervision/maes', '300'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-basics/congratulations',
        component: ComponentCreator('/kb/docs/temp/tutorial-basics/congratulations', '815'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/kb/docs/temp/tutorial-basics/create-a-blog-post', '27a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-basics/create-a-document',
        component: ComponentCreator('/kb/docs/temp/tutorial-basics/create-a-document', '244'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-basics/create-a-page',
        component: ComponentCreator('/kb/docs/temp/tutorial-basics/create-a-page', '693'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/kb/docs/temp/tutorial-basics/deploy-your-site', '07f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-basics/markdown-features',
        component: ComponentCreator('/kb/docs/temp/tutorial-basics/markdown-features', 'd4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/kb/docs/temp/tutorial-extras/manage-docs-versions', '3d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/temp/tutorial-extras/translate-your-site',
        component: ComponentCreator('/kb/docs/temp/tutorial-extras/translate-your-site', '761'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/vision-transformers',
        component: ComponentCreator('/kb/docs/vision-transformers', 'f64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/vision-transformers/maes',
        component: ComponentCreator('/kb/docs/vision-transformers/maes', '6e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/kb/',
    component: ComponentCreator('/kb/', 'c4f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
