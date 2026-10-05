import fs from "node:fs";
import type { TUserConfig } from "../types/user-config";

export class UserConfigRepository {
    private static path: string = process.cwd() + '/config.json';

    public static exists(): boolean {
        return fs.existsSync(this.path);
    }

    public static save(config: TUserConfig): void {
        if (!this.exists()) {
            fs.writeFileSync(this.path, JSON.stringify({}));
        }
        fs.writeFileSync(this.path, JSON.stringify(config, null, 2));
    }

    public static get(): TUserConfig {
        if (!this.exists()) {
            fs.writeFileSync(this.path, JSON.stringify({}));
        }
        return JSON.parse(fs.readFileSync(this.path, 'utf-8'));
    }
}
