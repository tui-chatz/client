import { style } from "../../..";

export function Commands() {
    return (
        <box borderStyle="rounded" borderColor={style.get().secondary}>
            <text fg={style.get().secondary}>
                Commands:
                (Shift+m) Open menu |
                (Shift+q) Quit 
            </text>
        </box>
    );
}