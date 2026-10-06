import net from "node:net";
import type { TMessage } from "../types/message";
import { UserConfigRepository } from "../repositories/user-config";
import { MessagesRepository } from "../repositories/messages";
import { eventEmitter } from "../infra/event-emitter";

export class Client {
    private socket: net.Socket;

    constructor() {
        this.socket = new net.Socket();
    }

    public connect(): void {
        this.socket = net.createConnection({ 
            port: Number(process.env.TUI_CHAT_SERVER_PORT), 
            host: process.env.TUI_CHAT_SERVER_HOST 
        }, () => {
            const { nickname } = UserConfigRepository.get();
            const message: TMessage = { 
                sender: nickname, 
                message: "connected", 
                action: "connection" 
            };
            this.sendMessage(message);
            console.log(`Connected to server at ${process.env.TUI_CHAT_SERVER_HOST}:${process.env.TUI_CHAT_SERVER_PORT}`);
        }).setEncoding("utf-8");

        this.recieveMessage();
        this.errorHandler();
        this.endHandler();
    }

    private recieveMessage(): void {
        this.socket.on("data", (data: string) => {
            let messagesRecivied: TMessage[] = JSON.parse(data.toString());
            MessagesRepository.saveAll(messagesRecivied);

            // Criar evento para atualizar a interface do usuário com a nova mensagem
            eventEmitter.emit("renderizeNewMessages", messagesRecivied);
            messagesRecivied = [];
        });
    }

    private errorHandler(): void {
        this.socket.on("error", (error) => {
            console.error(`Socket error: ${error.message}`);
        });
    }

    private endHandler(): void {
        this.socket.on("end", () => {
            console.log("Disconnected from server");
        });
    }

    public sendMessage(message: TMessage): void {
        this.socket.write(JSON.stringify(message));
    }

    public disconnect(): void {
        this.socket.end();
    }
}