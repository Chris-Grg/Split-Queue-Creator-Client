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
exports.GetQueueQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const ami_service_1 = require("../../ami/ami.service");
const queue_service_1 = require("../queue.service");
const get_queue_query_1 = require("./get-queue.query");
let GetQueueQueryHandler = class GetQueueQueryHandler {
    constructor(queueService, amiService) {
        this.queueService = queueService;
        this.amiService = amiService;
    }
    async execute(query) {
        return this.amiService.getAll();
    }
};
exports.GetQueueQueryHandler = GetQueueQueryHandler;
exports.GetQueueQueryHandler = GetQueueQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_queue_query_1.GetQueueQuery),
    __metadata("design:paramtypes", [queue_service_1.QueueService,
        ami_service_1.AmiService])
], GetQueueQueryHandler);
//# sourceMappingURL=get-queue.handler.js.map