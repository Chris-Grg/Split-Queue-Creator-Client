import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AmiService } from './ami/ami.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';
import { QueueModule } from './queue/queue.module';
import { QueueService } from './queue/queue.service';
import { MemberModule } from './member/member.module';


@Module({
  imports: [QueueModule,
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }), ConfigurationModule, MemberModule],
  controllers: [AppController],
  providers: [
    AppService,
    QueueService,
    AmiService, ConfigurationService
  ],
})
export class AppModule { }
