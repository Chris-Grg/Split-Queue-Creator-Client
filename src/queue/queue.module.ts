import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AmiService } from 'src/ami/ami.service';
import { CreateQueueCommandHandler } from './commands/create-queue/create-queue.handler';
import { PauseQueueCommandHandler } from './commands/pause-or-unpause-queue/pause-or-unpause-queue.handler';
import { RemoveQueueMemberHandler } from './commands/remove-queue-member/remove-queue.handler';
import { GetQueueQueryHandler } from './queries/get-queue.handler';
import { QueueController } from './queue.controller';
import { QueueResolver } from './queue.resolver';
import { QueueService } from './queue.service';

export const CommandHandlers = [
  CreateQueueCommandHandler,
  PauseQueueCommandHandler,
  RemoveQueueMemberHandler
]
export const QueryHandlers = [
  GetQueueQueryHandler
]
@Module({
  imports: [
    CqrsModule,

  ],
  providers: [...CommandHandlers,
  ...QueryHandlers,
    QueueResolver,
    QueueService,
    AmiService],
  controllers: [QueueController],
  exports: [QueueService]
})
export class QueueModule { }
