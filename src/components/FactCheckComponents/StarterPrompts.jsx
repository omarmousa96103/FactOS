import './StarterPrompts.css'
import { starterPrompts } from '../../pages/data/mockResponses'

function StarterPrompts({ onSelect }) {
    return (
        <div className="sp-wrap">
            <p className="sp-label">Try asking</p>
            <div className="sp-grid">
                {starterPrompts.map((prompt, i) => (
                    <button
                        key={i}
                        className="sp-btn"
                        onClick={() => onSelect(prompt)}
                    >
                        {prompt}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default StarterPrompts