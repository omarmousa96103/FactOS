import { useEffect, useState } from 'react'
import './Information.css'
import { useNavigate } from 'react-router-dom'

const slides = [
    'Get the latest news from different sources worldwide',
    'Regional or local news tailored to your area',
    'Fact-check rumors and get accurate information instantly',
    'Sports, Economy and Celebrities news all in one place!',
]

const news = [
    {
        category: 'Sport',
        categoryClass: 'cat-sport',
        headline: 'Barcelona FC leads group after win over Inter (3–2)',
        status: 'Confirmed',
        statusClass: 's-confirmed',
        sources: 'Bein Sports · Sky Sports 433',
    },
    {
        category: 'World',
        categoryClass: 'cat-world',
        headline: 'Lebanon wins the FibaWc',
        status: 'Not confirmed',
        statusClass: 's-false',
        sources: 'Most likely false',
    },
    {
        category: 'Celebrity',
        categoryClass: 'cat-celeb',
        headline: 'Drake is planning on dropping his new album',
        status: 'Rumored',
        statusClass: 's-rumor',
        sources: 'Not completely verified',
    },
    {
        category: 'Economy',
        categoryClass: 'cat-econ',
        headline: 'Gold is expected to make a huge increase by 2%',
        status: 'Confirmed',
        statusClass: 's-confirmed',
        sources: 'Multiple trusted sources',
    },
]

function Information() {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="info-wrap">
            <div className="info-tagline-box">
                {slides.map((s, i) => (
                    <p key={i} className={`info-tagline ${i === index ? 'active' : ''}`}>{s}</p>
                ))}
            </div>

            <div className="info-dots">
                {slides.map((_, i) => (
                    <span key={i} className={`info-dot ${i === index ? 'active' : ''}`} />
                ))}
            </div>

            <div className="info-card">
                <table className="info-table">
                    <thead>
                        <tr>
                            <th>Headline</th>
                            <th>Verification status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <span className={`info-badge ${item.categoryClass}`}>{item.category}</span>
                                    <p className="info-headline">{item.headline}</p>
                                </td>
                                <td>
                                    <div className={`info-status ${item.statusClass}`}>
                                        <span className="info-dot-status" />
                                        {item.status}
                                    </div>
                                    <p className="info-sources">{item.sources}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="info-cta">
                <p className="info-cta-text">Get your fact-checked news</p>
                <button className="info-cta-btn" onClick={() => navigate('/login')}>
                    Get Started →
                </button>
            </div>
        </div>
    )
}

export default Information