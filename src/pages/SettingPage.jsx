import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SettingsSidebar from '../components/SettingsComponents/SettingsSidebar'
import AccountSettings from '../components/SettingsComponents/AccountSettings'
import PreferencesSettings from '../components/SettingsComponents/PreferenceSettings'
import NotificationsSettings from '../components/SettingsComponents/NotificationSettings'
import AppearanceSettings from '../components/SettingsComponents/AppearanceSettings'
import PrivacySettings from '../components/SettingsComponents/PrivacySettings'
import AboutSettings from '../components/SettingsComponents/AboutSettings'
import './Settings.css'
import './SettingsPage.css'

const panels = {
    account:       <AccountSettings />,
    preferences:   <PreferencesSettings />,
    notifications: <NotificationsSettings />,
    appearance:    <AppearanceSettings />,
    privacy:       <PrivacySettings />,
    about:         <AboutSettings />,
}

function SettingsPage() {
    const [active, setActive] = useState('account')

    return (
        <>
            <NavBar />
            <div className="setp-body">
                <SettingsSidebar active={active} onChange={setActive} />
                <main className="setp-main">
                    {panels[active]}
                </main>
            </div>
        </>
    )
}

export default SettingsPage