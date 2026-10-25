import type { TMessage } from './message';
import type { TUserConfig } from './user-config';

export type TRoom = {
    id: string;
    name: string;
    users: TUserConfig[]
    messages: TMessage[]
};