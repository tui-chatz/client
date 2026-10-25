export type TMessage = {
    id: string;
    sender: string;
    message: string;
    action: 'connection' | 'message';
    timestamp: number;
}