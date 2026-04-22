import './HeroCard.css'

function HeroCard({ article }) {
    const sources = article.sources || [article.source]

    return (
        <div className="hc-wrap">
            <div className="hc-image-wrap">
                {article.image
                    ? <img
                        src={article.image}
                        alt={article.headline}
                        className="hc-image"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                    : <div className="hc-image-fallback" />
                }
                <span className={`hc-badge ${article.categoryClass || 'cat-general'}`}>
                    {article.category}
                </span>
            </div>

            <div className="hc-body">
                <div className="hc-sources-row">
                    {sources.slice(0, 4).map((s, i) => (
                        <span key={i} className="hc-source-tag">{s}</span>
                    ))}
                    {sources.length > 4 && (
                        <span className="hc-source-more">+{sources.length - 4} more</span>
                    )}
                </div>

                <h2 className="hc-headline">{article.headline}</h2>
                <p className="hc-summary">{article.summary}</p>

                <div className="hc-footer">
                    <div className={`hc-status ${article.statusClass || 's-rumor'}`}>
                        <span className="hc-status-dot" />
                        {article.status}
                    </div>
                    <div className="hc-meta">
                        <span className="hc-time">
                            {article.time || new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                        <button
                            className="hc-btn"
                            onClick={() => article.url && window.open(article.url, '_blank', 'noreferrer')}
                        >
                            Read full story →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard