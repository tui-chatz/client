import { BoxRenderable, TextRenderable } from "@opentui/core";
import { renderer } from "../renderer";

const header = new BoxRenderable(renderer, {
    id: 'header',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
});

const headerText = new TextRenderable(renderer, {
    id: 'header-text',
    content: 'TUI Chat',
    fg: '#ffffff'
});

header.add(headerText);

export { header };