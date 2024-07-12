import { BadRequestException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { QueueService } from "src/queue/queue.service";
import { CreateQueueCommand } from "./create-queue.command";


@CommandHandler(CreateQueueCommand)
export class CreateQueueCommandHandler implements ICommandHandler<CreateQueueCommand> {
    constructor(
        private queueService: QueueService
    ) {

    }
    async execute(command: CreateQueueCommand) {
        try {
            return await this.queueService.createQueue(command)
        } catch (error) {
            throw new BadRequestException(error)
        }

    }
}