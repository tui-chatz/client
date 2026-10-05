import { app } from "./src/views/app";
import { renderer } from "./src/views/renderer";
import { createUserContainer } from "./src/views/create-user";
import { Client } from "./src/tcp/client";
import { UserConfig } from "./src/config/user-config";

const isValidUser = UserConfig.validate();

if (!isValidUser) {
    renderer.root.add(createUserContainer);
}

export const client: Client = new Client();
client.connect();

if (isValidUser) {
    renderer.root.add(app);
}

// 
// 
// renderer.root.add(app);