import './SignUpForm.css'
import { useNavigate } from 'react-router-dom'

function SignUpForm() {
    const navigate = useNavigate();

    return (
        <div className="sf-wrap">
            <div className="sf-card">
                <h2 className="sf-title">Create an account</h2>
                <p className="sf-subtitle">Join <span className="sf-brand">FactOS</span> and get fact-checked news instantly</p>

                <form className="sf-form">
                    <div className="sf-row">
                        <div className="sf-field">
                            <label className="sf-label" htmlFor="firstName">First name</label>
                            <input className="sf-input" type="text" id="firstName" placeholder="John" />
                        </div>
                        <div className="sf-field">
                            <label className="sf-label" htmlFor="lastName">Last name</label>
                            <input className="sf-input" type="text" id="lastName" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="sf-field">
                        <label className="sf-label" htmlFor="email">Email</label>
                        <input className="sf-input" type="email" id="email" placeholder="you@example.com" />
                    </div>

                    <div className="sf-field">
                        <label className="sf-label" htmlFor="password">Password</label>
                        <input className="sf-input" type="password" id="password" placeholder="••••••••" />
                    </div>

                    <div className="sf-field">
                        <label className="sf-label" htmlFor="confirmPassword">Confirm password</label>
                        <input className="sf-input" type="password" id="confirmPassword" placeholder="••••••••" />
                    </div>

                    <button type="submit" className="sf-btn-primary">Create account</button>
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