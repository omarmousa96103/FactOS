import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import FactCheckHeader from '../components/FactCheckComponents/FactCheckHeader'
import ChatWindow from '../components/FactCheckComponents/ChatWindow'
import { mockResponses, fallbackResponse } from './data/mockResponses'
import './FactCheckPage.css'

function getAIResponse(query) {
    const lower = query.toLowerCase()
    const match = mockResponses.find((r) =>
        r.keywords.some((kw) => lower.includes(kw))
    )
    return match || fallbackResponse
}

function FactCheckPage() {
    const [messages, setMessages] = useState([
        {
            id: 0,
            role: 'ai',
            text: "Hello! I'm FactOS AI. Send me any claim or headline and I'll verify it against trusted sources for you.",
            status: null,
            statusClass: null,
            time: 'Just now',
        },
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)

    const getTime = () =>
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const sendMessage = (text) => {
        const trimmed = text.trim()
        if (!trimmed) return

        setMessages((prev) => [...prev, {
            id: Date.now(),
            role: 'user',
            text: trimmed,
            time: getTime(),
        }])
        setInput('')
        setIsTyping(true)

        setTimeout(() => {
            const { response, status, statusClass } = getAIResponse(trimmed)
            setIsTyping(false)
            setMessages((prev) => [...prev, {
                id: Date.now() + 1,
                role: 'ai',
                text: response,
                status,
                statusClass,
                time: getTime(),
            }])
        }, 1500)
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