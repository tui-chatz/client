import fs from "node:fs";

export namespace UserConfig {
    export function validate(): boolean {
        const path = process.cwd() + '/config.json';
        console.log('debug: path >>', path);
        const configExists = fs.existsSync(path);
        if (!configExists) fs.writeFileSync(path, JSON.stringify({}, null, 2));
        const config = JSON.parse(fs.readFileSync(path, "utf-8"));
        console.log('debug: config >>', config);
        return config.username ? true : false;
    }

    export function save(username: string, nickname: string): void {
        const path = process.cwd() + '/config.json';
        const config = {
            username,
            nickname
        };
        fs.writeFileSync(path, JSON.stringify(config, null, 2));
    }

    export function get(): { username: string; nickname: string } {
        const path = process.cwd() + '/config.json';
        const config = JSON.parse(fs.readFileSync(path, "utf-8"));
        return {
            username: config.username || '',
            nickname: config.nickname || ''
        };
    }
}