import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { CreateOrRemoveQueueInput } from './types/create-or-remove-queue-input.schema';
import { UpdateQueueInput } from './types/update-queue-input.schema';

@Injectable()
export class QueueService {
    private readonly url: string;

    constructor(
        private configService: ConfigurationService,
    ) {
        this.url = this.configService.getNodeAppIp();
    }

    async deleteQueue(queueName: string): Promise<string> {
        try {
            const response = await axios.delete(`${this.url}/api/delete`, { data:{queue_name:queueName} })
            return response.data;

        } catch (error) {
            throw new Error('Error: ' + error.response.data.error)
        }
    }

    async createQueue(queue: CreateOrRemoveQueueInput): Promise<string> {
        const data = {
            queue_name: queue.queue_name,
            strategy: queue.strategy,
            ringinuse: queue.ringinuse,
            timeout: queue.timeout,
            wrapuptime: queue.wrapuptime
        }
        try {
            const response = await axios.post(`${this.url}/api/create`, data)
            return response.data;
        } catch (error) {
            throw new Error('Error: ' + error.response.data.message)
        }
    }

    async updateQueue(queue: UpdateQueueInput): Promise<string> {

        const data = {
            newname: queue.name,
            queue_name: queue.queue_name,
            strategy: queue.strategy,
            ringinuse: queue.ringinuse,
            timeout: queue.timeout,
            wrapuptime: queue.wrapuptime
        }
        try {
            const response = await axios.patch(`${this.url}/api/update`, data)
            return response.data;
        } catch (error) {
            throw new Error('Error: ' + error.response.data.error)
        }
    }
}
