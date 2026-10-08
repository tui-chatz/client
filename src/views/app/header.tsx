import { style } from "../../..";

export function Header() {
    return (
        <box 
            borderColor={style.get().secondary} 
            borderStyle="rounded"
        >
            <text fg={style.get().primary}>ChaTUI</text>
        </box>
    )
}