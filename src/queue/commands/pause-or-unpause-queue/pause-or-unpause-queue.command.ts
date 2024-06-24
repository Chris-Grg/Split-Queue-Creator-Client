import { ICommand } from "@nestjs/cqrs";

export class PauseQueueCommand implements ICommand {
    constructor(
        public readonly queue: string,
        public readonly extension: string,
        public readonly reason: string,
        public readonly pause: boolean

    ) {


    }
}