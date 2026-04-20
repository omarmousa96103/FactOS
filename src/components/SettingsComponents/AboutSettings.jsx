import './AboutSettings.css'

function AboutSettings() {
    return (
        <div className="abs-wrap">
            <h2 className="set-title">About</h2>

            <div className="set-section">
                <p className="set-section-label">App info</p>
                <div className="abs-info-row">
                    <span className="abs-info-label">Version</span>
                    <span className="abs-info-val">1.0.0 (Beta)</span>
                </div>
                <div className="abs-info-row">
                    <span className="abs-info-label">Built by</span>
                    <span className="abs-info-val">Omar</span>
                </div>
                <div className="abs-info-row">
                    <span className="abs-info-label">Last updated</span>
                    <span className="abs-info-val">April 2026</span>
                </div>
            </div>

            <div className="set-section">
                <p className="set-section-label">Legal</p>
                <div className="abs-links">
                    <a className="abs-link" href="#">Terms of Service</a>
                    <a className="abs-link" href="#">Privacy Policy</a>
                    <a className="abs-link" href="#">Cookie Policy</a>
                </div>
            </div>

            <div className="set-section">
                <p className="set-section-label">Mission</p>
                <p className="abs-mission">
                    FactOS is built to combat misinformation by giving everyone access to verified, source-backed news. We believe accurate information is a right, not a privilege.
                </p>
            </div>
        </div>
    )
}

export default AboutSettings