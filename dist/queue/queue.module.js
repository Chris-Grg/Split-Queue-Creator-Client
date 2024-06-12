"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = exports.QueryHandlers = exports.CommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const queue_controller_1 = require("./queue.controller");
const get_queue_handler_1 = require("./queries/get-queue.handler");
const cqrs_1 = require("@nestjs/cqrs");
const queue_service_1 = require("./queue.service");
const create_queue_handler_1 = require("./commands/create-queue/create-queue.handler");
const queue_resolver_1 = require("./queue.resolver");
const pause_queue_handler_1 = require("./commands/pause-queue/pause-queue.handler");
const ami_service_1 = require("../ami/ami.service");
const remove_queue_handler_1 = require("./commands/remove-queue-member/remove-queue.handler");
exports.CommandHandlers = [
    create_queue_handler_1.CreateQueueCommandHandler,
    pause_queue_handler_1.PauseQueueCommandHandler,
    remove_queue_handler_1.RemoveQueueMemberHandler
];
exports.QueryHandlers = [
    get_queue_handler_1.GetQueueQueryHandler
];
let QueueModule = class QueueModule {
};
exports.QueueModule = QueueModule;
exports.QueueModule = QueueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
        ],
        providers: [...exports.CommandHandlers,
            ...exports.QueryHandlers,
            queue_resolver_1.QueueResolver,
            queue_service_1.QueueService,
            ami_service_1.AmiService],
        controllers: [queue_controller_1.QueueController],
        exports: [queue_service_1.QueueService]
    })
], QueueModule);
//# sourceMappingURL=queue.module.js.map