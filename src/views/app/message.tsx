import { client } from "../../..";
import { UserConfigRepository } from "../../repositories/user-config";
import { TMessage } from "../../types/message";
import { useEffect, useState } from "react";

export function Message() {
    const { username, nickname } = UserConfigRepository.get();
    const [contentTextarea, setContentTextarea] = useState<string>(""); 

    useEffect(() => {
        console.log("Content textarea updated:", contentTextarea);
    }, [contentTextarea]);

    const handleSubmit = (plainText: string): void => {
        console.log("Submitting message:", plainText);
        let value: TMessage = {
            sender: nickname,
            message: plainText,
            action: "message"
        };
        client.sendMessage(value);
        setContentTextarea("");
    };


    return (
        <box
            borderColor="#ffffffaa"
            borderStyle="rounded"
            title="message"
        >
            <input 
                focused={true}
                onInput={(event) => setContentTextarea(event)}
                onChange={handleSubmit}
                value={contentTextarea}
            />
        </box>
    )
}