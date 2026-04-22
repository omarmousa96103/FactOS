import './NewsGrid.css'

function NewsCard({ article }) {
    const sources = article.sources || [article.source]

    const handleClick = () => {
        if (article.url) window.open(article.url, '_blank', 'noreferrer')
    }

    return (
        <div className="nc-card" onClick={handleClick}>
            <div className="nc-img-wrap">
                {article.image
                    ? <img src={article.image} alt={article.headline} className="nc-img" onError={(e) => e.target.style.display = 'none'} />
                    : <div className="nc-img-fallback" />
                }
                <span className={`nc-badge ${article.categoryClass || 'cat-general'}`}>{article.category}</span>
            </div>
            <div className="nc-body">
                <div className="nc-sources-row">
                    {sources.slice(0, 3).map((s, i) => (
                        <span key={i} className="nc-source-tag">{s}</span>
                    ))}
                    {sources.length > 3 && (
                        <span className="nc-source-more">+{sources.length - 3} more</span>
                    )}
                </div>
                <p className="nc-headline">{article.headline}</p>
                <div className="nc-footer">
                    <div className={`nc-status ${article.statusClass || 's-rumor'}`}>
                        <span className="nc-status-dot" />
                        {article.status}
                    </div>
                    <span className="nc-time">
                        {article.time || new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    )
}

function NewsGrid({ articles }) {
    return (
        <div className="ng-wrap">
            {articles.map((article, i) => (
                <NewsCard key={article._id || i} article={article} />
            ))}
        </div>
    )
}

export default NewsGrid