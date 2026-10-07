import { useState } from "react";
import { Header } from "./header";
import { Message } from "./message";
import { Painel } from "./painel";
import { Sidebar } from "./sidebar";
import { Logo } from "./logo";
import { client } from "../../..";

export function App() {
    const [start, setStart] = useState<boolean>(false);

    if (!start) return <Logo setStart={setStart} />

    client.connect();

    return (
        <box 
            borderColor="#ffffffaa" 
            borderStyle="rounded" 
            width="100%" 
            height="100%"
            title="ChaTUI"
        >
            <box flexDirection="row" justifyContent="space-between" height="100%">
                <Sidebar />
            <Painel />
            </box>
            <Message></Message>
        </box>
    )
}