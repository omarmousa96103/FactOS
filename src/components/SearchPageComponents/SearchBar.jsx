import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
        onSearch(e.target.value)
    }

    const handleClear = () => {
        setQuery('')
        onSearch('')
    }

    return (
        <div className="srb-wrap">
            <div className="srb-inner">
                <svg className="srb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                    className="srb-input"
                    type="text"
                    placeholder="Search headlines, topics, sources..."
                    value={query}
                    onChange={handleChange}
                />
                {query && (
                    <button className="srb-clear" onClick={handleClear}>✕</button>
                )}
            </div>
        </div>
    )
}

export default SearchBar