import { UserConfigRepository } from "../repositories/user-config";

export namespace UserConfigValidation {
    export function validateIfExists(): boolean {
        const configExists = UserConfigRepository.exists();
        if (!configExists) UserConfigRepository.save({ username: '', nickname: '' });
        const config = UserConfigRepository.get();
        return config.username ? true : false;
    }
}