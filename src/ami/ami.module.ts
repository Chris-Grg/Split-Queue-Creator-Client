import { Module } from "@nestjs/common";
import { ConfigurationModule } from "src/configuration/configuration.module";
import { ConfigurationService } from "src/configuration/configuration.service";
import { AmiService } from "./ami.service";

@Module({
  imports: [ConfigurationModule],
  providers: [
    AmiService, ConfigurationService],
  controllers: [],
  exports: [AmiService]
})
export class QueueModule { }
