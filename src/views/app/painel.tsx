// import { BoxRenderable, TextRenderable } from "@opentui/core";
// import type { TMessage } from "../../types/message";
// import { renderer } from "../renderer";
// import { UserConfigRepository } from "../../repositories/user-config";
// import { MessagesRepository } from "../../repositories/messages";
// import { eventEmitter } from "../../infra/event-emitter";
// 
// const { username, nickname } = UserConfigRepository.get();
// 
// const painel = new BoxRenderable(renderer, {
//     id: 'painel',
//     borderColor: '#ffffffaa',
//     borderStyle: 'rounded',
//     width: '75%',
//     title: `Painel - ${username} (${nickname})`
// });
// 
// eventEmitter.on("newMessage", (messages: TMessage[]) => {
//     //const text = new TextRenderable(renderer, {
//     //    id: 'text',
//     //    content: messages
//     //        .map((message) => `[${message.sender}] > ${message.message}`)
//     //        .join('\n')
//     //});
//     //painel.remove(text);
//     //painel.add(text);
//     for (const message of messages) {
//         const text = new TextRenderable(renderer, {
//             id: `text-${message.sender}-${Date.now()}`,
//             //content: `[${message.sender}] > ${message.message}`
//             content: `[${message.sender}] > ${message.message}`
//         });
//         painel.add(text);
//     }
// });
// 
// export { painel };

export function Painel() {
    return (
        <box 
            borderColor="#ffffffaa" 
            borderStyle="rounded" 
            width="75%" 
            title="Painel"
        >
            <text>Not implemented</text>
        </box>
    )
}