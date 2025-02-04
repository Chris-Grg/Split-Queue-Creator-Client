import { Injectable } from '@nestjs/common';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { QueueResponse } from 'src/queue/types/queue-response.schema';



@Injectable()
export class AmiService {
  private ami: any;

  constructor(
    private configService: ConfigurationService,
  ) {
    this.ami = require('asterisk-manager')(
      this.configService.getAsteriskPort(),
      this.configService.getAsteriskIp(),
      this.configService.getAsteriskUsername(),
      this.configService.getAsteriskPassword(),
      true)
    this.ami.keepConnected()


  }


  async getAll(): Promise<QueueResponse> {
    return new Promise((resolve, reject) => {
      this.ami.action({
        action: "Command",
        command: "queue show"
      }, (err: any, res: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      });
    })

  }

  async addToQueue(queue, extension): Promise<QueueResponse> {

    return new Promise((resolve, reject) => {
      this.ami.action({
        Action: "QueueAdd",
        Queue: queue,
        Interface: `PJSIP/${extension}`,
        Member: `PJSIP/${extension}`,
      },
        (err: any, response: any) => {
          if (err) {
            reject(err)
          }
          else {
            resolve(response)
          }
        })
    })

  }

  async pauseOrUnpauseQueueMember(pauseMemeber): Promise<QueueResponse> {
    const { extension, queue, reason, pause } = pauseMemeber
    return new Promise((resolve, reject) => {
      this.ami.action({
        Action: "QueuePause",
        Interface: `PJSIP/${extension}`,
        Paused: pause,
        Queue: queue,
        Reason: reason,
      }, (err: any, response: any) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(response)

        }
      })
    })



  }
  async removeQueueMember(queueMember): Promise<QueueResponse> {
    const { queue, extension } = queueMember
    return new Promise((resolve, reject) => {
      this.ami.action({
        Action: "QueueRemove",
        Queue: queue,
        Interface: `PJSIP/${extension}`
      }, (err:any, response:any) => {

        if (err) {
          reject(err)
        }
        else {
          resolve(response)
        }


      })


    })
  }


}
