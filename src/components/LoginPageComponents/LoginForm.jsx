import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../LoginPageComponents/LoginForm.css'

function LoginForm() {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        const result = await login(email, password)
        setLoading(false)
        if (result.success) {
            navigate('/home')
        } else {
            setError(result.message)
        }
    }

    return (
        <div className="lf-page">
            <div className="lf-left">
                <p className="lf-logo">Fact<span>OS</span></p>
                <div>
                    <h2 className="lf-headline">News you can actually trust</h2>
                    <p className="lf-desc">Every headline verified. Every rumor flagged. Stay informed with sources you can count on.</p>
                    <div className="lf-pills">
                        <div className="lf-pill"><span className="lf-pill-dot" />Real-time fact checking across 50+ sources</div>
                        <div className="lf-pill"><span className="lf-pill-dot" />Regional and global news in one place</div>
                        <div className="lf-pill"><span className="lf-pill-dot" />Instant rumor detection and verification</div>
                    </div>
                </div>
                <p className="lf-trusted">Trusted by readers worldwide</p>
            </div>

            <div className="lf-right">
                <div className="lf-form-wrap">
                    <h1 className="lf-title">Welcome back</h1>
                    <p className="lf-subtitle">Sign in to your <span className="lf-brand">FactOS</span> account</p>

                    {error && <p className="lf-error">{error}</p>}

                    <form className="lf-form" onSubmit={handleSubmit}>
                        <div className="lf-field">
                            <label className="lf-label">Email</label>
                            <input
                                className="lf-input"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="lf-field">
                            <div className="lf-label-row">
                                <label className="lf-label">Password</label>
                                <a className="lf-forgot" href="#">Forgot password?</a>
                            </div>
                            <input
                                className="lf-input"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="lf-btn" disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </form>

                    <p className="lf-switch">
                        New to FactOS?{' '}
                        <a onClick={() => navigate('/signup')}>Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm