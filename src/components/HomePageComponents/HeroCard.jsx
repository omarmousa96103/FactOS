import './HeroCard.css'

function HeroCard({ article }) {
    return (
        <div className="hc-wrap">
            <div className="hc-image-placeholder">
                <span className={`hc-badge ${article.categoryClass}`}>{article.category}</span>
            </div>
            <div className="hc-body">
                <div className="hc-meta">
                    <span className="hc-source">{article.source}</span>
                    <span className="hc-dot" />
                    <span className="hc-time">{article.time}</span>
                </div>
                <h2 className="hc-headline">{article.headline}</h2>
                <p className="hc-summary">{article.summary}</p>
                <div className="hc-footer">
                    <div className={`hc-status ${article.statusClass}`}>
                        <span className="hc-status-dot" />
                        {article.status}
                    </div>
                    <button className="hc-btn">Read full story →</button>
                </div>
            </div>
        </div>
    )
}

export default HeroCard