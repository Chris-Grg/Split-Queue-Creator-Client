import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
    private asteriskIP: string;
    private asteriskUsername: string;
    private asteriskPassword: string;
    private asteriskPort: string;
    private port: string



    constructor(private readonly configService: ConfigService) {
        this.asteriskIP = this.configService.get<string>('ASTERISK_IP');
        this.asteriskUsername = this.configService.get<string>('ASTERISK_USERNAME');
        this.asteriskPassword = this.configService.get<string>('ASTERISK_PASSWORD');
        this.asteriskPort = this.configService.get<string>('ASTERISK_PORT');
        this.port = this.configService.get<string>('PORT');


    }

    getAsteriskIp = (): string => {
        return this.asteriskIP;
    };
    getAsteriskUsername = (): string => {
        return this.asteriskUsername;
    };
    getAsteriskPassword = (): string => {
        return this.asteriskPassword;
    };
    getAsteriskPort = (): string => {
        return this.asteriskPort;
    };
    getPort = (): string => {
        return this.port;
    };


}