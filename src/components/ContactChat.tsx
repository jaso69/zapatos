import { useState, useRef, useEffect } from 'react';

export type ChatStrings = {
  kicker: string;
  title: string;
  subtitle: string;
  greeting: string;
  placeholder: string;
  error: string;
  sendLabel: string;
  resetLabel: string;
};

function generateSessionId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

interface Props {
  t: ChatStrings;
}

export default function ContactChat({ t }: Props) {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSessionId(generateSessionId());
  }, []);

  const WEBHOOK_URL = 'https://jmfortiz.jasodev.es/webhook/bbd0f54d-8e91-4480-9dbe-23c80cb1803e';

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = input.trim();
    if (!message || isStreaming) return;

    setMessages(prev => [...prev, { role: 'user', text: message }]);
    setInput('');
    setIsStreaming(true);

    setMessages(prev => [...prev, { role: 'bot', text: '' }]);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, sessionId }),
      });

      if (!response.ok) throw new Error('Error');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No stream');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const data = JSON.parse(line);
            if (data.type === 'item' && data.content) {
              const content = typeof data.content === 'string' ? data.content : '';
              if (content.startsWith('{"output":')) continue;
              setMessages(prev => {
                const newMessages = [...prev];
                const lastMsg = newMessages[newMessages.length - 1];
                newMessages[newMessages.length - 1] = { role: 'bot', text: lastMsg.text + content };
                return newMessages;
              });
              setTimeout(scrollToBottom, 0);
            }
          } catch (e) {
          }
        }
      }
    } catch (err) {
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { role: 'bot', text: t.error };
        return newMessages;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="bg-[var(--color-bg)] h-[560px] flex flex-col border border-[var(--color-accent)]/30 relative">
      {/* Header editorial */}
      <div className="relative px-6 py-5 border-b border-[var(--color-accent)]/30 bg-[var(--color-surface)]">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent-deep)] mb-1">{t.kicker}</p>
          <h3 className="font-['Cormorant_Garamond',_serif] italic text-[26px] leading-none text-[var(--color-text)]">{t.title}</h3>
          <p className="text-[12px] italic text-[var(--color-text-secondary)] mt-1">{t.subtitle}</p>
        </div>
        <button
          onClick={clearChat}
          aria-label={t.resetLabel}
          title={t.resetLabel}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-deep)] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-6 py-8 bg-[var(--color-bg)] texture-paper">
        {/* Greeting editorial (cuando no hay mensajes) */}
        {messages.length === 0 && (
          <div className="text-center max-w-md mx-auto py-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent-deep)] mb-3">Sanvin</p>
            <p className="font-['Cormorant_Garamond',_serif] italic text-[19px] leading-relaxed text-[var(--color-text)]">
              {t.greeting}
            </p>
            <div className="gold-divider mt-6 mx-auto w-16"></div>
          </div>
        )}

        {/* Messages list */}
        <div className="space-y-5">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'bot' && (
                <div className="w-9 h-9 rounded-full border border-[var(--color-accent)]/60 bg-[var(--color-bg)] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Cormorant_Garamond',_serif] italic text-[18px] leading-none text-[var(--color-accent-deep)]">S</span>
                </div>
              )}
              <div
                className={`${
                  msg.role === 'user'
                    ? 'bg-brand-900 text-white border border-brand-900'
                    : 'bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-accent)]/25'
                } rounded-sm px-4 py-3 max-w-[80%] text-[15px] leading-relaxed font-serif`}
              >
                {msg.text}
                {msg.role === 'bot' && msg.text === '' && (
                  <span className="inline-flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce" style={{animationDelay: '0s'}}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce" style={{animationDelay: '0.4s'}}></span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input editorial */}
      <div className="px-6 py-5 border-t border-[var(--color-accent)]/30 bg-[var(--color-surface)]">
        <form onSubmit={handleSubmit} className="flex gap-3 items-end">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 px-1 py-2 bg-transparent border-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none text-[var(--color-text)] text-[15px] font-serif italic placeholder:italic placeholder:text-[var(--color-text-secondary)]/70 transition-colors"
            autoComplete="off"
            disabled={isStreaming}
          />
          <button
            type="submit"
            aria-label={t.sendLabel}
            disabled={isStreaming || !input.trim()}
            className="w-11 h-11 min-w-[44px] min-h-[44px] border border-[var(--color-accent)] bg-transparent text-[var(--color-accent-deep)] hover:bg-[var(--color-accent)] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-3px); opacity: 1; }
        }
        .animate-bounce {
          animation: bounce 0.9s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
