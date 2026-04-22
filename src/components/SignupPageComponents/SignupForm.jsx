import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './SignUpForm.css'

function SignUpForm() {
    const navigate = useNavigate()
    const { signup } = useAuth()
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (form.password !== form.confirmPassword) {
            return setError('Passwords do not match')
        }

        setLoading(true)
        const result = await signup(form.firstName, form.lastName, form.email, form.password)
        setLoading(false)

        if (result.success) {
            navigate('/home')
        } else {
            setError(result.message)
        }
    }

    return (
        <div className="sf-wrap">
            <div className="sf-card">
                <h2 className="sf-title">Create an account</h2>
                <p className="sf-subtitle">Join <span className="sf-brand">FactOS</span> and get fact-checked news instantly</p>

                {error && <p className="sf-error">{error}</p>}

                <form className="sf-form" onSubmit={handleSubmit}>
                    <div className="sf-row">
                        <div className="sf-field">
                            <label className="sf-label" htmlFor="firstName">First name</label>
                            <input className="sf-input" type="text" id="firstName" placeholder="John" onChange={handleChange} required />
                        </div>
                        <div className="sf-field">
                            <label className="sf-label" htmlFor="lastName">Last name</label>
                            <input className="sf-input" type="text" id="lastName" placeholder="Doe" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="sf-field">
                        <label className="sf-label" htmlFor="email">Email</label>
                        <input className="sf-input" type="email" id="email" placeholder="you@example.com" onChange={handleChange} required />
                    </div>
                    <div className="sf-field">
                        <label className="sf-label" htmlFor="password">Password</label>
                        <input className="sf-input" type="password" id="password" placeholder="••••••••" onChange={handleChange} required />
                    </div>
                    <div className="sf-field">
                        <label className="sf-label" htmlFor="confirmPassword">Confirm password</label>
                        <input className="sf-input" type="password" id="confirmPassword" placeholder="••••••••" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="sf-btn-primary" disabled={loading}>
                        {loading ? 'Creating account...' : 'Create account'}
                    </button>
                </form>

                <p className="sf-login-text">
                    Already a user?{' '}
                    <a className="sf-login-link" onClick={() => navigate('/login')}>Sign in</a>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm