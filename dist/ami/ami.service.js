"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmiService = void 0;
const common_1 = require("@nestjs/common");
let AmiService = class AmiService {
    constructor() {
        this.ami = require('asterisk-manager')(process.env.ASTERISK_PORT, process.env.ASTERISK_IP, process.env.ASTERISK_USERNAME, process.env.ASTERISK_PASSWORD, true);
        this.ami.keepConnected();
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
    async getAll() {
        return new Promise((resolve, reject) => {
            this.ami.action({
                action: "Command",
                command: "queue show"
            }, (err, res) => {
                if (err) {
                    console.log(`:::::ERROR:::: ${err}`);
                    resolve(err);
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            });
        });
    }
    async createQueue(queue, extension) {
        return new Promise((resolve, reject) => {
            this.ami.action({
                Action: "QueueAdd",
                Queue: queue,
                Interface: `PJSIP/${extension}`,
                Member: `PJSIP/${extension}`,
            }, (err, response) => {
                if (err) {
                    console.log("ERROR:::::::::::", err);
                    resolve(err);
                }
                else {
                    console.log("RESPONSE FROM QUEUE CREATE::::::", response);
                    resolve(response);
                }
            });
        });
    }
    async pauseQueueMember(pauseMemeber) {
        const { extension, queue, reason } = pauseMemeber;
        return new Promise((resolve, reject) => {
            this.ami.action({
                Action: "QueuePause",
                Interface: `PJSIP/${extension}`,
                Paused: true,
                Queue: queue,
                Reason: reason,
            }, (err, response) => {
                if (err) {
                    console.log(err);
                    resolve(err);
                }
                else {
                    console.log(response);
                    resolve(response);
                }
            });
        });
    }
    async removeQueueMember(queueMember) {
        const { queue, extension } = queueMember;
        return new Promise((resolve, reject) => {
            this.ami.action({
                Action: "QueueRemove",
                Queue: queue,
                Interface: `PJSIP/${extension}`
            }, (err, response) => {
                if (err) {
                    console.log(`::::::::ERRR:::::::${err.actionid} `);
                    resolve({
                        response: err.response,
                        actionid: err.actionid,
                        message: err.message
                    });
                }
                else {
                    console.log(response);
                    resolve(response);
                }
            });
        });
    }
};
exports.AmiService = AmiService;
exports.AmiService = AmiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AmiService);
//# sourceMappingURL=ami.service.js.map