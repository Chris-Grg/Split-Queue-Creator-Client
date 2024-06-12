import { Injectable } from '@nestjs/common';
import { QueueResponse } from 'src/queue/types/queue-response.schema';



@Injectable()
export class AmiService {
  private ami: any;

  constructor() {
    this.ami = require('asterisk-manager')(
      process.env.ASTERISK_PORT,
      process.env.ASTERISK_IP,
      process.env.ASTERISK_USERNAME,
      process.env.ASTERISK_PASSWORD,
      true)

    this.ami.keepConnected()

    this.ami.on('connect', () => {
      console.log('Connected to Asterisk AMI');
    });

    this.ami.on('disconnect', () => {
      console.log('Disconnected from Asterisk AMI');
    });

    this.ami.on('error', (error) => {
      console.error('AMI Error:', error);
    });
  }


  async getAll(): Promise<QueueResponse> {
    return new Promise((resolve, reject) => {
      this.ami.action({
        action: "Command",
        command: "queue show"
      }, (err: any, res: any) => {
        if (err) {
          console.log(`:::::ERROR:::: ${err}`);
          resolve(err)
        } else {
          console.log(res);
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
            console.log("ERROR:::::::::::", err)
            resolve(err)
          }
          else {
            console.log("RESPONSE FROM QUEUE CREATE::::::", response)
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
          console.log(err)
          resolve(err);
        }
        else {
          console.log(response)
          resolve(response)

        }
      })
    })



  }
  async removeQueueMember(queueMember): Promise<any> {
    const { queue, extension } = queueMember
    return new Promise((resolve, reject) => {
      this.ami.action({
        Action: "QueueRemove",
        Queue: queue,
        Interface: `PJSIP/${extension}`
      }, (err, response) => {

        if (err) {
          console.log(`::::::::ERRR:::::::${err.actionid} `)
          resolve({
            response: err.response,
            actionid: err.actionid,
            message: err.message
          })
        }
        else {
          console.log(response)
          resolve(response)
        }


      })


    })
  }


}
