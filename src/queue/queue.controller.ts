import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';


@Controller('api/queue')
export class QueueController {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus

    ) {
    }
    // @Get()
    // async getAllQueue() {
    //     const query = new GetQueueQuery()
    //     return await this.queryBus.execute(query)
    // }

    // @Post("/add")
    // async addToQueue(@Body(new ValidationPipe) addQueueMemberInput: AddOrRemoveQueueMemberInput) {
    //     const { queue, extension } = addQueueMemberInput
    //     const command = new CreateQueueCommand(queue, extension)
    //     return await this.commandBus.execute(command)
    // }
} 
