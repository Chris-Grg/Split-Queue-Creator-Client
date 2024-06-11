import { ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { RemoveQueueMember } from "./remove-queue.command";
export declare class RemoveQueueMemberHandler implements ICommandHandler<RemoveQueueMember> {
    private amiService;
    constructor(amiService: AmiService);
    execute(command: RemoveQueueMember): Promise<any>;
}
