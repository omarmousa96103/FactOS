import { useState, useEffect } from 'react'
import { api } from '../../api'
import './TrendingStrip.css'

function TrendingStrip() {
    const [headlines, setHeadlines] = useState([])

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const data = await api.getNews({ q: 'latest' })
                if (Array.isArray(data)) {
                    setHeadlines(data.slice(0, 8).map((a) => a.headline))
                }
            } catch (err) {
                console.error(err)
            }
        }
        fetchTrending()
    }, [])

    if (headlines.length === 0) return null

    const doubled = [...headlines, ...headlines]

    return (
        <div className="ts-wrap">
            <span className="ts-label">Trending</span>
            <div className="ts-track-wrap">
                <div className="ts-track">
                    {doubled.map((h, i) => (
                        <span key={i} className="ts-item">
                            {h}<span className="ts-sep">·</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingStrip