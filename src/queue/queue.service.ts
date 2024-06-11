import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
    getQueue() {
        const queues = [
            { extension: "101", queue: "Queue 1" },
            { extension: "102", queue: "Queue 2" },
            // Add more queue objects as needed
        ];
        return queues
    }
}
