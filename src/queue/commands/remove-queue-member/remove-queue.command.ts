import { ICommand } from "@nestjs/cqrs";

export class RemoveQueueMember implements ICommand
{
    constructor(
        public readonly queue: string,
        public readonly extension: string,

    ){
        

    }
}