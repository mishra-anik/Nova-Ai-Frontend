import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
	transports: ["websocket"],
	withCredentials: true,
});

const ChatInterface = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const containerRef = useRef(null);

	useEffect(() => {
		socket.on("ai-response", (data) => {
			setMessages((prev) => [
				...prev,
				{ text: data.response, role: "ai", timestamp: new Date() },
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
		<main className='flex-1 bg-[#273449]  flex justify-center items-start py-[4rem] md:py-10  overflow-hidden'>
			<div className='w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-[#273a57] rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col h-[85vh] relative'>
				<h1 className='text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-3'>
					✨ Ask, Discover & Connect ✨
				</h1>

				{/* Messages */}
				<div
					ref={containerRef}
					className='flex-1 overflow-y-auto border border-gray-600 rounded-lg p-3 bg-[#2f3b52] shadow-inner flex flex-col space-y-2'
				>
					{messages.length === 0 ? (
						<p className='text-gray-400 text-sm text-center'>
							No messages yet...
						</p>
					) : (
						messages.map((msg, index) => (
							<div
								key={index}
								className={`inline-block w-[85%] md:w-[70%] break-words px-3 py-2 rounded-lg shadow text-[1rem] ${
									msg.role === "user"
										? "bg-[#3B475E] text-white self-end ml-auto"
										: "bg-gradient-to-r from-gray-600 to-gray-700 text-white self-start mr-auto"
								}`}
							>
								<p className='whitespace-pre-wrap'>
									{msg.text}
								</p>
								<span className='text-xs text-gray-300 mt-1 block text-right'>
									{formatTime(msg.timestamp)}
								</span>
							</div>
						))
					)}
				</div>

				{/* Input (pinned bottom) */}
				<div className='flex items-center space-x-2 sticky bottom-0 bg-[#273a57] pt-3'>
					<textarea
						placeholder='Type your message...'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className='flex-1 h-[3rem] max-h-[6rem] resize-none overflow-y-auto px-3 py-2 border border-gray-500 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
              placeholder-gray-300 bg-[#273a57] text-white'
					/>
					<button
						onClick={handleSend}
						className='px-3 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow'
					>
						Send
					</button>
				</div>
			</div>
		</main>
	);
};

export default ChatInterface;
