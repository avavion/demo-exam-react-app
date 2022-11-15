import React from 'react'
import formatDate from '../utils/formatDate';
import { useParams } from 'react-router-dom'
import ArticleService from '../services/ArticleService';

const ArticlePage = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = React.useState(true);
    const [article, setArticle] = React.useState({});

    const fetchArticle = React.useCallback(async () => {
        const response = await ArticleService.getArticleById(id);

        if (!response.ok) {
            throw new Error('Ошибка запроса...');
        }

        const { data } = await response.json();

        setArticle(data);

        return data;
    }, [id])

    React.useEffect(() => {
        fetchArticle().then(() => setIsLoading(false));

        return () => setArticle({});
    }, [fetchArticle])

    if (isLoading) {
        return (
            <h2>
                идет получение записи...
            </h2>
        )
    }

    return (
        <article className="post">
            <header>
                <div className="title">
                    <h2><a href="#">{article.title}</a></h2>
                </div>
                <div className="meta">
                    <time className="published">{formatDate(article.created_at)}</time>
                    <span className="name">{article.user.name}</span>
                </div>
            </header>
            <span className="image featured"><img src={article.image_path} alt={article.title} /></span>
            <p>{article.content}</p>
        </article>
    )
}

export default ArticlePage