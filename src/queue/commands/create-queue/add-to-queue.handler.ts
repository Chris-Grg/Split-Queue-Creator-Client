import { BadRequestException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { AddToQueueCommand } from "./add-to-queue.command";


@CommandHandler(AddToQueueCommand)
export class AddToQueueCommandCommandHandler implements ICommandHandler<AddToQueueCommand> {
    constructor(
        private amiService: AmiService
    ) {

    }
    async execute(command: AddToQueueCommand) {
        try {
            return await this.amiService.addToQueue(command.queue, command.extension)
        } catch (error) {
            throw new BadRequestException(error)
        }

    }
}