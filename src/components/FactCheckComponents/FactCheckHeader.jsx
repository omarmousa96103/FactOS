import './FactCheckHeader.css'

function FactCheckHeader() {
    return (
        <div className="fch-wrap">
            <div className="fch-badge">
                <span className="fch-dot" />
                FactOS AI
            </div>
            <h1 className="fch-title">Fact Check anything</h1>
            <p className="fch-sub">Ask about any headline, rumor, or claim and get an instant verified response.</p>
        </div>
    )
}

export default FactCheckHeader