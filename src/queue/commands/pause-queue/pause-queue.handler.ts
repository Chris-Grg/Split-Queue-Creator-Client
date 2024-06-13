import { BadRequestException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { PauseQueueCommand } from "./pause-queue.command";

@CommandHandler(PauseQueueCommand)
export class PauseQueueCommandHandler implements ICommandHandler<PauseQueueCommand> {
    constructor(
        private amiService: AmiService
    ) { }
    async execute(command: PauseQueueCommand) {
        try {
            return await this.amiService.pauseQueueMember(command)
        } catch (error) {
            throw new BadRequestException(error)
        }

    }
}