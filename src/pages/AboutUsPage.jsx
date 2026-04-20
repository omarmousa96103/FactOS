import NavBar from '../components/NavBar/NavBar'
import './AboutUsPage.css'

const socials = [
    { label: 'GitHub',    url: 'https://github.com/omarmousa96103',    icon: 'GH' },
    { label: 'LinkedIn',  url: 'https://linkedin.com/in/omarmousa96103', icon: 'LI' },
    { label: 'Instagram', url: 'https://instagram.com/0moussa',  icon: 'IG' },
]

function AboutPage() {
    return (
        <>
            <NavBar />
            <div className="ab-wrap">

                {/* Hero */}
                <div className="ab-hero">
                    <div className="ab-img-wrap">
                        <img
                            src="/omar.jpg"
                            alt="Omar Mousa"
                            className="ab-img"
                            onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                            }}
                        />
                        <div className="ab-img-fallback">OM</div>
                    </div>
                    <div>
                        <span className="ab-badge">Creator & Developer</span>
                        <h1 className="ab-name">Omar Mousa</h1>
                        <p className="ab-tagline">Building tools that help people navigate a world full of noise.</p>
                    </div>
                </div>

                <div className="ab-divider" />

                {/* Mission */}
                <div className="ab-section">
                    <span className="ab-section-label">Why I built this</span>
                    <h2 className="ab-section-title">The story behind FactOS</h2>
                    <p className="ab-body">
                        Lately, we've been surrounded by an overwhelming amount of fake news. It spreads faster than the truth, and most people don't have the time or the tools to figure out what's real and what isn't.
                    </p>
                    <p className="ab-body">
                        I built FactOS because I believe the world needs a platform that does that work for you — one that doesn't just show you headlines, but tells you whether they're verified, who confirmed them, and who disputes them. Transparency over sensationalism. Sources over speculation.
                    </p>
                    <p className="ab-body">
                        This is a solo project driven by a simple idea: accurate information should be accessible to everyone, not just those who know where to look.
                    </p>
                </div>

                <div className="ab-divider" />

                {/* Stats */}
                <div className="ab-stats">
                    <div className="ab-stat">
                        <p className="ab-stat-num">50+</p>
                        <p className="ab-stat-label">Trusted sources</p>
                    </div>
                    <div className="ab-stat">
                        <p className="ab-stat-num">Real‑time</p>
                        <p className="ab-stat-label">Fact checking</p>
                    </div>
                    <div className="ab-stat">
                        <p className="ab-stat-num">1</p>
                        <p className="ab-stat-label">Developer behind it all</p>
                    </div>
                </div>

                <div className="ab-divider" />

                {/* Socials */}
                <div className="ab-section">
                    <span className="ab-section-label">Connect</span>
                    <h2 className="ab-section-title">Find me online</h2>
                    <p className="ab-body">Have feedback, ideas, or just want to say hi? Reach out on any of these platforms.</p>
                    <div className="ab-socials">
                        {socials.map((s) => (
                            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="ab-social-card">
                                <div className="ab-social-icon">{s.icon}</div>
                                <span className="ab-social-label">{s.label}</span>
                                <span className="ab-social-arrow">→</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer note */}
                <p className="ab-footer-note">
                    FactOS is an independent project. Built with React, passion, and a deep dislike of misinformation.
                </p>

            </div>
        </>
    )
}

export default AboutPage