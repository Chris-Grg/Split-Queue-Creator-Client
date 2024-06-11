import { ICommandHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { PauseQueueCommand } from "./pause-queue.command";
export declare class PauseQueueCommandHandler implements ICommandHandler<PauseQueueCommand> {
    private amiService;
    constructor(amiService: AmiService);
    execute(command: PauseQueueCommand): Promise<any>;
}
