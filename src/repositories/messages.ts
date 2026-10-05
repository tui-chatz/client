import fs from "node:fs";

export class MessagesRepository {
    private static path: string = process.cwd() + '/messages.json';

    public static exists(): boolean {
        return fs.existsSync(this.path);
    }

    public static save(message: any): void {
        if (!this.exists()) {
            fs.writeFileSync(this.path, JSON.stringify([]));
        }
        const messages = this.get();
        messages.push(message);
        fs.writeFileSync(this.path, JSON.stringify(messages, null, 2));
    }

    public static get(): any[] {
        if (!this.exists()) {
            fs.writeFileSync(this.path, JSON.stringify([]));
        }
        return JSON.parse(fs.readFileSync(this.path, 'utf-8'));
    }
}
