import { Dispatch, SetStateAction, useState } from "react";
import type { Client } from "../../infra/client";
import { Observer } from "../../patterns/observer/observer";
import { client, style } from "../../..";
import { UserConfigRepository } from "../../repositories/user-config";
import { TUserConfig } from "../../types/user-config";

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

    const { username, nickname }: TUserConfig = UserConfigRepository.get();

    return (
        <box 
            borderColor={style.get().secondary}
            borderStyle="rounded" 
            width="75%" 
            title={`Painel - ${username} [${nickname}]`}
        >
            {messages.map((msg, index) => (
                <text key={index}>{msg}</text>
            ))}
        </box>
    )
}