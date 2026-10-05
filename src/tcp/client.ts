import net from "node:net";

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
            console.log(`Connected to server at ${process.env.TUI_CHAT_SERVER_HOST}:${process.env.TUI_CHAT_SERVER_PORT}`);
        }).setEncoding("utf-8");

        this.recieveMessage();
        this.errorHandler();
        this.endHandler();
    }

    private recieveMessage(): void {
        this.socket.on("data", (data) => {
            console.log(`Received: ${data.toString()}`);
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

    public sendMessage(message: string): void {
        this.socket.write(message);
    }

    public disconnect(): void {
        this.socket.end();
    }
}