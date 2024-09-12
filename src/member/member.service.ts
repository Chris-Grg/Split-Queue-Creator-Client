import { Injectable } from "@nestjs/common";
import axios from "axios";
import { ConfigurationService } from "src/configuration/configuration.service";

@Injectable()
export class MemberService {
    private readonly url: string;

    constructor(
        private configService: ConfigurationService,
    ) {
        this.url = this.configService.getNodeAppIp();
    }

    async deleteMember(queue: string,name: string): Promise<string> {
        const reqBody ={
            name: name,
            queue: queue
        }
        try {
            const response = await axios.post(`${this.url}/api/members/delete`, reqBody)
            return JSON.stringify(response.data);

        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    }
    async updateMember(queue: string,name: string,newname:string, newqueue:string): Promise<string> {
        const reqBody ={
            name: name,
            queue: queue,
            newname: newname,
            newqueue: newqueue
        }
        try {
            const response = await axios.post(`${this.url}/api/members/update`, reqBody)
            return JSON.stringify(response.data);

        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    }
    async addMember(queue: string,name: string): Promise<string> {
        const reqBody ={
            name: name,
            queue: queue,
            
        }
        try {
            const response = await axios.post(`${this.url}/api/members/create`, reqBody)
            return JSON.stringify(response.data);

        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    }
}