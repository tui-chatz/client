import fs from "node:fs";
import type { TMessage } from "../types/message";

export class MessagesRepository {
    private static path: string = process.cwd() + '/messages.json';

    public static exists(): boolean {
        return fs.existsSync(this.path);
    }

    public static save(message: TMessage): void {
        if (!this.exists()) {
            fs.writeFileSync(this.path, JSON.stringify([]));
        }
        const messages = this.get();
        messages.push(message);
        fs.writeFileSync(this.path, JSON.stringify(messages, null, 2));
    }

    public static saveAll(messages: TMessage[]): void {
        if (!this.exists()) {
            fs.writeFileSync(this.path, JSON.stringify([]));
        }
        fs.writeFileSync(this.path, JSON.stringify(messages, null, 2));
    }

    public static get(): TMessage[] {
        if (!this.exists()) {
            fs.writeFileSync(this.path, JSON.stringify([]));
        }
        return JSON.parse(fs.readFileSync(this.path, 'utf-8')) as TMessage[];
    }
}
