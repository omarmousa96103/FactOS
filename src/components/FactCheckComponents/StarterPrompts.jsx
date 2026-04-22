import './StarterPrompts.css'

const starterPrompts = [
    'Is it true that gold prices are rising?',
    'Fact-check: Lebanon won the FibaWc',
    'Is Drake dropping a new album soon?',
    'Did Barcelona beat Inter Milan?',
]

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