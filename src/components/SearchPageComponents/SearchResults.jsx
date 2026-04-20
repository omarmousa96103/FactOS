import './SearchResults.css'

function highlight(text, query) {
    if (!query) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.split(regex).map((part, i) =>
        regex.test(part)
            ? <mark key={i} className="sr-highlight">{part}</mark>
            : part
    )
}

function SearchResults({ articles, query }) {
    if (articles.length === 0) {
        return (
            <div className="sr-empty">
                <p className="sr-empty-title">No results{query ? ` for "${query}"` : ''}</p>
                <p className="sr-empty-sub">Try different keywords or remove some filters</p>
            </div>
        )
    }

    return (
        <div>
            <p className="sr-count">{articles.length} result{articles.length !== 1 ? 's' : ''}{query ? ` for "${query}"` : ''}</p>
            <div className="sr-grid">
                {articles.map((article) => (
                    <div key={article.id} className="sr-card">
                        <div className="sr-card-img">
                            <span className={`sr-badge ${article.categoryClass}`}>{article.category}</span>
                        </div>
                        <div className="sr-card-body">
                            <div className="sr-meta">
                                <span className="sr-source">{article.source}</span>
                                <span className="sr-dot" />
                                <span className="sr-time">{article.time}</span>
                            </div>
                            <p className="sr-headline">{highlight(article.headline, query)}</p>
                            <p className="sr-summary">{highlight(article.summary, query)}</p>
                            <div className={`sr-status ${article.statusClass}`}>
                                <span className="sr-status-dot" />
                                {article.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults