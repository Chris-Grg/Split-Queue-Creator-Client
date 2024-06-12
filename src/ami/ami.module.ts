import { Module } from "@nestjs/common";
import { AmiService } from "./ami.service";

@Module({
  imports:[],
  providers:[
 AmiService],
  controllers: [],
  exports:[AmiService]
})
export class QueueModule {}
