import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { AmiService } from "src/ami/ami.service";
import { GetQueueQuery } from "./get-queue.query";

@QueryHandler(GetQueueQuery)
export class GetQueueQueryHandler implements IQueryHandler<GetQueueQuery> {
    constructor(
        private amiService: AmiService
    ) { }
    async execute(query: GetQueueQuery) {
        return this.amiService.getAll()
    }

}