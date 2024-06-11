import { IQueryHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { QueueService } from "../queue.service";
import { GetQueueQuery } from "./get-queue.query";
export declare class GetQueueQueryHandler implements IQueryHandler<GetQueueQuery> {
    private queueService;
    private amiService;
    constructor(queueService: QueueService, amiService: AmiService);
    execute(query: GetQueueQuery): Promise<any>;
}
