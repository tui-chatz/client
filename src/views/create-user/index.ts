import { BoxRenderable, InputRenderable, InputRenderableEvents, TextRenderable } from "@opentui/core";
import { renderer } from "../renderer";
import { UserConfig } from "../../../config/user-config";

const createUserContainer = new BoxRenderable(renderer, {
    id: 'create-user',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
    title: 'create user',
});

const message = new TextRenderable(renderer, {
    id: 'message',
    content: 'User does not exist. Please create a user for yourself.'
}); 

const usernameLabel = new BoxRenderable(renderer, {
    id: 'username-label',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
    title: 'user name',
});
const usernameInput = new InputRenderable(renderer, {
    id: 'username-input',
    placeholder: 'Enter your username',
});

const nicknameLabel = new BoxRenderable(renderer, {
    id: 'nickname-label',
    borderColor: '#ffffffaa',
    borderStyle: 'rounded',
    title: 'nick name',
});

const nicknameInput = new InputRenderable(renderer, {
    id: 'nickname-input',
    placeholder: 'Enter your nickname',
});

const configThank = new TextRenderable(renderer, {
    id: 'config-thank',
    content: 'Configuration saved successfully! Reinitialize the application to apply changes.',
    fg: '#00ff00'
}); 

const user: { username: string; nickname: string } = { username: '', nickname: '' };
usernameInput.on(InputRenderableEvents.CHANGE, (value: string) => {
  console.log("Current value:", value)
  user.username = value;
}).on(InputRenderableEvents.ENTER, () => {
  nicknameInput.focus();
})

nicknameInput.on(InputRenderableEvents.ENTER, (value: string) => {
  console.log("Current value:", value)
  user.nickname = value.toLowerCase().replaceAll(' ', '_');
  UserConfig.save(user.username, user.nickname);
  createUserContainer.add(configThank);
})

usernameInput.focus();

createUserContainer.add(message);
usernameLabel.add(usernameInput);
nicknameLabel.add(nicknameInput);
createUserContainer.add(usernameLabel);
createUserContainer.add(nicknameLabel);

export { createUserContainer };