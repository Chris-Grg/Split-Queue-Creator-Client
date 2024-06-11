import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { PauseQueueCommand } from "./pause-queue.command";

@CommandHandler(PauseQueueCommand)
export class PauseQueueCommandHandler implements ICommandHandler<PauseQueueCommand> {
    constructor(
        private amiService: AmiService
    ) { }
    async execute(command: PauseQueueCommand): Promise<any> {
        return await this.amiService.pauseQueueMember(command)

    }
}