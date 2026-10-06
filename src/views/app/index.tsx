// import { BoxRenderable } from "@opentui/core";
// import { renderer } from "../renderer";
// import { header } from "./header";
// import { sidebar } from "./sidebar";
// import { painel } from "./painel";
// import { message } from "./message";
// 
// const app = new BoxRenderable(renderer, {
//     id: 'app',
//     borderColor: '#ffffffaa',
//     width: '100%',
//     height: '100%',
//     borderStyle: 'rounded',
// })
// 
// const divisor = new BoxRenderable(renderer, {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     height: '100%'
// });
// 
// app.add(header);
// divisor.add(sidebar);
// divisor.add(painel);
// app.add(divisor);
// app.add(message);
// 

import { Header } from "./header";
import { Message } from "./message";
import { Painel } from "./painel";
import { Sidebar } from "./sidebar";

// export { app };
export function App() {
    return (
        <box 
            borderColor="#ffffffaa" 
            borderStyle="rounded" 
            width="100%" 
            height="100%"
        >
            <Header />
            <box flexDirection="row" justifyContent="space-between" height="100%">
                <Sidebar />
            <Painel />
            </box>
            <Message></Message>
        </box>
    )
}