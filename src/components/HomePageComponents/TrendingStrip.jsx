import './TrendingStrip.css'
import { trendingHeadlines } from '../../pages/data/mockNews'

function TrendingStrip() {
    return (
        <div className="ts-wrap">
            <span className="ts-label">Trending</span>
            <div className="ts-track-wrap">
                <div className="ts-track">
                    {[...trendingHeadlines, ...trendingHeadlines].map((h, i) => (
                        <span key={i} className="ts-item">{h}<span className="ts-sep">·</span></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingStrip