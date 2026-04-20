import { useState } from 'react'
import './PreferenceSettings.css'

const categories = ['Sport', 'Economy', 'Politics', 'Fashion', 'World', 'Celebrity']
const regions = ['Global', 'Middle East', 'Europe', 'North America', 'Asia', 'Africa']
const languages = ['English', 'Arabic', 'French', 'Spanish']

function PreferencesSettings() {
    const [selectedCategory, setSelectedCategory] = useState('Sport')
    const [selectedRegion, setSelectedRegion] = useState('Global')
    const [selectedLanguage, setSelectedLanguage] = useState('English')

    return (
        <div className="ps-wrap">
            <h2 className="set-title">Preferences</h2>

            <div className="set-section">
                <p className="set-section-label">Default news category</p>
                <div className="ps-chips">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`ps-chip ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="set-section">
                <p className="set-section-label">Default region</p>
                <div className="ps-chips">
                    {regions.map((r) => (
                        <button
                            key={r}
                            className={`ps-chip ${selectedRegion === r ? 'active' : ''}`}
                            onClick={() => setSelectedRegion(r)}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            <div className="set-section">
                <p className="set-section-label">Language</p>
                <select
                    className="set-input"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    {languages.map((l) => (
                        <option key={l}>{l}</option>
                    ))}
                </select>
            </div>

            <button className="set-btn-primary">Save preferences</button>
        </div>
    )
}

export default PreferencesSettings