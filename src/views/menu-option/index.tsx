import { Dispatch, SetStateAction } from "react";
import { TRenderScreen } from "../../types/render-screen";
import { style } from "../../../";
import { useKeyboard } from "@opentui/react";
import { useState } from "react";
import { KeyEvent, Selection, SelectOption, SelectRenderableOptions } from "@opentui/core";
import { useSelectionHandler } from "@opentui/react";
import { Commands } from "../components/commands";

type Props = {
    setRenderScreen: Dispatch<SetStateAction<TRenderScreen>>;
};

export function MenuOption({ setRenderScreen }: Props) {
    useKeyboard((e: KeyEvent) => {
        if (e.name === "q" && e.shift) {
            setRenderScreen("app");
        }
    });

    const initialOptions: SelectOption[] = [
        { name: 'Theme', description: 'Configure the application theme (in implementation)', value: 'theme' },
        { name: 'User', description: 'Configure the user settings (not implemented)', value: 'user' },
        { name: 'Language', description: 'Configure the language settings (not implemented)', value: 'language' },
    ];

    const themeOptions: SelectOption[] = [
        { name: 'return', description: 'Return to the main options', value: 'return' },
        { name: 'Default', description: 'Default theme', value: 'theme.default' },
        { name: 'Dark', description: 'Dark theme', value: 'theme.dark' },
    ];
    
    const [options, setOptions] = useState<SelectOption[]>(initialOptions);

    function handleSelect(indexOption: number) {
        console.log('Debug: Selected option >>', indexOption);
        const selectedOption = options[indexOption].value;
        console.log('Debug: Selected option details >>', selectedOption);
        
        switch (selectedOption) {
            case 'theme':
                setOptions(themeOptions);
                break;
            case 'theme.default':
                console.log('Debug: Selected theme >> Default');
                style.set('default');
                break;
            case 'theme.dark':
                console.log('Debug: Selected theme >> Dark');
                style.set('dark');
                break;
            case 'return':
                setOptions(initialOptions);
                break;
        
            default:
                break;
        }
    }

    return (
        <box
            backgroundColor={style.get().backgroundColor}
            height="100%"
            justifyContent="center"
            alignItems="center"
        >
            <Commands />
            <box 
                borderStyle="rounded" 
                borderColor={style.get().secondary}
                title="Options"
                width="50%"
                height="80%"
            >
                <select
                    focusedBackgroundColor={style.get().backgroundColor}
                    selectedBackgroundColor={style.get().secondary}
                    selectedTextColor={style.get().text.primary}
                    textColor={style.get().text.secondary}
                    descriptionColor={style.get().text.tertiary}
                    id="styled-menu"
                    height='100%'
                    options={options}
                    onSelect={(e) => handleSelect(e)}
                    focused
                ></select>
                {/**<text selectable>teste 1</text>
                <text selectable>teste 2</text>
                <text selectable>teste 3</text>
                <text selectable>teste 4</text>
                <text selectable>teste 5</text> */}
            </box>
        </box>
    )
}