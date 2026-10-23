import fs from "node:fs";
import type { TMessage } from "../types/message";

export class MessagesRepository {
    private static path: string = process.cwd() + '/messages.json';

    public static exists(): void {
        const exists = fs.existsSync(this.path);
        if (!exists) {
            fs.writeFileSync(this.path, JSON.stringify([]));
        }
    }

    public static save(message: TMessage): void {
        this.exists();
        const messages = this.get();
        messages.push(message);
        fs.writeFileSync(this.path, JSON.stringify(messages, null, 2));
    }

    public static saveAll(messages: TMessage[]): void {
        this.exists();
        fs.writeFileSync(this.path, JSON.stringify(messages, null, 2));
    }

    public static get(): TMessage[] {
        this.exists();
        return JSON.parse(fs.readFileSync(this.path, 'utf-8')) as TMessage[];
    }
}
