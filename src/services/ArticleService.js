import HttpService from "./HttpService";

class ArticleService extends HttpService {
    static async getArticles() {
        const response = await this.get('/articles');

        return response;
    }

    static async getArticleById(id) {
        const response = await this.get(`/articles/${id}`);

        return response;
    }
}

export default ArticleService;