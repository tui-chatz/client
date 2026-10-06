import { useState } from "react";
import { eventEmitter } from "../../infra/event-emitter";
import { TMessage } from "../../types/message";

export function Painel() {
    const [messages, setMessages] = useState<string[]>([]);

    eventEmitter.on('renderizeNewMessages', (newMessages: TMessage[]) => {
        setMessages(newMessages.map(msg => `[${msg.sender}]:: ${msg.message}`));
    });

    return (
        <box 
            borderColor="#ffffffaa" 
            borderStyle="rounded" 
            width="75%" 
            title="Painel"
        >
            {messages.map((msg, index) => (
                <text key={index}>{msg}</text>
            ))}
        </box>
    )
}