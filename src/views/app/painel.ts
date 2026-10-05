import { BoxRenderable, TextRenderable } from "@opentui/core";
import { renderer } from "../renderer";
import { UserConfig } from "../../../config/user-config";

const { username, nickname } = UserConfig.get();

const painel = new BoxRenderable(renderer, {
    id: 'painel',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
    width: '75%',
    title: `Painel - ${username} (${nickname})`
});

const text = new TextRenderable(renderer, {
    id: 'text',
    content: 'Not implemented'
});

painel.add(text);

export { painel };