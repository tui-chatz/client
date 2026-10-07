import { Dispatch, SetStateAction } from "react";
import { logo } from "../../public/logo";

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
            borderColor='#04DFDB55'
            height='100%'
            backgroundColor='#061C33'
        >
            <text fg='#04DFDB' >{logo}</text>
            <box flexDirection="row">
                <text fg='#04DFDB55'>Press any key to continue...</text>
                <input 
                    focused
                    onInput={() => setStart(true)}
                />
            </box>
        </box>
    )
}