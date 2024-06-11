import { ICommand } from "@nestjs/cqrs";
export declare class CreateQueueCommand implements ICommand {
    readonly queue: string;
    readonly extension: string;
    constructor(queue: string, extension: string);
}
