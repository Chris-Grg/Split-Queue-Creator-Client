import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateQueueCommand } from "./create-queue.command";
import { AmiService } from "src/ami/ami.service";


@CommandHandler(CreateQueueCommand)
export class CreateQueueCommandHandler implements ICommandHandler<CreateQueueCommand>
{
    constructor(
        private amiService: AmiService
    ){
        
    }
    async execute(command: CreateQueueCommand): Promise<any> {
        return await this.amiService.createQueue(command.queue, command.extension)
        
    }
}