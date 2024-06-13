import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';


@Controller('api/queue')
export class QueueController {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus

    ) {
    }
} 
