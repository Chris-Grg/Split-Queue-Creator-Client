import { Field, ObjectType } from "@nestjs/graphql"
import { IsString } from "class-validator"


@ObjectType()
export class GetAllQueue {
  @Field()
  @IsString()
  response: string

  @Field()
  @IsString()
  actionid: string
  
  @Field()
  @IsString()
  message: string

  @Field(() => [String]) 
  output: string[]
}