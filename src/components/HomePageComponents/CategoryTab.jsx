import { useState } from 'react'
import './CategoryTab.css'

const tabs = [
    { id: 'breaking', label: 'Breaking News' },
    { id: 'popular',  label: 'Popular News'  },
    { id: 'regional', label: 'Regional News' },
    { id: 'local',    label: 'Local News'    },
]

const countries = [
    'Lebanon', 'United States', 'United Kingdom', 'France', 'Germany',
    'UAE', 'Saudi Arabia', 'Egypt', 'Jordan', 'Qatar', 'Turkey',
    'Italy', 'Spain', 'Canada', 'Australia', 'India', 'China', 'Japan',
]

function CategoryTabs({ onTabChange }) {
    const [active, setActive]           = useState('breaking')
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState('')

    const handleClick = (tab) => {
        setActive(tab.id)
        setShowDropdown(tab.id === 'local')
        if (tab.id !== 'local') {
            onTabChange({ tab: tab.id })
            setSelectedCountry('')
        }
    }

    const handleCountry = (country) => {
        setSelectedCountry(country)
        setShowDropdown(false)
        onTabChange({ tab: 'local', country })
    }

    return (
        <div className="ct-outer">
            <div className="ct-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`ct-tab ${active === tab.id ? 'active' : ''}`}
                        onClick={() => handleClick(tab)}
                    >
                        {tab.label}
                        {tab.id === 'local' && selectedCountry && (
                            <span className="ct-country-tag">{selectedCountry}</span>
                        )}
                        {tab.id === 'local' && (
                            <span className="ct-chevron">▾</span>
                        )}
                    </button>
                ))}
            </div>

            {showDropdown && (
                <div className="ct-dropdown">
                    {countries.map((c) => (
                        <button
                            key={c}
                            className={`ct-dropdown-item ${selectedCountry === c ? 'active' : ''}`}
                            onClick={() => handleCountry(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoryTabs