import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.to/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async fetchArticles() {
    try {
      return await api.get(`articles/?username=codespent`);
    } catch (e) {
      console.log(e.response);
      return e.response;
    }
  },
  async fetchArticleById(articleId) {
    try {
      return await api.get(`articles/${articleId}`);
    } catch (e) {
      return e.response;
    }
  },
};
