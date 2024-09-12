import { ICommand } from "@nestjs/cqrs";

export class AddToQueueCommand implements ICommand {
    constructor(
        public readonly queue: string,
        public readonly extension: string
    ) {


    }
}