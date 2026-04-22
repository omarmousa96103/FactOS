import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import FactCheckHeader from '../components/FactCheckComponents/FactCheckHeader'
import ChatWindow from '../components/FactCheckComponents/ChatWindow'
import { api } from '../api'
import './FactCheckPage.css'

function FactCheckPage() {
    const [messages, setMessages] = useState([
        {
            id:          0,
            role:        'ai',
            text:        "Hello! I'm FactOS AI. Send me any claim or headline and I'll verify it against trusted sources for you.",
            status:      null,
            statusClass: null,
            time:        'Just now',
        },
    ])
    const [input, setInput]       = useState('')
    const [isTyping, setIsTyping] = useState(false)

    const getTime = () =>
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const getStatusClass = (verdict) => {
        if (verdict === 'Confirmed') return 's-confirmed'
        if (verdict === 'False')     return 's-false'
        if (verdict === 'Rumored')   return 's-rumor'
        return 's-rumor'
    }

    const sendMessage = async (text) => {
        const trimmed = text.trim()
        if (!trimmed) return

        setMessages((prev) => [...prev, {
            id:   Date.now(),
            role: 'user',
            text: trimmed,
            time: getTime(),
        }])
        setInput('')
        setIsTyping(true)

        try {
            const result = await api.factCheck(trimmed)
            setMessages((prev) => [...prev, {
                id:          Date.now() + 1,
                role:        'ai',
                text:        result.explanation,
                status:      result.verdict,
                statusClass: getStatusClass(result.verdict),
                confidence:  result.confidence,
                sources:     result.sources,
                time:        getTime(),
            }])
        } catch (err) {
            setMessages((prev) => [...prev, {
                id:          Date.now() + 1,
                role:        'ai',
                text:        'Something went wrong. Please try again.',
                status:      null,
                statusClass: null,
                time:        getTime(),
            }])
        } finally {
            setIsTyping(false)
        }
    }

    return (
        <>
            <NavBar />
            <div className="fcp-page">
                <FactCheckHeader />
                <div className="fcp-body">
                    <ChatWindow
                        messages={messages}
                        isTyping={isTyping}
                        input={input}
                        onChange={setInput}
                        onSend={() => sendMessage(input)}
                        onStarterSelect={sendMessage}
                    />
                </div>
            </div>
        </>
    )
}

export default FactCheckPage