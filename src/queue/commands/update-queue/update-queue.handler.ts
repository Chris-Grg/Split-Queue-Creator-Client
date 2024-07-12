import { BadRequestException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { QueueService } from "src/queue/queue.service";
import { UpdateQueueCommand } from "./update-queue.command";

@CommandHandler(UpdateQueueCommand)
export class UpdateQueueCommandHandler implements ICommandHandler<UpdateQueueCommand> {
    constructor(
        private queueService: QueueService

    ) { }
    async execute(command: UpdateQueueCommand) {
        try {
            return await this.queueService.updateQueue(command)

        } catch (error) {
            throw new BadRequestException(error)
        }

    }
}