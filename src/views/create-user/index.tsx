// import { BoxRenderable, InputRenderable, InputRenderableEvents, TextRenderable } from "@opentui/core";
// import { renderer } from "../renderer";
// import { UserConfigRepository } from "../../repositories/user-config";
// import type { TUserConfig } from "../../types/user-config";
// 
// const createUserContainer = new BoxRenderable(renderer, {
//     id: 'create-user',
//     borderColor: '#ffffffaa',
//     borderStyle: 'rounded',
//     title: 'create user',
// });
// 
// const message = new TextRenderable(renderer, {
//     id: 'message',
//     content: 'User does not exist. Please create a user for yourself.'
// }); 
// 
// const usernameLabel = new BoxRenderable(renderer, {
//     id: 'username-label',
//     borderColor: '#ffffffaa',
//     borderStyle: 'rounded',
//     title: 'user name',
// });
// const usernameInput = new InputRenderable(renderer, {
//     id: 'username-input',
//     placeholder: 'Enter your username',
// });
// 
// const nicknameLabel = new BoxRenderable(renderer, {
//     id: 'nickname-label',
//     borderColor: '#ffffffaa',
//     borderStyle: 'rounded',
//     title: 'nick name',
// });
// 
// const nicknameInput = new InputRenderable(renderer, {
//     id: 'nickname-input',
//     placeholder: 'Enter your nickname',
// });
// 
// const configThank = new TextRenderable(renderer, {
//     id: 'config-thank',
//     content: 'Configuration saved successfully! Reinitialize the application to apply changes.',
//     fg: '#00ff00'
// }); 
// 
// const userConfig: TUserConfig = { username: '', nickname: '' };
// 
// usernameInput.on(InputRenderableEvents.CHANGE, (value: string) => {
//   userConfig.username = value;
// }).on(InputRenderableEvents.ENTER, () => {
//   nicknameInput.focus();
// })
// 
// nicknameInput.on(InputRenderableEvents.ENTER, (value: string) => {
//   userConfig.nickname = value.toLowerCase().replaceAll(' ', '_');
//   const config = { username: userConfig.username, nickname: userConfig.nickname };
//   UserConfigRepository.save(config);
//   createUserContainer.add(configThank);
// })
// 
// usernameInput.focus();
// 
// createUserContainer.add(message);
// usernameLabel.add(usernameInput);
// nicknameLabel.add(nicknameInput);
// createUserContainer.add(usernameLabel);
// createUserContainer.add(nicknameLabel);
// 
// export { createUserContainer };

import { useState } from "react";
import { UserConfigRepository } from "../../repositories/user-config";

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
            id="create-user"
            borderStyle="rounded"
            borderColor="#ffffffaa"
            title="Create User"
        >
            {!success && <text fg="#ffff00">User does not exist. Please create a user for yourself.</text>}
            {success && <text fg="#00ff00">Configuration saved successfully! Reinitialize the application to apply changes.</text>}
            <box
                id="username-label"
                borderStyle="rounded"
                borderColor="#ffffffaa"
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
                borderColor="#ffffffaa"
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
    );
}