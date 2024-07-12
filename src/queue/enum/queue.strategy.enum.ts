import { registerEnumType } from "@nestjs/graphql";

export enum StrategyEnum {
    RINGALL = 'ringall',
    RR = 'rr'
}

registerEnumType(StrategyEnum, {
    name: 'StrategyEnum', // this name will be used in the GraphQL schema
  });