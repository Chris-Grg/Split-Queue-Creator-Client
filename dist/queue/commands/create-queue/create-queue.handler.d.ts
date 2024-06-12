import { ICommandHandler } from "@nestjs/cqrs";
import { CreateQueueCommand } from "./create-queue.command";
import { AmiService } from "src/ami/ami.service";
export declare class CreateQueueCommandHandler implements ICommandHandler<CreateQueueCommand> {
    private amiService;
    constructor(amiService: AmiService);
    execute(command: CreateQueueCommand): Promise<any>;
}
