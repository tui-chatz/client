// import { BoxRenderable, TextRenderable } from "@opentui/core";
// import { renderer } from "../renderer";
// 
// const sidebar = new BoxRenderable(renderer, {
//     id: 'sidebar',
//     borderColor: '#ffffffaa',
//     borderStyle: 'rounded',
//     width: '25%',
//     title: 'contacts'
// });
// 
// const text = new TextRenderable(renderer, {
//     id: 'text',
//     content: 'Not implemented'
// });
// 
// sidebar.add(text);
// 
// export { sidebar };
export function Sidebar() {
    return (
        <box 
            borderColor="#ffffffaa" 
            borderStyle="rounded" 
            width="25%"
            title="contacts"
        >
            <text>Not implemented</text>
        </box>
    )
}