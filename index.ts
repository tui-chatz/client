import { app } from "./src/views/app";
import { renderer } from "./src/views/renderer";
import { createUserContainer } from "./src/views/create-user";
import { Client } from "./src/tcp/client";
import { UserConfigValidation } from "./src/validations/user-config";

const isValidUser = UserConfigValidation.validateIfExists();

if (!isValidUser) {
    renderer.root.add(createUserContainer);
}

export const client: Client = new Client();
client.connect();

if (isValidUser) {
    renderer.root.add(app);
}