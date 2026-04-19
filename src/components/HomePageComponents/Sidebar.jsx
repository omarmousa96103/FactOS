import { useState } from 'react'
import './Sidebar.css'

const filters = {
    'Verification Status': ['Confirmed', 'Rumored', 'Not Confirmed'],
    'Type': ['Sport', 'Economy', 'Politics', 'Fashion', 'World', 'Celebrity'],
    'Source': ['BBC', 'Reuters', 'Al Jazeera', 'ESPN', 'Vogue', 'TMZ'],
    'Date': ['Today', 'This Week', 'This Month'],
}

function Sidebar({ onFilterChange }) {
    const [selected, setSelected] = useState({})

    const toggle = (group, value) => {
        const current = selected[group] || []
        const updated = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value]
        const newSelected = { ...selected, [group]: updated }
        setSelected(newSelected)
        if (onFilterChange) onFilterChange(newSelected)
    }

    const isChecked = (group, value) => (selected[group] || []).includes(value)

    const clearAll = () => {
        setSelected({})
        if (onFilterChange) onFilterChange({})
    }

    return (
        <aside className="sb-wrap">
            <div className="sb-header">
                <p className="sb-title">Filter by</p>
                <button className="sb-clear" onClick={clearAll}>Clear all</button>
            </div>

            {Object.entries(filters).map(([group, options]) => (
                <div key={group} className="sb-group">
                    <p className="sb-group-label">{group}</p>
                    {options.map((opt) => (
                        <label key={opt} className="sb-option">
                            <input
                                type="checkbox"
                                className="sb-checkbox"
                                checked={isChecked(group, opt)}
                                onChange={() => toggle(group, opt)}
                            />
                            <span className="sb-opt-text">{opt}</span>
                        </label>
                    ))}
                </div>
            ))}
        </aside>
    )
}

export default Sidebar