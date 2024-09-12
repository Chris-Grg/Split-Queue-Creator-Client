import { InputType, Field, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class QueueResponse {
  @Field()
  response: string

  @Field()
  actionid: string
  
  @Field()
  message: string
}