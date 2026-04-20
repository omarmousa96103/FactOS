import './AccountSettings.css'

function AccountSettings() {
    return (
        <div className="as-wrap">
            <h2 className="set-title">Account</h2>

            <div className="set-section">
                <p className="set-section-label">Profile</p>
                <div className="as-avatar-row">
                    <div className="as-avatar">O</div>
                    <div>
                        <p className="as-avatar-name">Omar</p>
                        <button className="as-avatar-btn">Change photo</button>
                    </div>
                </div>
                <div className="set-field">
                    <label className="set-label">First name</label>
                    <input className="set-input" type="text" defaultValue="Omar" />
                </div>
                <div className="set-field">
                    <label className="set-label">Last name</label>
                    <input className="set-input" type="text" defaultValue="" placeholder="Your last name" />
                </div>
                <div className="set-field">
                    <label className="set-label">Email</label>
                    <input className="set-input" type="email" defaultValue="omar@example.com" />
                </div>
                <button className="set-btn-primary">Save changes</button>
            </div>

            <div className="set-section">
                <p className="set-section-label">Password</p>
                <div className="set-field">
                    <label className="set-label">Current password</label>
                    <input className="set-input" type="password" placeholder="••••••••" />
                </div>
                <div className="set-field">
                    <label className="set-label">New password</label>
                    <input className="set-input" type="password" placeholder="••••••••" />
                </div>
                <div className="set-field">
                    <label className="set-label">Confirm new password</label>
                    <input className="set-input" type="password" placeholder="••••••••" />
                </div>
                <button className="set-btn-primary">Update password</button>
            </div>

            <div className="set-section">
                <p className="set-section-label">Danger zone</p>
                <div className="as-danger-box">
                    <div>
                        <p className="as-danger-title">Delete account</p>
                        <p className="as-danger-sub">This action is permanent and cannot be undone.</p>
                    </div>
                    <button className="as-danger-btn">Delete account</button>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings