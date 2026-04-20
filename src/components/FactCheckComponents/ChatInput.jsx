import './ChatInput.css'

function ChatInput({ input, onChange, onSend }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            onSend()
        }
    }

    const handleChange = (e) => {
        onChange(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`
    }

    return (
        <div className="ci-wrap">
            <div className="ci-inner">
                <textarea
                    className="ci-textarea"
                    placeholder="Type a claim or headline to fact-check..."
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    rows={1}
                />
                <button
                    className={`ci-send ${input.trim() ? 'ci-send--active' : ''}`}
                    onClick={onSend}
                    disabled={!input.trim()}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                    </svg>
                </button>
            </div>
            <p className="ci-disclaimer">
                Responses are AI-generated and should be independently verified. FactOS is not liable for decisions made based on this information.
            </p>
        </div>
    )
}

export default ChatInput