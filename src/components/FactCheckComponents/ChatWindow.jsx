import { useEffect, useRef } from 'react'
import './ChatWindow.css'
import Message from './Message'
import TypingIndicator from './TypingIndicator'
import StarterPrompts from './StarterPrompts'
import ChatInput from './ChatInput'

function ChatWindow({ messages, isTyping, input, onChange, onSend, onStarterSelect }) {
    const bottomRef = useRef(null)
    const isEmpty = messages.length === 1

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    return (
        <div className="cw-wrap">
            <div className="cw-messages">
                {messages.map((msg) => (
                    <Message key={msg.id} msg={msg} />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={bottomRef} />
            </div>

            {isEmpty && <StarterPrompts onSelect={onStarterSelect} />}

            <ChatInput input={input} onChange={onChange} onSend={onSend} />
        </div>
    )
}

export default ChatWindow