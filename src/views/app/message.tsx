// import { TextareaRenderable, BoxRenderable } from '@opentui/core';
// import { renderer } from '../renderer'
// import { client } from '../../../index'
// import type { TMessage } from '../../types/message';
// import { UserConfigRepository } from '../../repositories/user-config';
// 
// const { username, nickname } = UserConfigRepository.get();
// 
// const message = new BoxRenderable(renderer, {
//     id: 'message',
//     borderColor: '#ffffffaa',
//     borderStyle: 'rounded',
//     title: 'message'
// })
// 
// const textArea = new TextareaRenderable(renderer, {
//     onSubmit: () => {
//         let value: TMessage = { 
//             sender: nickname, 
//             message: textArea.plainText,
//             action: "message"
//         };
//         client.sendMessage(value);
//         textArea.clear();
//     },
//     keyBindings: [{ name: 'return', action: 'submit' }]
// });
// 
// message.add(textArea);
// 
// export { message };

import { client } from "../../..";
import { UserConfigRepository } from "../../repositories/user-config";
import { TMessage } from "../../types/message";
import { useEffect, useState } from "react";

export function Message() {
    const { username, nickname } = UserConfigRepository.get();
    const [contentTextarea, setContentTextarea] = useState<string>(""); 

    useEffect(() => {
        console.log("Content textarea updated:", contentTextarea);
    }, [contentTextarea]);

    const handleSubmit = (plainText: string): void => {
        console.log("Submitting message:", plainText);
        let value: TMessage = {
            sender: nickname,
            message: plainText,
            action: "message"
        };
        client.sendMessage(value);
        setContentTextarea("");
    };


    return (
        <box
            borderColor="#ffffffaa"
            borderStyle="rounded"
            title="message"
        >
            <input 
                focused={true}
                onInput={(event) => setContentTextarea(event)}
                onChange={handleSubmit}
                value={contentTextarea}
            />
        </box>
    )
}