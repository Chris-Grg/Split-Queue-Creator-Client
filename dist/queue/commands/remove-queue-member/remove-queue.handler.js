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
exports.RemoveQueueMemberHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const ami_service_1 = require("../../../ami/ami.service");
const remove_queue_command_1 = require("./remove-queue.command");
let RemoveQueueMemberHandler = class RemoveQueueMemberHandler {
    constructor(amiService) {
        this.amiService = amiService;
    }
    async execute(command) {
        return this.amiService.removeQueueMember(command);
    }
};
exports.RemoveQueueMemberHandler = RemoveQueueMemberHandler;
exports.RemoveQueueMemberHandler = RemoveQueueMemberHandler = __decorate([
    (0, cqrs_1.CommandHandler)(remove_queue_command_1.RemoveQueueMember),
    __metadata("design:paramtypes", [ami_service_1.AmiService])
], RemoveQueueMemberHandler);
//# sourceMappingURL=remove-queue.handler.js.map