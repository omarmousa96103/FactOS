import './NewsGrid.css'

function NewsCard({ article }) {
    return (
        <div className="nc-card">
            <div className="nc-img-placeholder">
                <span className={`nc-badge ${article.categoryClass}`}>{article.category}</span>
            </div>
            <div className="nc-body">
                <div className="nc-meta">
                    <span className="nc-source">{article.source}</span>
                    <span className="nc-dot" />
                    <span className="nc-time">{article.time}</span>
                </div>
                <p className="nc-headline">{article.headline}</p>
                <div className={`nc-status ${article.statusClass}`}>
                    <span className="nc-status-dot" />
                    {article.status}
                </div>
            </div>
        </div>
    )
}

function NewsGrid({ articles }) {
    return (
        <div className="ng-wrap">
            {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
            ))}
        </div>
    )
}

export default NewsGrid