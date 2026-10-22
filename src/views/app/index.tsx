import { Dispatch, SetStateAction, useState } from "react";
import { Header } from "./header";
import { Message } from "./message";
import { Painel } from "./painel";
import { Sidebar } from "./sidebar";
import { client, style } from "../../..";
import { KeyEvent } from "@opentui/core";
import { useKeyboard } from "@opentui/react";
import { TRenderScreen } from "../../types/render-screen";
import { Commands } from "../components/commands";

type Props = {
    setRenderScreen: Dispatch<SetStateAction<TRenderScreen>>;
};

export function App({ setRenderScreen }: Props) {
    client.connect();

    useKeyboard((e: KeyEvent) => {
        console.log('Debug: Key down event', e, {
            key: e.name,
            ctrl: e.ctrl,
            shift: e.shift,
            alt: e.option,
        });
        if (e.name === "m" && e.shift) {
            console.log('Debug: Shift+M pressed');
            setRenderScreen("menu-option");
        }
    });

    return (
        <box
            borderColor={style.get().secondary}
            backgroundColor={style.get().backgroundColor}
            borderStyle="rounded"
            width="100%"
            height="100%"
            title="ChaTUI"
        >
            <Commands />
            <box flexDirection="row" justifyContent="space-between" height="100%">
                <Sidebar />
                <Painel />
            </box>
            <Message />
        </box>
    )
}