import {useRef} from "react";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";

        setChatHistory(history => [...history, { role: "user", text: userMessage }]);

        setTimeout(() => {
            setChatHistory((history => [...history, { role: "model", text: "..." }]));

            generateBotResponse([...chatHistory, { role: "user", text:`Usando los detalles proporcionados arriba, por favor responde a esta consulta. Si no se te pide localidad o datos de contacto, espera a que se te pidan: ${userMessage}` }]); 
            }, 600);
    };
    return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Escribe." className="message-input" required />
        <button className="material-symbols-rounded">arrow_upward</button>
    </form>
    );
};

export default ChatForm;
