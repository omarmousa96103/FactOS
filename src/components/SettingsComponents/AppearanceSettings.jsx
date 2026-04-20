import { useState } from 'react'
import './AppearanceSettings.css'

function AppearanceSettings() {
    const [theme, setTheme] = useState('light')
    const [fontSize, setFontSize] = useState('medium')

    return (
        <div className="aps-wrap">
            <h2 className="set-title">Appearance</h2>

            <div className="set-section">
                <p className="set-section-label">Theme</p>
                <div className="aps-theme-grid">
                    {['light', 'dark'].map((t) => (
                        <button
                            key={t}
                            className={`aps-theme-btn ${theme === t ? 'active' : ''}`}
                            onClick={() => setTheme(t)}
                        >
                            <div className={`aps-theme-preview aps-preview--${t}`}>
                                <div className="aps-preview-bar" />
                                <div className="aps-preview-line" />
                                <div className="aps-preview-line short" />
                            </div>
                            <span className="aps-theme-label">
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="set-section">
                <p className="set-section-label">Font size</p>
                <div className="aps-size-row">
                    {['small', 'medium', 'large'].map((s) => (
                        <button
                            key={s}
                            className={`aps-size-btn ${fontSize === s ? 'active' : ''}`}
                            onClick={() => setFontSize(s)}
                        >
                            {s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <button className="set-btn-primary">Save appearance</button>
        </div>
    )
}

export default AppearanceSettings