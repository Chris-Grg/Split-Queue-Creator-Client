import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class PauseQueueInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  queue: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  extension: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  reason: string;

  @Field()
  @IsBoolean()
  @IsNotEmpty()
  pause: boolean;
}