import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { usePrefersReducedMotion } from '@/components/family-tree/hooks';

const GUIDED = [
  'What is live today?',
  'Which LBC product fits my business?',
  'How do I work with LBC?',
];

const WELCOME =
  "Hi — I'm LBC AI. I can help you navigate the LBC ecosystem: what's live, which product fits your needs, and how to work with us.";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ id: 0, role: 'assistant', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const idRef = useRef(1);
  const openBtnRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      const onKey = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          openBtnRef.current?.focus();
        }
      };
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || isLoading) return;
    const userMsg = { id: idRef.current++, role: 'user', content };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    try {
      const res = await base44.functions.invoke('lbcNetworkAi', { message: content });
      const reply = res?.data?.reply || "I couldn't generate a response right now. Please try again or visit https://LBC-HUB.COM.";
      setMessages((prev) => [...prev, { id: idRef.current++, role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: idRef.current++, role: 'assistant', content: "Something went wrong on my end. Please try again shortly or visit https://LBC-HUB.COM." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send();
  };

  return (
    <>
      <button
        ref={openBtnRef}
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close LBC AI chat' : 'Open LBC AI chat'}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="LBC AI chat"
          ref={panelRef}
          className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-[400px] rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          style={{ maxHeight: 'min(70vh, 560px)' }}
        >
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-300" />
            <h3 className="text-white text-sm font-semibold">LBC AI</h3>
            <span className="ml-auto text-[11px] text-white/35">Ecosystem navigator</span>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/5 text-white/80 border border-white/10'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2">
                  <Loader2 className="w-4 h-4 text-white/50 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {messages.length <= 2 && !isLoading && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {GUIDED.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => send(g)}
                  className="px-3 py-1.5 min-h-[36px] rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-white/65 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  {g}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="border-t border-white/10 p-3 flex gap-2">
            <label htmlFor="lbc-ai-input" className="sr-only">
              Ask LBC AI
            </label>
            <input
              id="lbc-ai-input"
              ref={inputRef}
              type="text"
              value={input}
              maxLength={500}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about LBC..."
              disabled={isLoading}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:border-violet-500/50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}