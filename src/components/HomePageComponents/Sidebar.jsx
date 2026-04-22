import { useState } from 'react'
import './Sidebar.css'

const filters = {
    'Verification Status': ['Confirmed', 'Rumored', 'Not Confirmed', 'Unverified'],
    'Type': ['Sport', 'Economy', 'Politics', 'Fashion', 'World', 'Celebrity', 'General'],
    'Date': ['Today', 'This Week', 'This Month'],
}

function Sidebar({ onFilterChange }) {
    const [selected, setSelected] = useState({})
    const [collapsed, setCollapsed] = useState({})

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

    const toggleCollapse = (group) => {
        setCollapsed((prev) => ({ ...prev, [group]: !prev[group] }))
    }

    const clearAll = () => {
        setSelected({})
        if (onFilterChange) onFilterChange({})
    }

    const activeCount = Object.values(selected).flat().length

    return (
        <aside className="sb-wrap">
            <div className="sb-header">
                <p className="sb-title">
                    Filter by
                    {activeCount > 0 && (
                        <span className="sb-count">{activeCount}</span>
                    )}
                </p>
                {activeCount > 0 && (
                    <button className="sb-clear" onClick={clearAll}>Clear all</button>
                )}
            </div>

            {Object.entries(filters).map(([group, options]) => (
                <div key={group} className="sb-group">
                    <button
                        className="sb-group-header"
                        onClick={() => toggleCollapse(group)}
                    >
                        <span className="sb-group-label">{group}</span>
                        <span className={`sb-chevron ${collapsed[group] ? 'collapsed' : ''}`}>
                            ›
                        </span>
                    </button>

                    {!collapsed[group] && (
                        <div className="sb-options">
                            {options.map((opt) => (
                                <label
                                    key={opt}
                                    className={`sb-option ${isChecked(group, opt) ? 'checked' : ''}`}
                                >
                                    <input
                                        type="checkbox"
                                        className="sb-checkbox"
                                        checked={isChecked(group, opt)}
                                        onChange={() => toggle(group, opt)}
                                    />
                                    <span className="sb-opt-text">{opt}</span>
                                    {isChecked(group, opt) && (
                                        <span className="sb-check">✓</span>
                                    )}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    )
}

export default Sidebar