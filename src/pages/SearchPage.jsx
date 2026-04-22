import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchBar from '../components/SearchPageComponents/SearchBar'
import QuickFilters from '../components/SearchPageComponents/QuickFilters'
import Sidebar from '../components/HomePageComponents/Sidebar'
import SearchResults from '../components/SearchPageComponents/SearchResults'
import { api } from '../api'
import './SearchPage.css'

function SearchPage() {
    const [query, setQuery]                   = useState('')
    const [results, setResults]               = useState([])
    const [loading, setLoading]               = useState(false)
    const [activeChip, setActiveChip]         = useState('All')
    const [sidebarFilters, setSidebarFilters] = useState({})

    useEffect(() => {
        if (query.length > 2) {
            handleSearch()
        } else {
            setResults([])
        }
    }, [query])

    const handleSearch = async () => {
        setLoading(true)
        try {
            const data = await api.searchNews(query)
            if (Array.isArray(data)) setResults(data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const filtered = results.filter((article) => {
        const matchesChip =
            activeChip === 'All'            ? true :
            activeChip === 'Confirmed Only' ? article.status === 'Confirmed' :
            activeChip === 'Today'          ? new Date(article.publishedAt).toDateString() === new Date().toDateString() :
            article.category?.toLowerCase() === activeChip.toLowerCase()

        const matchesSidebar = Object.entries(sidebarFilters).every(([group, values]) => {
            if (!values.length) return true
            if (group === 'Verification Status') return values.includes(article.status)
            if (group === 'Type')                return values.includes(article.category)
            if (group === 'Source')              return values.some((v) => article.source?.includes(v))
            return true
        })

        return matchesChip && matchesSidebar
    })

    return (
        <>
            <NavBar />
            <SearchBar onSearch={setQuery} />
            <QuickFilters onFilterChange={setActiveChip} />
            <div className="sp-body">
                <Sidebar onFilterChange={setSidebarFilters} />
                <main className="sp-main">
                    {loading
                        ? <p className="sp-status">Searching...</p>
                        : <SearchResults articles={filtered} query={query} />
                    }
                </main>
            </div>
        </>
    )
}

export default SearchPage