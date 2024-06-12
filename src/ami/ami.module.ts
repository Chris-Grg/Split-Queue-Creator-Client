import { Module } from "@nestjs/common";
import { ConfigurationModule } from "src/configuration/configuration.module";
import { AmiService } from "./ami.service";

@Module({
  imports: [ConfigurationModule],
  providers: [
    AmiService],
  controllers: [],
  exports: [AmiService]
})
export class QueueModule { }
