import './SearchResults.css'

function highlight(text, query) {
    if (!query || !text) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.split(regex).map((part, i) =>
        regex.test(part)
            ? <mark key={i} className="sr-highlight">{part}</mark>
            : part
    )
}

function SearchResults({ articles, query }) {
    if (!query) {
        return (
            <div className="sr-empty">
                <div className="sr-empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                </div>
                <p className="sr-empty-title">Search for anything</p>
                <p className="sr-empty-sub">Try a headline, topic, or source — like "gold prices" or "Barcelona"</p>
                <div className="sr-suggestions">
                    {['Gold prices', 'Barcelona', 'Drake', 'US economy', 'Climate'].map((s) => (
                        <span key={s} className="sr-suggestion">{s}</span>
                    ))}
                </div>
            </div>
        )
    }

    if (articles.length === 0) {
        return (
            <div className="sr-empty">
                <div className="sr-empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                </div>
                <p className="sr-empty-title">No results for "{query}"</p>
                <p className="sr-empty-sub">Try different keywords or remove some filters</p>
            </div>
        )
    }

    return (
        <div>
            <p className="sr-count">
                {articles.length} result{articles.length !== 1 ? 's' : ''} for "{query}"
            </p>
            <div className="sr-grid">
                {articles.map((article, i) => (
                    <div
                        key={article._id || i}
                        className="sr-card"
                        onClick={() => article.url && window.open(article.url, '_blank', 'noreferrer')}
                        style={{ cursor: article.url ? 'pointer' : 'default' }}
                    >
                        <div className="sr-card-img">
                            {article.image
                                ? <img
                                    src={article.image}
                                    alt={article.headline}
                                    className="sr-img"
                                    onError={(e) => e.target.style.display = 'none'}
                                  />
                                : <div className="sr-img-fallback" />
                            }
                            <span className={`sr-badge ${article.categoryClass || 'cat-general'}`}>
                                {article.category}
                            </span>
                        </div>
                        <div className="sr-card-body">
                            <div className="sr-meta">
                                <span className="sr-source">{article.source}</span>
                                <span className="sr-dot" />
                                <span className="sr-time">
                                    {article.time || new Date(article.publishedAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="sr-headline">{highlight(article.headline, query)}</p>
                            <p className="sr-summary">{highlight(article.summary, query)}</p>
                            <div className="sr-footer">
                                <div className={`sr-status ${article.statusClass || 's-rumor'}`}>
                                    <span className="sr-status-dot" />
                                    {article.status}
                                </div>
                                <span className="sr-read">Read article →</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults