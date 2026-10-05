import { TextareaRenderable, BoxRenderable } from '@opentui/core';
import { renderer } from '../renderer'
import { client } from '../../../index'
import { UserConfig } from '../../config/user-config'

const { username, nickname } = UserConfig.get();

const message = new BoxRenderable(renderer, {
    id: 'message',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
    title: 'message'
})

const textArea = new TextareaRenderable(renderer, {
    onSubmit: () => {
        let value: { sender: string; message: string } = { sender: nickname, message: textArea.plainText };
        client.sendMessage(JSON.stringify(value));
        textArea.clear();
    },
    keyBindings: [{ name: 'return', action: 'submit' }]
});

message.add(textArea);

export { message };