import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import CategoryTabs from '../components/HomePageComponents/CategoryTab'
import TrendingStrip from '../components/HomePageComponents/TrendingStrip'
import Sidebar from '../components/HomePageComponents/Sidebar'
import HeroCard from '../components/HomePageComponents/HeroCard'
import NewsGrid from '../components/HomePageComponents/NewsGrid'
import { api } from '../api'
import { useAuth } from '../context/AuthContext'
import './HomePage.css'

function HomePage() {
    const { user }                = useAuth()
    const [allNews, setAllNews]   = useState([])
    const [news, setNews]         = useState([])
    const [loading, setLoading]   = useState(true)
    const [error, setError]       = useState('')
    const [tabInfo, setTabInfo]   = useState({ tab: 'breaking' })
    const [sidebar, setSidebar]   = useState({})

    useEffect(() => {
        fetchNews()
    }, [tabInfo])

    useEffect(() => {
        applyFilters(allNews, sidebar)
    }, [sidebar, allNews])

    const fetchNews = async () => {
        setLoading(true)
        setError('')
        try {
            const params = { tab: tabInfo.tab }

            if (tabInfo.tab === 'regional') {
                params.region = user?.preferences?.defaultRegion || 'Global'
            }

            if (tabInfo.tab === 'local' && tabInfo.country) {
                params.country = tabInfo.country
            }

            const data = await api.getNews(params)

            if (Array.isArray(data)) {
                // popular: sort by source count
                const sorted = tabInfo.tab === 'popular'
                    ? [...data].sort((a, b) => (b.sources?.length || 1) - (a.sources?.length || 1))
                    : data
                setAllNews(sorted)
                applyFilters(sorted, sidebar)
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

        if (filters['Type']?.length) {
            filtered = filtered.filter((a) =>
                filters['Type'].includes(a.category)
            )
        }

        if (filters['Verification Status']?.length) {
            filtered = filtered.filter((a) =>
                filters['Verification Status'].includes(a.status)
            )
        }

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

        // if filter returns too few fetch more
        if (filtered.length < 3 && filters['Type']?.length) {
            api.getNews({ q: filters['Type'][0] + ' news' })
                .then((more) => {
                    if (Array.isArray(more)) {
                        const combined = [...articles, ...more]
                        const unique   = combined.filter((a, i, self) =>
                            i === self.findIndex((b) => b.headline === a.headline)
                        )
                        setAllNews(unique)
                    }
                })
                .catch(() => {})
        }

        setNews(filtered)
    }

    const hero = news[0] || null
    const grid = news.slice(1)

    return (
        <>
            <NavBar />
            <CategoryTabs onTabChange={setTabInfo} />
            <TrendingStrip />
            <div className="hp-body">
                <Sidebar onFilterChange={setSidebar} />
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