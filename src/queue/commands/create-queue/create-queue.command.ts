import { ICommand } from "@nestjs/cqrs";
import { StrategyEnum } from "src/queue/enum/queue.strategy.enum";

export class CreateQueueCommand implements ICommand {
    constructor(
        public readonly queue_name: string,
        public readonly strategy: StrategyEnum,
        public readonly ringinuse: boolean,
        public readonly timeout: number,
        public readonly wrapuptime: number,
    ) {


    }
}