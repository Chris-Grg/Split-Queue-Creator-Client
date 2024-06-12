import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { RemoveQueueMember } from "./remove-queue.command";

@CommandHandler(RemoveQueueMember)
export class RemoveQueueMemberHandler implements ICommandHandler<RemoveQueueMember> {
    constructor(
        private amiService: AmiService
    ) { }
    async execute(command: RemoveQueueMember): Promise<any> {
        return this.amiService.removeQueueMember(command)

    }
}