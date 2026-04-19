import { useState } from 'react'
import './CategoryTab.css'

const tabs = ['Breaking News', 'Popular News', 'Regional News', 'Local News']

function CategoryTabs({ onTabChange }) {
    const [active, setActive] = useState('Breaking News')

    const handleClick = (tab) => {
        setActive(tab)
        if (onTabChange) onTabChange(tab)
    }

    return (
        <div className="ct-wrap">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`ct-tab ${active === tab ? 'active' : ''}`}
                    onClick={() => handleClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default CategoryTabs