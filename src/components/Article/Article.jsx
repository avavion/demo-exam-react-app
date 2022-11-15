import formatDate from '../../utils/formatDate';
import { NavLink } from 'react-router-dom';

const Article = ({ article }) => {

    const { id, title, created_at, user, short_content, image_path } = article;

    return (
        <article className="post">
            <header>
                <div className="title">
                    <h2>
                        <NavLink to={`/articles/${id}`}>
                            {title}
                        </NavLink>
                    </h2>
                </div>
                <div className="meta">
                    <time className="published">{formatDate(created_at)}</time>
                    <span className="name">{user.name}</span>
                </div>
            </header>
            <NavLink to={`/articles/${id}`} className="image featured">
                <img src={image_path} alt={title} />
            </NavLink>
            <p>{short_content}</p>
            <footer>
                <ul className="actions">
                    <li>
                        <NavLink to={`/articles/${id}`} className={'button large'}>
                            Continue Reading
                        </NavLink>
                    </li>
                </ul>
                <ul className="stats">
                    <li><a href="#" style={{
                        color: '#a00'
                    }}>Remove</a></li>
                </ul>
            </footer>
        </article >
    )
}

export default Article;