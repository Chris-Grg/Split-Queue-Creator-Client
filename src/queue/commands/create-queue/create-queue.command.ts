import { ICommand } from "@nestjs/cqrs";

export class CreateQueueCommand implements ICommand
{
    constructor(
        public readonly queue: string,
        public readonly extension: string
    ){
        

    }
}