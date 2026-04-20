import { useState } from 'react'
import './QuickFilters.css'

const chips = ['All', 'Sport', 'Economy', 'Politics', 'Fashion', 'World', 'Celebrity', 'Confirmed Only', 'Today']

function QuickFilters({ onFilterChange }) {
    const [active, setActive] = useState('All')

    const handleClick = (chip) => {
        setActive(chip)
        if (onFilterChange) onFilterChange(chip)
    }

    return (
        <div className="qf-wrap">
            <div className="qf-chips">
                {chips.map((chip) => (
                    <button
                        key={chip}
                        className={`qf-chip ${active === chip ? 'active' : ''}`}
                        onClick={() => handleClick(chip)}
                    >
                        {chip}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuickFilters