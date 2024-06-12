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
      // process.env.ASTERISK_PORT,
      // process.env.ASTERISK_IP,
      // process.env.ASTERISK_USERNAME,
      // process.env.ASTERISK_PASSWORD,
      this.configService.getAsteriskPort(),
      this.configService.getAsteriskIp(),
      this.configService.getAsteriskUsername(),
      this.configService.getAsteriskPassword,
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
          resolve(err)
        } else {
          resolve(res)
        }
      });
    })

  }

  async createQueue(queue, extension): Promise<QueueResponse> {

    return new Promise((resolve, reject) => {
      this.ami.action({
        Action: "QueueAdd",
        Queue: queue,
        Interface: `PJSIP/${extension}`,
        Member: `PJSIP/${extension}`,
      },
        (err: any, response: any) => {
          if (err) {
            resolve(err)
          }
          else {
            resolve(response)
          }
        })
    })

  }

  async pauseQueueMember(pauseMemeber): Promise<QueueResponse> {
    const { extension, queue, reason } = pauseMemeber
    return new Promise((resolve, reject) => {
      this.ami.action({
        Action: "QueuePause",
        Interface: `PJSIP/${extension}`,
        Paused: true,
        Queue: queue,
        Reason: reason,
      }, (err: any, response: any) => {
        if (err) {
          resolve(err);
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
      }, (err, response) => {

        if (err) {
          resolve({
            response: err.response,
            actionid: err.actionid,
            message: err.message
          })
        }
        else {
          resolve(response)
        }


      })


    })
  }


}
