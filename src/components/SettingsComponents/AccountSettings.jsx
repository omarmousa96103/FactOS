import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { api } from '../../api'
import './AccountSettings.css'

function AccountSettings() {
    const { user } = useAuth()
    const [form, setForm]       = useState({ firstName: '', lastName: '', email: '' })
    const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
    const [msg, setMsg]         = useState('')
    const [err, setErr]         = useState('')
    const [passMsg, setPassMsg] = useState('')
    const [passErr, setPassErr] = useState('')

    useEffect(() => {
        if (user) {
            setForm({
                firstName: user.firstName || '',
                lastName:  user.lastName  || '',
                email:     user.email     || '',
            })
        }
    }, [user])

    const handleProfileSave = async () => {
        setMsg('')
        setErr('')
        const data = await api.updateProfile(form)
        if (data._id) {
            setMsg('Profile updated successfully')
        } else {
            setErr(data.message || 'Something went wrong')
        }
    }

    const handlePasswordUpdate = async () => {
        setPassMsg('')
        setPassErr('')
        if (passwords.newPassword !== passwords.confirmPassword) {
            return setPassErr('Passwords do not match')
        }
        const data = await api.updatePassword({
            currentPassword: passwords.currentPassword,
            newPassword:     passwords.newPassword,
        })
        if (data.message === 'Password updated successfully') {
            setPassMsg('Password updated successfully')
            setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' })
        } else {
            setPassErr(data.message || 'Something went wrong')
        }
    }

    return (
        <div className="as-wrap">
            <h2 className="set-title">Account</h2>

            <div className="set-section">
                <p className="set-section-label">Profile</p>
                <div className="as-avatar-row">
                    <div className="as-avatar">{user?.firstName?.[0]}{user?.lastName?.[0]}</div>
                    <div>
                        <p className="as-avatar-name">{user?.firstName} {user?.lastName}</p>
                        <button className="as-avatar-btn">Change photo</button>
                    </div>
                </div>

                {msg && <p className="as-success">{msg}</p>}
                {err && <p className="as-error">{err}</p>}

                <div className="set-field">
                    <label className="set-label">First name</label>
                    <input className="set-input" type="text" value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                </div>
                <div className="set-field">
                    <label className="set-label">Last name</label>
                    <input className="set-input" type="text" value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
                <div className="set-field">
                    <label className="set-label">Email</label>
                    <input className="set-input" type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <button className="set-btn-primary" onClick={handleProfileSave}>Save changes</button>
            </div>

            <div className="set-section">
                <p className="set-section-label">Password</p>

                {passMsg && <p className="as-success">{passMsg}</p>}
                {passErr && <p className="as-error">{passErr}</p>}

                <div className="set-field">
                    <label className="set-label">Current password</label>
                    <input className="set-input" type="password" placeholder="••••••••"
                        value={passwords.currentPassword}
                        onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })} />
                </div>
                <div className="set-field">
                    <label className="set-label">New password</label>
                    <input className="set-input" type="password" placeholder="••••••••"
                        value={passwords.newPassword}
                        onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })} />
                </div>
                <div className="set-field">
                    <label className="set-label">Confirm new password</label>
                    <input className="set-input" type="password" placeholder="••••••••"
                        value={passwords.confirmPassword}
                        onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })} />
                </div>
                <button className="set-btn-primary" onClick={handlePasswordUpdate}>Update password</button>
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