import { Dispatch, SetStateAction } from "react";
import { logo } from "../../public/logo";
import { style } from "../../..";

type Props = {
    setStart: Dispatch<SetStateAction<boolean>>
}

export function Logo({
    setStart
}: Props) {
    return (
        <box 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center"
            borderStyle="rounded"
            borderColor={style.get().secondary}
            height='100%'
            backgroundColor={style.get().backgroundColor}
        >
            <text fg={style.get().primary} >{logo}</text>
            <box flexDirection="row">
                <text fg={style.get().secondary}>Press any key to continue...</text>
                <input 
                    focused
                    onInput={() => setStart(true)}
                />
            </box>
        </box>
    )
}