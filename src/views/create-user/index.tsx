import { useState } from "react";
import { UserConfigRepository } from "../../repositories/user-config";
import { style } from "../../..";

export function CreateUser() {
    const [focus, setFocus] = useState<'username' | 'nickname'>('username');
    const [username, setUsername] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = (): void => {
        const config = { username, nickname };
        UserConfigRepository.save(config);
        setSuccess(true);
    };

    return (
        <box
            backgroundColor={style.get().backgroundColor}
            height="100%"
        >
            <box
            id="create-user"
            borderStyle="rounded"
            borderColor={style.get().secondary}
            title="Create User"
        >
            {!success && <text fg={style.get().warning}>User does not exist. Please create a user for yourself.</text>}
            {success && <text fg={style.get().success}>Configuration saved successfully! Reinitialize the application to apply changes.</text>}
            <box
                id="username-label"
                borderStyle="rounded"
                borderColor={style.get().secondary}
                title="user name"
            >
                <input 
                    id="username-input" 
                    placeholder="Enter your username" 
                    focused={focus === 'username'}
                    value={username}
                    onInput={(value: string) => setUsername(value)}
                    onChange={() => setFocus('nickname')}
                />
            </box>
            <box
                id="nickname-label"
                borderStyle="rounded"
                borderColor={style.get().secondary}
                title="nick name"
            >
                <input 
                    id="nickname-input" 
                    placeholder="Enter your nickname" 
                    focused={focus === 'nickname'}
                    value={nickname}
                    onInput={(value: string) => setNickname(value)}
                    onChange={handleSubmit}
                />
            </box>
        </box>
        </box>
    );
}