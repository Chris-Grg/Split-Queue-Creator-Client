import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class AddOrRemoveQueueMemberInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  queue: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  extension: string;
}