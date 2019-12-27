<template>
  <div class="container flex flex-col items-center min-h-screen">
    <img
      :src="article.social_image"
      class="rounded w-full"
    >
    <h1 class="text-white text-3xl font-black mt-4">
      {{ article.title }}
    </h1>
    <div class="flex flex-row items-center">
      <div class="flex flex-col items-center">
        <div class="flex flex-row align-center items-center m-2">
          <font-awesome-icon
            icon="comments"
            size="md"
            color="white"
          />&nbsp;
          <p class="text-white font-black">
            {{ article.comments_count }}
          </p>

          <font-awesome-icon
            icon="heart"
            size="md"
            color="red"
          />&nbsp;
          <p class="text-white font-black">
            {{ article.positive_reactions_count }}
          </p>
        </div>
        <div class="flex flex-row justify-center">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
    <a
      class="text-gray-600 text-center mb-4"
      :href="article.url"
      target="_blank"
    >
      <font-awesome-icon icon="book-open" />&nbsp;Read on
      Dev.to
    </a>
    <div
      id="article-content"
      class="container article text-left"
      v-html="article.body_html"
    />
  </div>
</template>

<script>
import blogService from "@/services/blogService";

export default {
  data() {
    return {
      article: {}
    };
  },
  beforeMount() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      const articleId = this.$route.params.articleId;
      await blogService.fetchArticleById(articleId).then(response => {
        switch (response.status) {
          case 200: {
            this.article = response.data;
            break;
          }
          default: {
            this.article = false;
            break;
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.article {
  color: #fff;
}

.article >>> img {
  margin: 0 auto;
}

.article >>> h1 {
  font-size: 2.2rem;
  margin: 0.45em 0;
}

.article >>> h2 {
  font-size: 1.95rem;
  margin: 0.45em 0;
}

.article >>> h3 {
  font-size: 1.8rem;
  margin: 0.4em 0;
}

.article >>> p {
  font-size: 1.2rem;
  margin: 1, 2 0 1.8em;
}

.article >>> ul {
  margin: 1.2em;
}

.article >>> li {
  margin: 0.3em auto;
  list-style: square;
}

.article >>> a {
  color: #0d9cc0;
}

.article >>> pre {
  background: #29292e;
  box-shadow: inset 0 0 10px #29292e;
  border-radius: 20px;
  margin: 1em;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1em;
  font-size: 0.85rem;
}

.article >>> blockquote {
  padding: 2em;
}
</style>
