<template>
  <div class="w-full">
    <h3
      v-if="articles.length < 0"
      class="text-gray-600"
    >
      No posts yet, stay tuned!
    </h3>
    <div
      v-else
      class="flex flex-wrap justify-center"
    >
      <BlogCard
        v-for="article in articles"
        :id="article.id"
        :link="{ name: 'blog-post', params: { articleId: article.id }}"
        :key="article.id"
        class="my-5 md:mx-5"
        :title="article.title"
        :summary="article.description"
        :tags="article.tag_list"
        :image-url="article.social_image"
        :reaction-count="article.positive_reactions_count"
        :comment-count="article.comments_count"
      />
    </div>
  </div>
</template>

<script>
import blogService from "@/services/blogService";
import BlogCard from "@/components/blog/BlogCard";

export default {
  components: {
    BlogCard
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      await blogService.fetchArticles().then(response => {
        switch (response.status) {
          case 200: {
            this.articles = response.data;
            break;
          }
          default: {
            this.articles = false;
            break;
          }
        }
      });
    },
    openArticle(articleId) {
      this.$router.push("post/" + articleId);
    }
  }
};
</script>
