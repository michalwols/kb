import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/kb/search',
    component: ComponentCreator('/kb/search', '318'),
    exact: true
  },
  {
    path: '/kb/docs',
    component: ComponentCreator('/kb/docs', '786'),
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
        path: '/kb/docs/optimization',
        component: ComponentCreator('/kb/docs/optimization', '3a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/resources',
        component: ComponentCreator('/kb/docs/resources', '8ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/self-supervision/contrastive',
        component: ComponentCreator('/kb/docs/self-supervision/contrastive', '445'),
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
        path: '/kb/docs/todo/ann',
        component: ComponentCreator('/kb/docs/todo/ann', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/detection',
        component: ComponentCreator('/kb/docs/todo/detection', 'b40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/diffusion',
        component: ComponentCreator('/kb/docs/todo/diffusion', 'f0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/distill',
        component: ComponentCreator('/kb/docs/todo/distill', '35f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/few-shot',
        component: ComponentCreator('/kb/docs/todo/few-shot', 'cd9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/imitation-learning',
        component: ComponentCreator('/kb/docs/todo/imitation-learning', '46e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/label-noise',
        component: ComponentCreator('/kb/docs/todo/label-noise', 'c83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/long-tail',
        component: ComponentCreator('/kb/docs/todo/long-tail', '8b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/multi-label',
        component: ComponentCreator('/kb/docs/todo/multi-label', '060'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/multi-modal',
        component: ComponentCreator('/kb/docs/todo/multi-modal', '852'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/multi-task',
        component: ComponentCreator('/kb/docs/todo/multi-task', 'e2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/nerf',
        component: ComponentCreator('/kb/docs/todo/nerf', '755'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/ocr',
        component: ComponentCreator('/kb/docs/todo/ocr', '764'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/retrieval-augmented',
        component: ComponentCreator('/kb/docs/todo/retrieval-augmented', 'c69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/segmentation',
        component: ComponentCreator('/kb/docs/todo/segmentation', 'a26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/semisup',
        component: ComponentCreator('/kb/docs/todo/semisup', '0c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kb/docs/todo/synthetic-data',
        component: ComponentCreator('/kb/docs/todo/synthetic-data', '5cd'),
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
        path: '/kb/docs/vision-transformers/transformers',
        component: ComponentCreator('/kb/docs/vision-transformers/transformers', '8c5'),
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
