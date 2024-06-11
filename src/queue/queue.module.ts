import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { GetQueueQueryHandler } from './queries/get-queue.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { QueueService } from './queue.service';
import { CreateQueueCommandHandler } from './commands/create-queue/create-queue.handler';
import { QueueResolver } from './queue.resolver';
import { PauseQueueCommandHandler } from './commands/pause-queue/pause-queue.handler';
import { AmiService } from 'src/ami/ami.service';
import { RemoveQueueMemberHandler } from './commands/remove-queue-member/remove-queue.handler';

export const CommandHandlers=[
  CreateQueueCommandHandler,
  PauseQueueCommandHandler,
  RemoveQueueMemberHandler
]
export const QueryHandlers=[
  GetQueueQueryHandler
]
@Module({
  imports:[
    CqrsModule,
    
  ],
  providers:[...CommandHandlers,
    ...QueryHandlers,
    QueueResolver,
  QueueService,
 AmiService],
  controllers: [QueueController],
  exports:[QueueService]
})
export class QueueModule {}
