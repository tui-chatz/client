import { Header } from "./header";
import { Message } from "./message";
import { Painel } from "./painel";
import { Sidebar } from "./sidebar";

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