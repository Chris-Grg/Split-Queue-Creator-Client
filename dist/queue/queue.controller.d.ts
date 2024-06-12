import { CommandBus, QueryBus } from '@nestjs/cqrs';
export declare class QueueController {
    private readonly queryBus;
    private readonly commandBus;
    constructor(queryBus: QueryBus, commandBus: CommandBus);
}
