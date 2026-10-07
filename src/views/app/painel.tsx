import { Dispatch, SetStateAction, useState } from "react";
import type { Client } from "../../infra/client";
import { Observer } from "../../patterns/observer/observer";
import { client } from "../../..";

class PainelObserver implements Observer {
    constructor(
        private setMessages: Dispatch<SetStateAction<string[]>>
    ) {}
    update(client: Client): void {
        this.setMessages(
            client.getMessages()
                .map(msg => `[${msg.sender}]:: ${msg.message}`)
        );
    }

}

export function Painel() {
    const [messages, setMessages] = useState<string[]>([]);

    const painelObserver: PainelObserver = new PainelObserver(setMessages);

    client.subscribe(painelObserver);

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