import './PrivacySettings.css'

function PrivacySettings() {
    return (
        <div className="prs-wrap">
            <h2 className="set-title">Privacy</h2>

            <div className="set-section">
                <p className="set-section-label">Search history</p>
                <div className="prs-row">
                    <div>
                        <p className="prs-label">Clear search history</p>
                        <p className="prs-sub">Remove all past searches from your account</p>
                    </div>
                    <button className="prs-btn-outline">Clear history</button>
                </div>
            </div>

            <div className="set-section">
                <p className="set-section-label">Data usage</p>
                <div className="prs-row">
                    <div>
                        <p className="prs-label">Personalized recommendations</p>
                        <p className="prs-sub">Allow FactOS to use your reading history to recommend articles</p>
                    </div>
                    <button className="prs-btn-outline">Manage</button>
                </div>
                <div className="prs-row">
                    <div>
                        <p className="prs-label">Analytics data</p>
                        <p className="prs-sub">Share anonymous usage data to help improve FactOS</p>
                    </div>
                    <button className="prs-btn-outline">Manage</button>
                </div>
            </div>

            <div className="set-section">
                <p className="set-section-label">Account data</p>
                <div className="prs-row">
                    <div>
                        <p className="prs-label">Download your data</p>
                        <p className="prs-sub">Export a copy of all data FactOS holds about you</p>
                    </div>
                    <button className="prs-btn-outline">Export</button>
                </div>
            </div>
        </div>
    )
}

export default PrivacySettings