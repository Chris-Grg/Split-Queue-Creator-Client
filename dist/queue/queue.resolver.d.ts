import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddOrRemoveQueueMemberInput } from './types/add-or-remove-queue-input.schema';
import { PauseQueueInput } from './types/pause-queue-input.schema';
export declare class QueueResolver {
    private readonly queryBus;
    private readonly commandBus;
    constructor(queryBus: QueryBus, commandBus: CommandBus);
    defaultQuery(): string;
    getAllQueues(): Promise<any>;
    addToQueue(input: AddOrRemoveQueueMemberInput): Promise<any>;
    pauseQueue(input: PauseQueueInput): Promise<any>;
    removeQueueMember(input: AddOrRemoveQueueMemberInput): Promise<any>;
}
