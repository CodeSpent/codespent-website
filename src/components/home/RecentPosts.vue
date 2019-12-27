<template>
  <div class="mt-10">
    <div class="flex flex-col align-center">
      <h1 class="text-3xl font-black text-white">
        Recent Posts
      </h1>
      <a
        href="/blog"
        class="font-light text-gray-600 hover:text-white self-start"
      >View All</a>
    </div>
    <div class="flex flex-row overflow-scroll m-2">
      <h3
        v-if="articles.length < 1"
        class="text-gray-600"
      >
        No posts yet, stay tuned!
      </h3>
      <BlogCard
        v-for="article in articles"
        v-else
        :id="article.id"
        :key="article.id"
        class="mx-5"
        :title="article.title"
        :summary="article.description"
        :image-url="article.social_image"
        :tags="article.tag_list"
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
      articleLimit: 4,
      articles: []
    };
  },
  mounted() {
    this.fetchRecentArticles();
  },
  methods: {
    async fetchRecentArticles() {
      await blogService.fetchArticles().then(response => {
        this.articles = response.data.slice(0, this.articleLimit);
      });
    }
  }
};
</script>
