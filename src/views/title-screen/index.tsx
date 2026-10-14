import { Dispatch, SetStateAction } from "react";
import { TRenderScreen } from "../../types/render-screen";
import { logo } from "../../public/logo";
import { style } from "../../..";

type Props = {
    setRenderScreen: Dispatch<SetStateAction<TRenderScreen>>
}

export function TitleScreen({ setRenderScreen }: Props) {
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
                    onInput={() => setRenderScreen('app')}
                />
            </box>
        </box>
    )
}