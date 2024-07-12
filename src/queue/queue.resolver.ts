import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    Args,
    Mutation,
    Query,
    Resolver
} from '@nestjs/graphql';
import { AddToQueueCommand } from './commands/add-to-queue/add-to-queue.command';
import { CreateQueueCommand } from './commands/create-queue/create-queue.command';
import { DeleteQueueCommand } from './commands/delete-queue/delete-queue.command';
import { PauseQueueCommand } from './commands/pause-or-unpause-queue/pause-or-unpause-queue.command';
import { RemoveQueueMember } from './commands/remove-queue-member/remove-queue.command';
import { UpdateQueueCommand } from './commands/update-queue/update-queue.command';
import { GetQueueQuery } from './queries/get-queue.query';
import { AddOrRemoveQueueMemberInput } from './types/add-or-remove-queue-input.schema';
import { CreateOrRemoveQueueInput, DeleteQueueInput } from './types/create-or-remove-queue-input.schema';
import { GetAllQueue } from './types/get-all-queue.schema';
import { PauseQueueInput } from './types/pause-queue-input.schema';
import { QueueResponse } from './types/queue-response.schema';
import { UpdateQueueInput } from './types/update-queue-input.schema';

@Resolver((of) => QueueResponse)
export class QueueResolver {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus,
    ) { }
    @Query(() => String)
    defaultQuery() {
        return 'Welcome to Dynamic Queue API for ConnectInfinity';
    }

    @Query(() => GetAllQueue)
    async getAllQueues() {
        const query = new GetQueueQuery();
        return await this.queryBus.execute(query);
    }

    @Mutation(() => String)
    async createQueue(@Args('input') input: CreateOrRemoveQueueInput) {
        const { queue_name, strategy, ringinuse, timeout, wrapuptime } = input
        return await this.commandBus.execute(
            new CreateQueueCommand(queue_name, strategy, ringinuse, timeout, wrapuptime),
        );
    }

    @Mutation(() => String)
    async deleteQueue(@Args('input') input: DeleteQueueInput) {
        return await this.commandBus.execute(
            new DeleteQueueCommand(input.queue_name),
        );
    }

    @Mutation(() => String)
    async updateQueue(@Args('input') input: UpdateQueueInput) {
        const { name, queue_name, strategy, ringinuse, timeout, wrapuptime } = input
        return await this.commandBus.execute(
            new UpdateQueueCommand(name, queue_name, strategy, ringinuse, timeout, wrapuptime),
        );
    }

    @Mutation(() => QueueResponse)
    async addToQueue(@Args('input') input: AddOrRemoveQueueMemberInput) {
        const { queue, extension } = input;
        const command = new AddToQueueCommand(queue, extension);
        return await this.commandBus.execute(command);

    }

    @Mutation(() => QueueResponse)
    async pauseQueue(@Args('input') input: PauseQueueInput) {
        return await this.commandBus.execute(
            new PauseQueueCommand(input.queue, input.extension, input.reason, input.pause),
        );

    }

    @Mutation(() => QueueResponse)
    async removeQueueMember(@Args('input') input: AddOrRemoveQueueMemberInput) {
        return await this.commandBus.execute(
            new RemoveQueueMember(input.queue, input.extension),
        )
    }
}
