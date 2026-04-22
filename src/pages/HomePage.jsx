import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import CategoryTabs from '../components/HomePageComponents/CategoryTab'
import TrendingStrip from '../components/HomePageComponents/TrendingStrip'
import Sidebar from '../components/HomePageComponents/Sidebar'
import HeroCard from '../components/HomePageComponents/HeroCard'
import NewsGrid from '../components/HomePageComponents/NewsGrid'
import { api } from '../api'
import './HomePage.css'

const categoryMap = {
    'Breaking News': 'breaking',
    'Popular News':  'popular',
    'Regional News': 'regional',
    'Local News':    'local',
}

function HomePage() {
    const [allNews, setAllNews]   = useState([])  // raw from API
    const [news, setNews]         = useState([])  // filtered display
    const [loading, setLoading]   = useState(true)
    const [error, setError]       = useState('')
    const [category, setCategory] = useState('Breaking News')
    const [sidebar, setSidebar]   = useState({})

    // only fetch from API when tab changes
    useEffect(() => {
        fetchNews()
    }, [category])

    // apply sidebar filters locally whenever sidebar or allNews changes
    useEffect(() => {
        applyFilters(allNews, sidebar)
    }, [sidebar, allNews])

    const fetchNews = async () => {
        setLoading(true)
        setError('')
        try {
            const data = await api.getNews({ q: categoryMap[category] || 'latest' })
            if (Array.isArray(data)) {
                setAllNews(data)
                applyFilters(data, sidebar)
            } else {
                setError('Failed to load news')
            }
        } catch (err) {
            setError('Failed to load news')
        } finally {
            setLoading(false)
        }
    }

    const applyFilters = (articles, filters) => {
        let filtered = [...articles]
        const now = new Date()

        // type filter
        if (filters['Type']?.length) {
            filtered = filtered.filter((a) =>
                filters['Type'].includes(a.category)
            )
        }

        // verification status filter
        if (filters['Verification Status']?.length) {
            filtered = filtered.filter((a) =>
                filters['Verification Status'].includes(a.status)
            )
        }

        // date filter
        if (filters['Date']?.length) {
            filtered = filtered.filter((a) => {
                const date     = new Date(a.publishedAt)
                const diffDays = (now - date) / (1000 * 60 * 60 * 24)
                if (filters['Date'].includes('Today'))      return diffDays < 1
                if (filters['Date'].includes('This Week'))  return diffDays <= 7
                if (filters['Date'].includes('This Month')) return diffDays <= 30
                return true
            })
        }

        setNews(filtered)
    }

    const handleSidebarChange = (filters) => {
        setSidebar(filters)
    }

    const hero = news[0] || null
    const grid = news.slice(1)

    return (
        <>
            <NavBar />
            <CategoryTabs onTabChange={setCategory} />
            <TrendingStrip />
            <div className="hp-body">
                <Sidebar onFilterChange={handleSidebarChange} />
                <main className="hp-main">
                    {loading && <p className="hp-status">Loading news...</p>}
                    {error   && <p className="hp-error">{error}</p>}
                    {!loading && !error && hero && (
                        <>
                            <HeroCard article={hero} />
                            <NewsGrid articles={grid} />
                        </>
                    )}
                    {!loading && !error && !hero && (
                        <p className="hp-status">No articles found for this filter.</p>
                    )}
                </main>
            </div>
        </>
    )
}

export default HomePage