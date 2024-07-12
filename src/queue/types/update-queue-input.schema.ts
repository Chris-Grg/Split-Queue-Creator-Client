import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from 'class-validator';
import { StrategyEnum } from "../enum/queue.strategy.enum";

@InputType()
export class UpdateQueueInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    queue_name: string;

    @Field(()=>StrategyEnum)
    @IsString()
    @IsNotEmpty()
    strategy: StrategyEnum;

    @Field()
    @IsString()
    @IsNotEmpty()
    ringinuse: boolean;

    @Field()
    @IsString()
    @IsNotEmpty()
    timeout: number;

    @Field()
    @IsString()
    @IsNotEmpty()
    wrapuptime: number;


}
