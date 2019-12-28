import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '@/views/home/HomeView';
import BlogView from '@/views/blog/BlogView';
import BlogHomeView from '@/views/blog/BlogHomeView';
import BlogPostView from '@/views/blog/BlogPostView';
import blogService from '@/services/blogService';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home',
    },
    {
      path: '/blog/',
      component: BlogView,
      name: 'blog',
      children: [
        {
          path: '/',
          component: BlogHomeView,
          name: 'blog-home',
        },
        {
          path: '/blog/post/:articleId/',
          component: BlogPostView,
          name: 'blog-post',
          async beforeEnter(to, from, next) {
            await blogService
              .fetchArticleById(to.params.articleId)
              .then(response => {
                switch (response.status) {
                  case 200: {
                    next();
                    break;
                  }
                  default: {
                    next('error');
                    break;
                  }
                }
              });
          },
        },
      ],
    },
  ],
});
