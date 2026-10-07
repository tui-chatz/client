import net from "node:net";
import type { TMessage } from "../types/message";
import { UserConfigRepository } from "../repositories/user-config";
import { MessagesRepository } from "../repositories/messages";
import { Observer } from "../patterns/observer/observer";
import { Subject } from "../patterns/observer/subject";

export class Client implements Subject {
    private socket: net.Socket;
    private observers: Observer[] = [];
    private messages: TMessage[] = [];

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

    public getMessages(): TMessage[] {
        return this.messages;
    }

    private recieveMessage(): void {
        this.socket.on("data", (data: string) => {
            const messagesRecivied: TMessage[] = JSON.parse(data.toString());
            this.messages = messagesRecivied;
            MessagesRepository.saveAll(messagesRecivied);
            this.notify();
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

    public subscribe(...observers: Observer[]): void {
        for (const observer of observers) {
            if (this.observers.includes(observer)) continue;
            this.observers.push(observer);
        }
    }

    public unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(ob => ob !== observer);
    }

    public notify(): void {
        for (const observer of this.observers) observer.update(this);
    }
}