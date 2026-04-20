import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchBar from '../components/SearchPageComponents/SearchBar'
import QuickFilters from '../components/SearchPageComponents/QuickFilters'
import Sidebar from '../components/HomePageComponents/Sidebar'
import SearchResults from '../components/SearchPageComponents/SearchResults'
import { mockNews } from './data/mockNews'
import './SearchPage.css'

function SearchPage() {
    const [query, setQuery] = useState('')
    const [activeChip, setActiveChip] = useState('All')
    const [sidebarFilters, setSidebarFilters] = useState({})

    const filtered = mockNews.filter((article) => {
        const matchesQuery =
            query === '' ||
            article.headline.toLowerCase().includes(query.toLowerCase()) ||
            article.summary.toLowerCase().includes(query.toLowerCase()) ||
            article.source.toLowerCase().includes(query.toLowerCase())

        const matchesChip =
            activeChip === 'All' ||
            activeChip === 'Confirmed Only' ? article.status === 'Confirmed' :
            article.category.toLowerCase() === activeChip.toLowerCase() ||
            activeChip === 'Today'

        const matchesSidebar = Object.entries(sidebarFilters).every(([group, values]) => {
            if (!values.length) return true
            if (group === 'Verification Status') return values.includes(article.status)
            if (group === 'Type') return values.includes(article.category)
            if (group === 'Source') return values.some((v) => article.source.includes(v))
            return true
        })

        return matchesQuery && matchesChip && matchesSidebar
    })

    return (
        <>
            <NavBar />
            <SearchBar onSearch={setQuery} />
            <QuickFilters onFilterChange={setActiveChip} />
            <div className="sp-body">
                <Sidebar onFilterChange={setSidebarFilters} />
                <main className="sp-main">
                    <SearchResults articles={filtered} query={query} />
                </main>
            </div>
        </>
    )
}

export default SearchPage