import { BadRequestException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { QueueService } from "src/queue/queue.service";
import { DeleteQueueCommand } from "./delete-queue.command";



@CommandHandler(DeleteQueueCommand)
export class DeleteQueueCommandHandler implements ICommandHandler<DeleteQueueCommand> {
    constructor(
        private queueService: QueueService
    ) {

    }
    async execute(command: DeleteQueueCommand) {
        try {
            return await this.queueService.deleteQueue(command.queue_name)
        } catch (error) {
            throw new BadRequestException(error)
        }

    }
}