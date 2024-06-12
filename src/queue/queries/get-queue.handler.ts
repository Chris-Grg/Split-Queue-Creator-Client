import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { QueueService } from "../queue.service";
import { GetQueueQuery } from "./get-queue.query";

@QueryHandler(GetQueueQuery)
export class GetQueueQueryHandler implements IQueryHandler<GetQueueQuery> {
    constructor(
        private queueService: QueueService,
        private amiService: AmiService
    ) { }
    async execute(query: GetQueueQuery): Promise<any> {
        return this.amiService.getAll()
    }
}