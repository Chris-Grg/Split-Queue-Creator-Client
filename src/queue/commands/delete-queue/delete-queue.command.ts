import { ICommand } from "@nestjs/cqrs";

export class DeleteQueueCommand implements ICommand {
    constructor(
        public readonly queue_name: string,

    ) {


    }
}