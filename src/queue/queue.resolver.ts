import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    Args,
    Mutation,
    Query,
    Resolver
} from '@nestjs/graphql';
import { CreateQueueCommand } from './commands/create-queue/create-queue.command';
import { PauseQueueCommand } from './commands/pause-queue/pause-queue.command';
import { RemoveQueueMember } from './commands/remove-queue-member/remove-queue.command';
import { GetQueueQuery } from './queries/get-queue.query';
import { AddOrRemoveQueueMemberInput } from './types/add-or-remove-queue-input.schema';
import { GetAllQueue } from './types/get-all-queue.schema';
import { PauseQueueInput } from './types/pause-queue-input.schema';
import { QueueResponse } from './types/queue-response.schema';

@Resolver((of) => QueueResponse)
export class QueueResolver {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus,
    ) { }
    @Query(() => String)
    defaultQuery() {
        return 'Hello';
    }

    @Query(() => GetAllQueue)
    async getAllQueues() {
        const query = new GetQueueQuery();
        return await this.queryBus.execute(query);
    }

    @Mutation(() => QueueResponse)
    async addToQueue(@Args('input') input: AddOrRemoveQueueMemberInput) {
        const { queue, extension } = input;
        const command = new CreateQueueCommand(queue, extension);
        return await this.commandBus.execute(command);

    }

    @Mutation(() => QueueResponse)
    async pauseQueue(@Args('input') input: PauseQueueInput) {
        return await this.commandBus.execute(
            new PauseQueueCommand(input.queue, input.extension, input.reason),
        );

    }

    @Mutation(() => QueueResponse)
    async removeQueueMember(@Args('input') input: AddOrRemoveQueueMemberInput) {
        return await this.commandBus.execute(
            new RemoveQueueMember(input.queue, input.extension),
        )
    }
}
