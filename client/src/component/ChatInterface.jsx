import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { Send, Plus, Paperclip } from "lucide-react";

const socket = io(import.meta.env.VITE_API_URL, {
  transports: ["websocket"],
  withCredentials: true,
});

const ChatInterface = ({ messages, setMessages }) => {
  const [input, setInput] = useState("");
  const containerRef = useRef(null);

  // Function to convert response to plain text
  const sanitizeText = (text) => {
    if (!text) return "";
    // Remove HTML tags
    let sanitized = text.replace(/<[^>]*>/g, "");
    // Decode HTML entities
    sanitized = sanitized
      .replace(/&nbsp;/g, " ")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");
    // Remove markdown formatting but keep content
    sanitized = sanitized
      .replace(/\*\*/g, "") // bold
      .replace(/\*/g, "") // italic
      .replace(/`/g, "") // code
      .replace(/#{1,6}\s/g, "") // headers
      .replace(/\n\n+/g, "\n") // multiple newlines to single
      .trim();
    return sanitized;
  };

  useEffect(() => {
    socket.on("ai-response", (data) => {
      setMessages((prev) => [
        ...prev,
        { text: sanitizeText(data.response), role: "ai", timestamp: new Date() },
      ]);
    });
    return () => socket.off("ai-response");
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { text: input, role: "user", timestamp: new Date() },
    ]);
    socket.emit("ai-prompt", input);
    setInput("");
  };

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <main className="flex-1 md:p-8 bg-[#273449] flex justify-center items-start overflow-hidden w-full ">
      <div className="w-full sm:w-[95%] md:w-[75%] lg:w-[65%] xl:w-[55%] bg-[#273a57] rounded-lg sm:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 flex flex-col h-screen md:h-[90vh] relative gap-3 py-8">
        <h1 className="text-base sm:text-lg md:text-2xl font-bold text-white text-center flex-shrink-0">
          ✨ Ask, Discover & Connect ✨
        </h1>

        {/* Messages Container */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto rounded-lg p-3 sm:p-4 md:p-6 bg-[#1e2939] shadow-inner flex flex-col space-y-3 md:space-y-4 min-h-0"
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-400 text-sm md:text-base mb-2">
                No messages yet...
              </p>
              <p className="text-gray-500 text-xs md:text-sm max-w-md">
                Start a conversation with Nova AI by typing your message below
              </p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-md ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-br-none"
                      : "bg-[#2f3b52] text-gray-100 border border-gray-600 rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words text-sm md:text-base leading-relaxed font-normal">
                    {msg.text}
                  </p>
                  <span className={`text-xs mt-2 block text-right ${
                    msg.role === "user" ? "text-indigo-100" : "text-gray-400"
                  }`}>
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#1e2939] to-[#273a57] rounded-xl border border-gray-600 shadow-lg p-1">
          <div className="flex items-end gap-2 p-3">
            <button className="p-2 rounded-lg hover:bg-[#2a3a4a] transition flex-shrink-0 text-gray-400 hover:text-white">
              <Plus size={20} />
            </button>
            
            <textarea
              placeholder="Message Nova AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="flex-1 max-h-[120px] resize-none overflow-y-auto px-3 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm leading-relaxed"
              rows="1"
              style={{ minHeight: "40px" }}
            />
            
            <button className="p-2 rounded-lg hover:bg-[#2a3a4a] transition flex-shrink-0 text-gray-400 hover:text-white">
              <Paperclip size={20} />
            </button>

            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition flex-shrink-0"
            >
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatInterface;
