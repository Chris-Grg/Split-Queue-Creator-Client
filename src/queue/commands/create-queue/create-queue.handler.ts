import { BadRequestException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { CreateQueueCommand } from "./create-queue.command";


@CommandHandler(CreateQueueCommand)
export class CreateQueueCommandHandler implements ICommandHandler<CreateQueueCommand> {
    constructor(
        private amiService: AmiService
    ) {

    }
    async execute(command: CreateQueueCommand) {
        try {
            return await this.amiService.createQueue(command.queue, command.extension)
        } catch (error) {
            throw new BadRequestException(error)
        }

    }
}