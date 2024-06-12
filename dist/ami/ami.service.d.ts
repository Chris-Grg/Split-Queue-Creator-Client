import { QueueResponse } from 'src/queue/types/queue-response.schema';
export declare class AmiService {
    private ami;
    constructor();
    getAll(): Promise<QueueResponse>;
    createQueue(queue: any, extension: any): Promise<QueueResponse>;
    pauseQueueMember(pauseMemeber: any): Promise<QueueResponse>;
    removeQueueMember(queueMember: any): Promise<any>;
}
