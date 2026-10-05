import { UserConfigRepository } from "../repositories/user-config";

export namespace UserConfigValidation {
    export function validateIfExists(): boolean {
        const path = process.cwd() + '/config.json';
        console.log('debug: path >>', path);
        const configExists = UserConfigRepository.exists();
        if (!configExists) UserConfigRepository.save({ username: '', nickname: '' });
        const config = UserConfigRepository.get();
        console.log('debug: config >>', config);
        return config.username ? true : false;
    }
}