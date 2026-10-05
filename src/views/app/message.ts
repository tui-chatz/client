import { TextareaRenderable, BoxRenderable } from '@opentui/core';
import { renderer } from '../renderer'
import { client } from '../../../index'
import type { TMessage } from '../../types/message';
import { UserConfigRepository } from '../../repositories/user-config';

const { username, nickname } = UserConfigRepository.get();

const message = new BoxRenderable(renderer, {
    id: 'message',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
    title: 'message'
})

const textArea = new TextareaRenderable(renderer, {
    onSubmit: () => {
        let value: TMessage = { 
            sender: nickname, 
            message: textArea.plainText,
            action: "message"
        };
        client.sendMessage(value);
        textArea.clear();
    },
    keyBindings: [{ name: 'return', action: 'submit' }]
});

message.add(textArea);

export { message };