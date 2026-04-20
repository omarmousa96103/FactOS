import './SettingsSidebar.css'

const sections = [
    { id: 'account',       label: 'Account' },
    { id: 'preferences',   label: 'Preferences' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'appearance',    label: 'Appearance' },
    { id: 'privacy',       label: 'Privacy' },
    { id: 'about',         label: 'About' },
]

function SettingsSidebar({ active, onChange }) {
    return (
        <aside className="ss-wrap">
            <p className="ss-heading">Settings</p>
            {sections.map((s) => (
                <button
                    key={s.id}
                    className={`ss-item ${active === s.id ? 'active' : ''}`}
                    onClick={() => onChange(s.id)}
                >
                    {s.label}
                </button>
            ))}
        </aside>
    )
}

export default SettingsSidebar