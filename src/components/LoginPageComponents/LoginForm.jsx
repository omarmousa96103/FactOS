import { Navigate, useNavigate } from 'react-router-dom';
import '../LoginPageComponents/LoginForm.css'

function LoginForm() {
    const navigate = useNavigate();
    return (
        <div className="lf-wrap">
            <div className="lf-card">
                <h2 className="lf-title">Welcome back</h2>
                <p className="lf-subtitle">Sign in to your <span className="lf-brand">FactOS</span> account</p>

                <form className="lf-form">
                    <div className="lf-field">
                        <label className="lf-label" htmlFor="email">Email</label>
                        <input
                            className="lf-input"
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="lf-field">
                        <div className="lf-label-row">
                            <label className="lf-label" htmlFor="password">Password</label>
                            <a className="lf-forgot" href="#">Forgot password?</a>
                        </div>
                        <input
                            className="lf-input"
                            type="password"
                            id="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="lf-btn-primary" onClick={ () => navigate('/home')}>Sign in</button>
                </form>

                <p className="lf-signup-text">
                    New to FactOS?{' '}
                   <a className="lf-signup-link" onClick={() => navigate('/signup')}>Create an account</a>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;