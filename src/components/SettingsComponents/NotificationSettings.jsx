import { useState } from 'react'
import './NotificationSettings.css'

const notifOptions = [
    { id: 'breaking',  label: 'Breaking news alerts',     sub: 'Get notified instantly when major news breaks' },
    { id: 'factcheck', label: 'Fact-check result alerts',  sub: 'Receive alerts when a claim you submitted is verified' },
    { id: 'digest',    label: 'Weekly digest',             sub: 'A summary of the top stories every Sunday morning' },
    { id: 'trending',  label: 'Trending stories',          sub: 'Daily highlights of what is trending on FactOS' },
]

function Toggle({ checked, onChange }) {
    return (
        <div className={`ns-toggle ${checked ? 'on' : ''}`} onClick={onChange}>
            <div className="ns-toggle-knob" />
        </div>
    )
}

function NotificationsSettings() {
    const [enabled, setEnabled] = useState({ breaking: true, factcheck: true, digest: false, trending: false })

    const toggle = (id) => setEnabled((prev) => ({ ...prev, [id]: !prev[id] }))

    return (
        <div className="ns-wrap">
            <h2 className="set-title">Notifications</h2>
            <div className="set-section">
                <p className="set-section-label">Alert preferences</p>
                {notifOptions.map((opt) => (
                    <div key={opt.id} className="ns-row">
                        <div>
                            <p className="ns-label">{opt.label}</p>
                            <p className="ns-sub">{opt.sub}</p>
                        </div>
                        <Toggle checked={enabled[opt.id]} onChange={() => toggle(opt.id)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotificationsSettings