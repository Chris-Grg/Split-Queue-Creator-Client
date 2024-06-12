import { GetQueueQueryHandler } from './queries/get-queue.handler';
import { CreateQueueCommandHandler } from './commands/create-queue/create-queue.handler';
import { PauseQueueCommandHandler } from './commands/pause-queue/pause-queue.handler';
import { RemoveQueueMemberHandler } from './commands/remove-queue-member/remove-queue.handler';
export declare const CommandHandlers: (typeof CreateQueueCommandHandler | typeof PauseQueueCommandHandler | typeof RemoveQueueMemberHandler)[];
export declare const QueryHandlers: (typeof GetQueueQueryHandler)[];
export declare class QueueModule {
}
