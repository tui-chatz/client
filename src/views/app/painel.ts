import { BoxRenderable, TextRenderable } from "@opentui/core";
import { renderer } from "../renderer";
import { UserConfigRepository } from "../../repositories/user-config";
import { MessagesRepository } from "../../repositories/messages";

const { username, nickname } = UserConfigRepository.get();

const painel = new BoxRenderable(renderer, {
    id: 'painel',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
    width: '75%',
    title: `Painel - ${username} (${nickname})`
});

const text = new TextRenderable(renderer, {
    id: 'text',
    content: MessagesRepository
        .get()
        .map((message) => `[${message.sender}] > ${message.message}`)
        .join('\n')
});

painel.add(text);

export { painel };