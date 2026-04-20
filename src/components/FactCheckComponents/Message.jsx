import './Message.css'

function Message({ msg }) {
    const isAI = msg.role === 'ai'

    return (
        <div className={`msg-wrap ${isAI ? 'msg-wrap--ai' : 'msg-wrap--user'}`}>
            {isAI && <div className="msg-avatar">F</div>}
            <div className={`msg-bubble ${isAI ? 'msg-bubble--ai' : 'msg-bubble--user'}`}>
                {isAI && msg.status && (
                    <div className={`msg-verdict ${msg.statusClass}`}>
                        <span className="msg-verdict-dot" />
                        {msg.status}
                    </div>
                )}
                <p className="msg-text">{msg.text}</p>
                <span className="msg-time">{msg.time}</span>
            </div>
        </div>
    )
}

export default Message