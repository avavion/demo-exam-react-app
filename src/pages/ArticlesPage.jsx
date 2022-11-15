import React from 'react'
import Article from '../components/Article/Article';
import ArticleService from '../services/ArticleService';

const HomePage = () => {
    const [articles, setArticles] = React.useState([]);

    const fetchArticles = React.useCallback(async () => {
        const response = await ArticleService.getArticles();

        if (!response.ok) {
            throw new Error('Ошибка запроса...');
        }

        const { data } = await response.json();

        setArticles(data)
    }, []);

    React.useEffect(() => {
        fetchArticles();
    }, [fetchArticles])

    return (
        <React.Fragment>
            {articles.map((article) => <Article key={article.id} article={article} />)}
        </React.Fragment>
    )
}

export default HomePage