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
          <div class="m-2">
            <font-awesome-icon
              icon="comments"
              size="md"
              color="white"
            />&nbsp;
            <p class="text-white font-black">
              {{ article.comments_count }}
            </p>
          </div>

          <div class="m-2">
            <font-awesome-icon
              icon="heart"
              size="md"
              color="red"
            />&nbsp;
            <p class="text-white font-black">
              {{ article.positive_reactions_count }}
            </p>
          </div>
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
    <wc-markdown
      id="article-content"
      class="container article text-left"
      highlight
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
            const mdElement = document.getElementById('article-content');
            mdElement.value = this.article.body_markdown;
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
  margin: 1em;
}

.article >>> ul {
  margin: 1.2em;
}

.article >>> li {
  margin: 0.3em auto;
  list-style: square;
}

.article >>> blockquote {
  border-left: 10px solid #ccc;
  background: #29292e;
  quotes: "\201C""\201D""\2018""\2019";
}

.article >>> blockquote::before {
  color: #fff;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  vertical-align: -0.4em;
}

.article >>> blockquote:after {
  visibility: hidden;
  content: close-quote;
}

.article >>> blockquote p {
  display: inline;
}

.article >>> a {
  color: #0d9cc0;
}

.article >>> li {
  margin-left: 1em;
}

.article >>> code {
    background: #29292e;
    padding: 0.25em;
}

.article >>> pre {
  background: #29292e;
  box-shadow: inset 0 0 10px #29292e;
  border-radius: 20px;
  margin: 1em;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1em;
  font-size: 1rem;
}

.article >>> blockquote {
  padding: 2em;
}

.article >>> .ltag__replit iframe {
  width: 98%;
  margin: 1em;
}
</style>
