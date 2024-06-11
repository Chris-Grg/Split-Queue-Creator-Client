import { ICommand } from "@nestjs/cqrs";
export declare class PauseQueueCommand implements ICommand {
    readonly queue: string;
    readonly extension: string;
    readonly reason: string;
    constructor(queue: string, extension: string, reason: string);
}
