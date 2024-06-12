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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueResolver = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const graphql_1 = require("@nestjs/graphql");
const create_queue_command_1 = require("./commands/create-queue/create-queue.command");
const pause_queue_command_1 = require("./commands/pause-queue/pause-queue.command");
const remove_queue_command_1 = require("./commands/remove-queue-member/remove-queue.command");
const get_queue_query_1 = require("./queries/get-queue.query");
const add_or_remove_queue_input_schema_1 = require("./types/add-or-remove-queue-input.schema");
const get_all_queue_schema_1 = require("./types/get-all-queue.schema");
const pause_queue_input_schema_1 = require("./types/pause-queue-input.schema");
const queue_response_schema_1 = require("./types/queue-response.schema");
let QueueResolver = class QueueResolver {
    constructor(queryBus, commandBus) {
        this.queryBus = queryBus;
        this.commandBus = commandBus;
    }
    defaultQuery() {
        return 'Hello';
    }
    async getAllQueues() {
        const query = new get_queue_query_1.GetQueueQuery();
        return await this.queryBus.execute(query);
    }
    async addToQueue(input) {
        const { queue, extension } = input;
        const command = new create_queue_command_1.CreateQueueCommand(queue, extension);
        return await this.commandBus.execute(command);
    }
    async pauseQueue(input) {
        return await this.commandBus.execute(new pause_queue_command_1.PauseQueueCommand(input.queue, input.extension, input.reason));
    }
    async removeQueueMember(input) {
        return await this.commandBus.execute(new remove_queue_command_1.RemoveQueueMember(input.queue, input.extension));
    }
};
exports.QueueResolver = QueueResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QueueResolver.prototype, "defaultQuery", null);
__decorate([
    (0, graphql_1.Query)(() => get_all_queue_schema_1.GetAllQueue),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueResolver.prototype, "getAllQueues", null);
__decorate([
    (0, graphql_1.Mutation)(() => queue_response_schema_1.QueueResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_or_remove_queue_input_schema_1.AddOrRemoveQueueMemberInput]),
    __metadata("design:returntype", Promise)
], QueueResolver.prototype, "addToQueue", null);
__decorate([
    (0, graphql_1.Mutation)(() => queue_response_schema_1.QueueResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pause_queue_input_schema_1.PauseQueueInput]),
    __metadata("design:returntype", Promise)
], QueueResolver.prototype, "pauseQueue", null);
__decorate([
    (0, graphql_1.Mutation)(() => queue_response_schema_1.QueueResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_or_remove_queue_input_schema_1.AddOrRemoveQueueMemberInput]),
    __metadata("design:returntype", Promise)
], QueueResolver.prototype, "removeQueueMember", null);
exports.QueueResolver = QueueResolver = __decorate([
    (0, graphql_1.Resolver)((of) => queue_response_schema_1.QueueResponse),
    __metadata("design:paramtypes", [cqrs_1.QueryBus,
        cqrs_1.CommandBus])
], QueueResolver);
//# sourceMappingURL=queue.resolver.js.map